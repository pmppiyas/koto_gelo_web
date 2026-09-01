import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "KotoGelo - Smart Expense & Mess Tracker";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E1B4B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "60px",
          color: "#FFFFFF",
        }}
      >
        {/* Background glow elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "15%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "15%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "26px",
              background: "linear-gradient(135deg, #2563EB, #4F46E5, #10B981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
            }}
          >
            <div
              style={{
                width: "78px",
                height: "78px",
                borderRadius: "20px",
                background: "#020617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "44px",
                fontWeight: 900,
                color: "#FFFFFF",
              }}
            >
              ক
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 900,
                letterSpacing: "-1px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              KotoGelo
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#38BDF8",
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  padding: "4px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                {siteConfig.banglaName}
              </span>
            </div>
            <div style={{ fontSize: "20px", color: "#94A3B8", marginTop: "4px" }}>
              {siteConfig.tagline}
            </div>
          </div>
        </div>

        {/* Main Bengali Punchline */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: 800,
            textAlign: "center",
            maxWidth: "960px",
            lineHeight: 1.3,
            background: "linear-gradient(90deg, #FFFFFF, #E2E8F0, #67E8F9)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "36px",
          }}
        >
          {siteConfig.description}
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(51, 65, 85, 0.8)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#F1F5F9",
            }}
          >
            ⚡ দ্রুত এন্ট্রি (1 Sec)
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(51, 65, 85, 0.8)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#F1F5F9",
            }}
          >
            👥 মেস ও ট্যুর বিল স্প্লিট
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(51, 65, 85, 0.8)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#10B981",
            }}
          >
            🔒 ১০০% অফলাইন ও ফ্রি
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(51, 65, 85, 0.8)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#38BDF8",
            }}
          >
            📱 Android & Web
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
