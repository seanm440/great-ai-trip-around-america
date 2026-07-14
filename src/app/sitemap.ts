import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";

const siteUrl = "https://greataitrip.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...cities.map((city) => ({
      url: `${siteUrl}/cities/${city.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${siteUrl}/sources`, changeFrequency: "weekly", priority: 0.6 },
  ];
}
