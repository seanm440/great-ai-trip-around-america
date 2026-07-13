import { Hero } from "@/components/sections/Hero";
import { JourneyMap } from "@/components/sections/JourneyMap";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { WhyWereDoingThis } from "@/components/sections/WhyWereDoingThis";
import { TheBus } from "@/components/sections/TheBus";
import { FeaturedStops } from "@/components/sections/FeaturedStops";
import { WhatWellVisit } from "@/components/sections/WhatWellVisit";
import { DataCenters } from "@/components/sections/DataCenters";
import { AICreatesOpportunity } from "@/components/sections/AICreatesOpportunity";
import { FollowTheJourney } from "@/components/sections/FollowTheJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <JourneyMap />
      <StatsBanner />
      <WhyWereDoingThis />
      <TheBus />
      <FeaturedStops />
      <WhatWellVisit />
      <DataCenters />
      <AICreatesOpportunity />
      <FollowTheJourney />
    </>
  );
}
