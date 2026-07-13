import { Hero } from "@/components/sections/Hero";
import { WhyWereDoingThis } from "@/components/sections/WhyWereDoingThis";
import { TheBus } from "@/components/sections/TheBus";
import { JourneyMap } from "@/components/sections/JourneyMap";
import { FeaturedStops } from "@/components/sections/FeaturedStops";
import { WhatWellVisit } from "@/components/sections/WhatWellVisit";
import { AICreatesOpportunity } from "@/components/sections/AICreatesOpportunity";
import { FollowTheJourney } from "@/components/sections/FollowTheJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWereDoingThis />
      <TheBus />
      <JourneyMap />
      <FeaturedStops />
      <WhatWellVisit />
      <AICreatesOpportunity />
      <FollowTheJourney />
    </>
  );
}
