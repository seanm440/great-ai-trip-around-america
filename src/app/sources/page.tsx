import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, Server, Building2, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SourceLink } from "@/components/ui/SourceLink";
import { cities } from "@/data/cities";
import { waypoints } from "@/data/waypoints";
import { impactStats } from "@/data/impact-stats";
import { infrastructureFacts } from "@/data/infrastructure-facts";
import { opportunityStories } from "@/data/opportunity-stories";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Every stat, company, and story on this site, with a link to where it came from.",
};

interface SourceRow {
  label: string;
  context?: string;
  sourceName: string;
  sourceUrl: string;
}

interface SourceCategory {
  icon: typeof BarChart3;
  title: string;
  href: string;
  items: SourceRow[];
}

const categories: SourceCategory[] = [
  {
    icon: BarChart3,
    title: "Site-Wide Stats",
    href: "/#stats",
    items: impactStats.map((stat) => ({
      label: `${stat.value} — ${stat.label}`,
      sourceName: stat.source,
      sourceUrl: stat.url,
    })),
  },
  {
    icon: Server,
    title: "Data Center Infrastructure",
    href: "/#infrastructure",
    items: infrastructureFacts.map((fact) => ({
      label: `${fact.value} — ${fact.label}`,
      sourceName: fact.source,
      sourceUrl: fact.url,
    })),
  },
  ...cities
    .slice()
    .sort((a, b) => a.order - b.order)
    .filter((city) => city.companies.length > 0 || city.dataCenters.length > 0)
    .map((city) => ({
      icon: Building2,
      title: `${city.name}, ${city.stateAbbr}`,
      href: `/cities/${city.slug}`,
      items: [
        ...city.companies.map((company) => ({
          label: company.name,
          context: company.blurb,
          sourceName: company.sourceName,
          sourceUrl: company.sourceUrl,
        })),
        ...city.dataCenters.map((dc) => ({
          label: dc.name,
          context: dc.blurb,
          sourceName: dc.sourceName,
          sourceUrl: dc.sourceUrl,
        })),
      ],
    })),
  {
    icon: MapPin,
    title: "Small Businesses Along the Route",
    href: "/#route",
    items: waypoints.map((wp) => ({
      label: `${wp.business.name} — ${wp.name}, ${wp.stateAbbr}`,
      context: wp.business.blurb,
      sourceName: wp.business.sourceName,
      sourceUrl: wp.business.sourceUrl,
    })),
  },
  {
    icon: Sparkles,
    title: "AI Creates Opportunity",
    href: "/#opportunity",
    items: opportunityStories.map((story) => ({
      label: story.headline,
      context: story.body,
      sourceName: story.sourceName,
      sourceUrl: story.sourceUrl,
    })),
  },
];

const totalSources = categories.reduce((sum, cat) => sum + cat.items.length, 0);

export default function SourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-void pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="animate-drift absolute -left-20 top-0 size-[30rem] rounded-full bg-signal-1/20 blur-[64px]" />
          <div
            className="animate-drift absolute right-0 bottom-0 size-[30rem] rounded-full bg-signal-2/15 blur-[64px]"
            style={{ animationDelay: "-5s" }}
          />
        </div>

        <Container className="relative">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Sources
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Every stat, company, and story on this site is real — and every one of them
            links back to where we found it. {totalSources} sources, all in one place.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.title}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <category.icon className="size-5 text-signal-1" strokeWidth={1.75} />
                    <h2 className="font-display text-xl font-semibold text-ink">
                      {category.title}
                    </h2>
                  </div>
                  <Link
                    href={category.href}
                    className="focus-ring text-xs font-mono uppercase tracking-wider text-ink-faint transition-colors hover:text-ink-muted"
                  >
                    View on site →
                  </Link>
                </div>

                <div className="mt-6 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-surface-2">
                  {category.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-base font-semibold text-ink">
                          {item.label}
                        </p>
                        {item.context && (
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                            {item.context}
                          </p>
                        )}
                      </div>
                      <SourceLink
                        name={item.sourceName}
                        url={item.sourceUrl}
                        className="shrink-0 sm:mt-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
