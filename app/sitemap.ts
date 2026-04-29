import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2025-06-16T17:59:06+00:00"),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${site.url}/ochrana-osobnych-udajov`,
      lastModified: new Date("2025-06-16T18:13:02+00:00"),
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];
}
