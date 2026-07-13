import type { Waypoint } from "@/types";

export const waypoints: Waypoint[] = [
  {
    id: "knoxville",
    name: "Knoxville",
    stateAbbr: "TN",
    coordinates: { lat: 35.9606, lng: -83.9207 },
    business: {
      name: "Tombras Cafe",
      blurb:
        "A downtown Knoxville cafe using Square's new AI agent, Managerbot, to handle scheduling and inventory by text instead of phone calls to staff.",
    },
  },
  {
    id: "chattanooga",
    name: "Chattanooga",
    stateAbbr: "TN",
    coordinates: { lat: 35.0456, lng: -85.3097 },
    business: {
      name: "Bea's Restaurant",
      blurb:
        "A fourth-generation Chattanooga institution since 1950, whose owner used an AI image generator to visualize what a modernized version of the diner could look like.",
    },
  },
  {
    id: "new-orleans",
    name: "New Orleans",
    stateAbbr: "LA",
    coordinates: { lat: 29.9511, lng: -90.0715 },
    business: {
      name: "M.S. Rau",
      blurb:
        "A 113-year-old French Quarter antiques dealer running an in-house AI research operation, built with Tulane University, to track down rare pieces in auction records worldwide.",
    },
  },
  {
    id: "tucson",
    name: "Tucson",
    stateAbbr: "AZ",
    coordinates: { lat: 32.2226, lng: -110.9747 },
    business: {
      name: "Bag-O-Crab",
      blurb:
        "A small seafood restaurant's first Arizona location, where AI-powered robot servers named Thelma and Louise now run food out to tables.",
    },
  },
];
