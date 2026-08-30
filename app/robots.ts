import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://ludodulac.github.io/Calis";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/Calis/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
