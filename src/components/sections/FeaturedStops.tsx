"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cities } from "@/data/cities";

const gradients = [
  "from-signal-1/30 to-transparent",
  "from-signal-2/25 to-transparent",
  "from-signal-3/25 to-transparent",
  "from-signal-1/20 to-transparent",
];

export function FeaturedStops() {
  return (
    <section id="stops" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Stops"
          title="Where the bus is headed"
          description="Each city gets its own deep dive — the companies, the infrastructure, and the people shaping how AI shows up there."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                href={`/cities/${city.slug}`}
                className="focus-ring group relative block h-full overflow-hidden rounded-3xl border border-surface-border bg-surface-2 p-8 transition-colors duration-300 hover:border-ink/30"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} blur-2xl transition-opacity duration-500 group-hover:opacity-80`}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                      Stop {String(city.order).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {city.name}, {city.stateAbbr}
                    </h3>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>

                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                  {city.tagline}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {city.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full border border-surface-border px-3 py-1 text-xs text-ink-muted"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 flex items-center justify-between border-t border-surface-border pt-6">
                  <StatusBadge status={city.status} />
                  <span className="text-xs text-ink-faint">
                    {city.companies.length} companies · {city.universities.length} universities
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
