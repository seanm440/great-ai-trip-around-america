import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Great AI Trip Around America";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#050609",
          backgroundImage:
            "radial-gradient(circle at 8% 15%, rgba(109,91,255,0.35), transparent 45%), radial-gradient(circle at 92% 85%, rgba(34,211,238,0.28), transparent 45%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6d5bff 0%, #22d3ee 100%)",
              color: "white",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f6f7f9" }}>
            The Great AI Trip
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f6f7f9",
            }}
          >
            <span>The Great AI Trip</span>
            <span style={{ color: "#22d3ee" }}>Around America</span>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a7abbb", maxWidth: 820 }}>
            One bus. Thousands of miles. Countless conversations about the future of AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6b6f80",
          }}
        >
          Washington DC · Nashville · Tampa · Austin · Central Valley
        </div>
      </div>
    ),
    { ...size },
  );
}
