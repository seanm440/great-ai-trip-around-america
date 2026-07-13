"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Server,
  GraduationCap,
  Bot,
  HeartPulse,
  Sprout,
  Factory,
  Landmark,
  Cloud,
  Store,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visitCategories } from "@/data/visit-categories";

const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  server: Server,
  "graduation-cap": GraduationCap,
  bot: Bot,
  "heart-pulse": HeartPulse,
  sprout: Sprout,
  factory: Factory,
  landmark: Landmark,
  cloud: Cloud,
  store: Store,
};

export function WhatWellVisit() {
  return (
    <section id="visit" className="relative bg-void py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We'll Visit"
          title="AI touches more of America than you'd think"
          description="This isn't only a startup tour. It's a look at every corner of the economy that's already changing."
        />

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-surface-border bg-surface-border sm:grid-cols-3 lg:grid-cols-5">
          {visitCategories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Rocket;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group relative flex flex-col gap-4 bg-void p-6 transition-colors duration-300 hover:bg-surface-2 sm:p-7"
              >
                <Icon
                  className="size-6 text-ink-muted transition-colors duration-300 group-hover:text-signal-2"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink sm:text-base">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-faint sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
