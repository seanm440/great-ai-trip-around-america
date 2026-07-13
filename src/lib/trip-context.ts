import { cities } from "@/data/cities";
import { waypoints } from "@/data/waypoints";
import { timeline } from "@/data/timeline";
import { impactStats } from "@/data/impact-stats";
import { busFeatures } from "@/data/bus-features";

function buildCitiesBlock(): string {
  return cities
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((city) => {
      const companies = city.companies
        .map((c) => `    - ${c.name} (${c.category}): ${c.blurb}`)
        .join("\n");
      const dataCenters = city.dataCenters
        .map((d) => `    - ${d.name} (${d.operator}): ${d.blurb}`)
        .join("\n");
      return [
        `Stop ${city.order} — ${city.name}, ${city.stateAbbr} [${city.status}, ${city.dateWindow}]`,
        `  Tagline: ${city.tagline}`,
        `  Themes: ${city.themes.join(", ")}`,
        `  Companies visiting:\n${companies}`,
        dataCenters ? `  Infrastructure:\n${dataCenters}` : "",
        `  Universities: ${city.universities.join(", ")}`,
        `  Highlights: ${city.highlights.join("; ")}`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");
}

function buildWaypointsBlock(): string {
  return waypoints
    .map(
      (w) =>
        `- ${w.name}, ${w.stateAbbr}: ${w.business.name} — ${w.business.blurb}`,
    )
    .join("\n");
}

function buildTimelineBlock(): string {
  return timeline.map((t) => `- ${t.label}: ${t.title} — ${t.description}`).join("\n");
}

function buildStatsBlock(): string {
  return impactStats
    .map((s) => `- ${s.value} — ${s.label} (Source: ${s.source})`)
    .join("\n");
}

function buildBusBlock(): string {
  return busFeatures.map((f) => `- ${f.title}: ${f.description}`).join("\n");
}

export function buildTripSystemPrompt(): string {
  return `You are the trip assistant for "The Great AI Trip Around America" — a website for a road-trip concept documenting how AI is creating opportunity across the US.

Answer visitor questions using ONLY the reference data below. Be warm, concise, and confident — this site's voice is optimistic and evidence-based, never hype-y or dismissive of real concerns. Never invent companies, statistics, or facts not present in this data. If asked something the data doesn't cover, say so honestly and suggest what part of the site might help (e.g. "check the Route section" or "that's not something we've announced yet").

The trip has NOT happened yet — all stops are upcoming/planned. Speak about them in future tense ("we'll visit...", "when the bus stops in...").

Keep replies short — 2-4 sentences unless the visitor asks for a list or more detail.

=== ROUTE STOPS ===
${buildCitiesBlock()}

=== SMALL BUSINESSES ALONG THE ROUTE ===
${buildWaypointsBlock()}

=== TIMELINE ===
${buildTimelineBlock()}

=== AI IMPACT STATS (cite the source when you use one) ===
${buildStatsBlock()}

=== THE BUS ===
${buildBusBlock()}
`;
}
