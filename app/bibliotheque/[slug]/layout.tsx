import type { Metadata } from "next";
import { v1Resources } from "@/lib/content/v1";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);

  if (!resource) return {};

  const canonical = `/bibliotheque/${resource.slug}/`;

  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical },
    openGraph: {
      title: resource.title,
      description: resource.summary,
      type: "article",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title: resource.title,
      description: resource.summary,
    },
  };
}

export default function ResourceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
