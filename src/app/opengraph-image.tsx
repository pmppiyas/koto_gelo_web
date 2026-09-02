import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KotoGelo (কত গেলো?) - Smart Expense Manager";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E1B4B 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Subtle Background Glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo Card Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "28px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "28px",
              background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span style={{ fontSize: "52px", fontWeight: "900", color: "#FFFFFF" }}>
              ৳
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "68px",
                fontWeight: "900",
                letterSpacing: "-2px",
                color: "#FFFFFF",
              }}
            >
              Koto<span style={{ color: "#F43F5E" }}>Gelo</span>
            </span>
            <span
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#94A3B8",
                marginTop: "-6px",
              }}
            >
              কত গেলো?
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: "800",
            textAlign: "center",
            color: "#E2E8F0",
            maxWidth: "900px",
            lineHeight: "1.3",
            marginBottom: "16px",
            zIndex: 10,
          }}
        >
          Smart Expense Manager & Group Bill Splitter
        </div>

        {/* Bangla Subtitle */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: "850px",
            marginBottom: "36px",
            zIndex: 10,
          }}
        >
          দৈনিক খরচের হিসাব ও মেস ম্যানেজমেন্টের সহজ সমাধান
        </div>

        {/* Highlights Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: "9999px",
              padding: "10px 24px",
              color: "#34D399",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            ✓ 100% Free & No Ads
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(79, 70, 229, 0.15)",
              border: "1px solid rgba(79, 70, 229, 0.4)",
              borderRadius: "9999px",
              padding: "10px 24px",
              color: "#A5B4FC",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            ✓ Offline-First & Private
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(244, 63, 94, 0.15)",
              border: "1px solid rgba(244, 63, 94, 0.4)",
              borderRadius: "9999px",
              padding: "10px 24px",
              color: "#FDA4AF",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            ✓ Mess & Tour Bill Split
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
