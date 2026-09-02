import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
  download_count: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
}

function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const isInfoRequest = searchParams.get("info") === "true";

  const owner = siteConfig.github.owner;
  const repo = siteConfig.github.repo;

  // Default fallback URL if GitHub API or asset lookup is unavailable
  const fallbackDownloadUrl =
    siteConfig.links.apkFallback ||
    `https://github.com/${owner}/${repo}/releases/latest/download/app-release.apk`;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "KotoGelo-Web-App",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
      {
        headers,
        next: { revalidate: 300 }, // Cache release info for 5 minutes
      }
    );

    if (!res.ok) {
      if (isInfoRequest) {
        return NextResponse.json({
          version: "v1.0.0",
          name: "KotoGelo App",
          downloadUrl: fallbackDownloadUrl,
          sizeFormatted: "~28 MB",
          sizeBytes: 29360128,
          publishedAt: new Date().toISOString(),
          isLive: false,
        });
      }
      return NextResponse.redirect(fallbackDownloadUrl, 307);
    }

    const release: GitHubRelease = await res.json();

    // Find the APK asset (.apk file)
    const apkAsset =
      release.assets.find(
        (asset) =>
          asset.name.toLowerCase().endsWith(".apk") ||
          asset.content_type === "application/vnd.android.package-archive"
      ) || release.assets[0];

    const downloadUrl = apkAsset?.browser_download_url || fallbackDownloadUrl;
    const sizeFormatted = apkAsset ? formatBytes(apkAsset.size) : "~28 MB";

    if (isInfoRequest) {
      return NextResponse.json({
        version: release.tag_name || "v1.0.0",
        name: release.name || `KotoGelo ${release.tag_name}`,
        downloadUrl,
        sizeFormatted,
        sizeBytes: apkAsset?.size || 0,
        publishedAt: release.published_at,
        releaseUrl: release.html_url,
        releaseNotes: release.body || "",
        isLive: true,
      });
    }

    // Direct 307 Temporary Redirect to the latest APK asset
    return NextResponse.redirect(downloadUrl, 307);
  } catch {
    if (isInfoRequest) {
      return NextResponse.json({
        version: "v1.0.0",
        name: "KotoGelo App",
        downloadUrl: fallbackDownloadUrl,
        sizeFormatted: "~28 MB",
        sizeBytes: 29360128,
        publishedAt: new Date().toISOString(),
        isLive: false,
      });
    }
    return NextResponse.redirect(fallbackDownloadUrl, 307);
  }
}
