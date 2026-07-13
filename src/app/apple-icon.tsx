import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6d5bff 0%, #22d3ee 100%)",
          color: "white",
          fontSize: 84,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        AI
      </div>
    ),
    { ...size },
  );
}
