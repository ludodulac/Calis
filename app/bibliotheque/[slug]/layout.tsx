import type { Metadata } from "next";
import { v1Resources } from "@/lib/content/v1";

const siteUrl = "https://ludodulac.github.io/Calis";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);
  if (!resource) return {};

  const canonical = `/bibliotheque/${resource.slug}/`;
  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical },
    openGraph: { title: resource.title, description: resource.summary, type: "article", url: canonical },
    twitter: { card: "summary", title: resource.title, description: resource.summary },
  };
}

export default async function ResourceLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);
  if (!resource) return children;

  const pageUrl = `${siteUrl}/bibliotheque/${resource.slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: resource.title,
        description: resource.summary,
        inLanguage: "fr-FR",
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: "Calis" },
        publisher: { "@type": "Organization", name: "Calis" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Bibliothèque", item: `${siteUrl}/bibliotheque/` },
          { "@type": "ListItem", position: 3, name: resource.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
