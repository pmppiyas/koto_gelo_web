"use client";

import { useState, useEffect } from "react";

export interface ReleaseInfo {
  version: string;
  name: string;
  downloadUrl: string;
  sizeFormatted: string;
  sizeBytes: number;
  publishedAt: string;
  releaseUrl?: string;
  releaseNotes?: string;
  isLive: boolean;
}

const DEFAULT_INFO: ReleaseInfo = {
  version: "v1.0.0",
  name: "KotoGelo App",
  downloadUrl: "/api/download",
  sizeFormatted: "~28 MB",
  sizeBytes: 29360128,
  publishedAt: new Date().toISOString(),
  isLive: false,
};

export function useReleaseInfo() {
  const [info, setInfo] = useState<ReleaseInfo>(DEFAULT_INFO);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchReleaseInfo() {
      try {
        const res = await fetch("/api/download?info=true");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data) {
            setInfo(data);
          }
        }
      } catch {
        // Fallback to default state
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchReleaseInfo();

    return () => {
      isMounted = false;
    };
  }, []);

  return { info, loading };
}
