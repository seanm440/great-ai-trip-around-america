import type { BusFeature } from "@/types";

export const busFeatures: BusFeature[] = [
  {
    key: "wrap",
    title: "Exterior Wrap",
    description:
      "A full custom wrap designed to be recognized from a block away — bold enough for a city street, built to survive four seasons on the interstate.",
    position: { x: 50, y: 18 },
  },
  {
    key: "studio",
    title: "Podcast & Interview Studio",
    description:
      "A dedicated recording space with broadcast-quality mics and a flexible backdrop, built for long-form conversations with founders and engineers wherever we're parked.",
    position: { x: 20, y: 32 },
  },
  {
    key: "production",
    title: "Production Bay",
    description:
      "Editing desk, documentary-grade cameras, and drones — everything needed to shoot and publish same-day content from the road.",
    position: { x: 78, y: 32 },
  },
];
