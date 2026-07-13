"use client";

import { motion } from "framer-motion";
import { Server, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities } from "@/data/cities";

const facilities = cities
  .slice()
  .sort((a, b) => a.order - b.order)
  .flatMap((city) =>
    city.dataCenters.map((dc) => ({
      ...dc,
      city: city.name,
      stateAbbr: city.stateAbbr,
      citySlug: city.slug,
    })),
  );

export function DataCenters() {
  return (
    <section id="infrastructure" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="animate-drift absolute -left-20 bottom-0 size-[28rem] rounded-full bg-signal-1/20 blur-[64px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="The Infrastructure"
          title="AI runs on real buildings, real power, and real hardware"
          description="Every model, chatbot, and app is backed by physical infrastructure somewhere. Along the route, we're stopping at the data centers and fabs actually running the AI economy."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex flex-col rounded-2xl border border-surface-border bg-surface-2 p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-void">
                  <Server className="size-5 text-signal-2" strokeWidth={1.75} />
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  <MapPin className="size-3" />
                  {facility.city}, {facility.stateAbbr}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {facility.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-signal-2">
                {facility.operator}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{facility.blurb}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
