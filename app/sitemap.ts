import type { MetadataRoute } from "next";
import { v1Resources } from "@/lib/content/v1";

const siteUrl = "https://ludodulac.github.io/Calis";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/commencer", "/bibliotheque", "/tractions"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}/`, changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...v1Resources.map((resource) => ({ url: `${siteUrl}/bibliotheque/${resource.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
