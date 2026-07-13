import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6d5bff 0%, #22d3ee 100%)",
          color: "white",
          fontSize: 15,
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
