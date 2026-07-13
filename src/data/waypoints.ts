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
      sourceName: "Nation's Restaurant News",
      sourceUrl: "https://www.nrn.com/restaurant-technology/the-hot-new-restaurant-tech-trend-ai-agents",
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
      sourceName: "Chattanooga Times Free Press",
      sourceUrl: "https://www.timesfreepress.com/news/2024/jan/01/smart-machines-smarter-business-how-chattanooga/",
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
      sourceName: "NOLA.com",
      sourceUrl:
        "https://www.nola.com/news/business/innovation/three-years-after-chatgpts-release-new-orleans-businesses-embrace-ai-tools/article_4f7f4eaf-d284-4001-b6db-198ccbb30e68.html",
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
      sourceName: "KOLD News 13",
      sourceUrl: "https://www.kold.com/2025/11/10/tucson-restaurant-uses-ai-robots-serve-customers/",
    },
  },
];
