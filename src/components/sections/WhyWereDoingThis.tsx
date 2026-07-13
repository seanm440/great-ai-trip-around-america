"use client";

import { motion } from "framer-motion";
import { Eye, Users, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Eye,
    title: "Most people have never seen AI being built",
    body: "They see headlines and demos, not the labs, the whiteboards, or the people writing the code. Fear fills that gap. We're closing it.",
  },
  {
    icon: Users,
    title: "Understanding comes from meeting people",
    body: "It's hard to stay afraid of something once you've talked to the engineer, the founder, or the small-business owner actually using it to build something better.",
  },
  {
    icon: Compass,
    title: "The story is happening everywhere, not just Silicon Valley",
    body: "DC, Nashville, Tampa, Austin, and the Central Valley all have their own AI story. This is the whole map, not just one corner of it.",
  },
];

export function WhyWereDoingThis() {
  return (
    <section id="why" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why We're Doing This"
          tone="light"
          title="AI is the biggest economic shift in a generation. Most people have never seen it happen."
          description="The conversation about AI happens far from where it's actually built — in headlines, hot takes, and hearings. We're going straight to the source: the labs, the garages, and the small businesses already using it to grow."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-paper-2">
                <reason.icon className="size-5 text-signal-1" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-paper-ink">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-ink-muted">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-paper-ink-muted"
        >
          AI is already changing how small businesses compete, how doctors spend their time,
          and how new companies get built. We think that&apos;s worth getting excited about —
          and worth seeing in person, not just reading about.
        </motion.p>
      </Container>
    </section>
  );
}
