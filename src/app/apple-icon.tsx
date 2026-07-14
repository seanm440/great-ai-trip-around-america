import { ImageResponse } from "next/og";
import { usNationOutlinePath, US_MAP_VIEWBOX } from "@/lib/us-map";

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
          background: "linear-gradient(135deg, #b21942 0%, #c9962b 100%)",
        }}
      >
        <svg viewBox={US_MAP_VIEWBOX} width="110" height="68.75" fill="#ffffff">
          <path d={usNationOutlinePath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
