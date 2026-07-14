import { ImageResponse } from "next/og";
import { usNationOutlinePath, US_MAP_VIEWBOX } from "@/lib/us-map";

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
          background: "linear-gradient(135deg, #b21942 0%, #c9962b 100%)",
        }}
      >
        <svg viewBox={US_MAP_VIEWBOX} width="20" height="12.5" fill="#ffffff">
          <path d={usNationOutlinePath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
