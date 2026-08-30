import type { MetadataRoute } from "next";
import { v1Resources } from "@/lib/content/v1";

export const dynamic = "force-static";

const siteUrl = "https://ludodulac.github.io/Calis";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/commencer", "/bibliotheque", "/tractions", "/pompes", "/dips", "/handstand"];
  const editorialRoutes = [
    "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction",
    "/bibliotheque/parallettes-handstand",
    "/bibliotheque/quelle-bande-elastique-tractions",
  ];

  const resourceRoutes = v1Resources.map((resource) => `/bibliotheque/${resource.slug}`);
  const routes = Array.from(new Set([...staticRoutes, ...editorialRoutes, ...resourceRoutes]));

  return routes.map((route) => ({
    url: `${siteUrl}${route}/`,
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : staticRoutes.includes(route) ? 0.8 : 0.7,
  }));
}
