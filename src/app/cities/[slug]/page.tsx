import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, Server, GraduationCap, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SourceLink } from "@/components/ui/SourceLink";
import { cities, getAllCitySlugs, getCityBySlug } from "@/data/cities";

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: "City Not Found" };
  return {
    title: `${city.name}, ${city.stateAbbr}`,
    description: city.tagline,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const sorted = cities.slice().sort((a, b) => a.order - b.order);
  const index = sorted.findIndex((c) => c.slug === city.slug);
  const prev = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];

  return (
    <>
      <section className="relative overflow-hidden bg-void pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="animate-drift absolute -left-20 top-0 size-[30rem] rounded-full bg-signal-1/20 blur-[64px]" />
          <div
            className="animate-drift absolute right-0 bottom-0 size-[30rem] rounded-full bg-signal-2/15 blur-[64px]"
            style={{ animationDelay: "-5s" }}
          />
        </div>

        <Container className="relative">
          <Link
            href="/#stops"
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All stops
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <StatusBadge status={city.status} />
            <span className="font-mono text-xs text-ink-faint">
              Stop {String(city.order).padStart(2, "0")} of {sorted.length} · {city.dateWindow}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {city.name}, {city.stateAbbr}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {city.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {city.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-surface-border px-3.5 py-1.5 text-xs text-ink-muted"
              >
                {theme}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold text-ink">The Story</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {city.description}
              </p>

              {city.companies.length > 0 && (
                <div className="mt-14">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="size-5 text-signal-1" strokeWidth={1.75} />
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Companies We&apos;re Visiting
                    </h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {city.companies.map((company) => (
                      <div
                        key={company.name}
                        className="rounded-2xl border border-surface-border bg-surface-2 p-6"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider text-signal-2">
                          {company.category}
                        </span>
                        <h4 className="mt-2 font-display text-base font-semibold text-ink">
                          {company.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {company.blurb}
                        </p>
                        <SourceLink
                          name={company.sourceName}
                          url={company.sourceUrl}
                          className="mt-3"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {city.dataCenters.length > 0 && (
                <div className="mt-14">
                  <div className="flex items-center gap-2.5">
                    <Server className="size-5 text-signal-2" strokeWidth={1.75} />
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Infrastructure We&apos;re Touring
                    </h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {city.dataCenters.map((dc) => (
                      <div
                        key={dc.name}
                        className="rounded-2xl border border-surface-border bg-surface-2 p-6"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider text-signal-3">
                          {dc.operator}
                        </span>
                        <h4 className="mt-2 font-display text-base font-semibold text-ink">
                          {dc.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {dc.blurb}
                        </p>
                        <SourceLink name={dc.sourceName} url={dc.sourceUrl} className="mt-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {city.universities.length > 0 && (
                <div className="rounded-2xl border border-surface-border bg-surface-2 p-6">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="size-5 text-signal-1" strokeWidth={1.75} />
                    <h3 className="font-display text-base font-semibold text-ink">
                      Universities
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {city.universities.map((u) => (
                      <li key={u} className="text-sm text-ink-muted">
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl border border-surface-border bg-surface-2 p-6">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="size-5 text-signal-3" strokeWidth={1.75} />
                  <h3 className="font-display text-base font-semibold text-ink">Highlights</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {city.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-ink-muted">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-signal-2" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-surface-border bg-void py-12">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/cities/${prev.slug}`}
            className="focus-ring group flex items-center gap-3 text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span>
              <span className="block text-xs text-ink-faint">Previous</span>
              {prev.name}, {prev.stateAbbr}
            </span>
          </Link>
          <Link
            href={`/cities/${next.slug}`}
            className="focus-ring group flex items-center gap-3 text-right text-ink-muted transition-colors hover:text-ink"
          >
            <span>
              <span className="block text-xs text-ink-faint">Next</span>
              {next.name}, {next.stateAbbr}
            </span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </>
  );
}
