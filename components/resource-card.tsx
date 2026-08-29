import Link from "next/link";
import type { Resource } from "@/lib/content/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="resourceCard">
      <div className="eyebrow">{resource.kind} · {resource.level}</div>
      <h3>{resource.title}</h3>
      <p>{resource.summary}</p>
      <Link href={`/bibliotheque/${resource.slug}`} className="textLink">
        Explorer cette ressource →
      </Link>
    </article>
  );
}
