import { ImageResponse } from "next/og";
import { getCityBySlug } from "@/data/cities";
import { usNationOutlinePath, US_MAP_VIEWBOX } from "@/lib/us-map";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATUS_COLOR: Record<string, string> = {
  upcoming: "#6d5bff",
  planned: "#6b6f80",
  "in-progress": "#f6a63c",
  completed: "#22d3ee",
};

const STATUS_LABEL: Record<string, string> = {
  upcoming: "Upcoming Stop",
  planned: "Planned",
  "in-progress": "On The Road",
  completed: "Visited",
};

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  const statusColor = city ? STATUS_COLOR[city.status] : "#6d5bff";
  const statusLabel = city ? STATUS_LABEL[city.status] : "Upcoming Stop";

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
            "radial-gradient(circle at 10% 10%, rgba(109,91,255,0.32), transparent 45%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.26), transparent 45%)",
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
              background: "linear-gradient(135deg, #b21942 0%, #c9962b 100%)",
            }}
          >
            <svg viewBox={US_MAP_VIEWBOX} width="28" height="17.5" fill="#ffffff">
              <path d={usNationOutlinePath} />
            </svg>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f6f7f9" }}>
            Great American AI Road Show
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: statusColor,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: statusColor,
              }}
            />
            {statusLabel}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f6f7f9",
            }}
          >
            {city ? `${city.name}, ${city.stateAbbr}` : "Great American AI Road Show"}
          </div>

          {city && (
            <div style={{ display: "flex", fontSize: 28, color: "#a7abbb", maxWidth: 860 }}>
              {city.tagline}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {(city?.themes ?? []).map((theme) => (
            <div
              key={theme}
              style={{
                display: "flex",
                fontSize: 20,
                color: "#a7abbb",
                border: "1px solid #23273370",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {theme}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
