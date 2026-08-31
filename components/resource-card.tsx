import Link from "next/link";
import type { Resource, ResourceKind, ResourceLevel } from "@/lib/content/types";

const kindLabels: Record<ResourceKind, string> = {
  guide: "Guide",
  exercise: "Exercice",
  progression: "Progression",
  question: "Question",
  program: "Programme",
  equipment: "Matériel",
};

const levelLabels: Record<ResourceLevel, string> = {
  zero: "Je pars de zéro",
  beginner: "Débutant",
  intermediate: "Intermédiaire",
  advanced: "Avancé",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="resourceCard">
      <div className="eyebrow">{kindLabels[resource.kind]} · {levelLabels[resource.level]}</div>
      <h3>{resource.title}</h3>
      <p>{resource.summary}</p>
      <Link href={`/bibliotheque/${resource.slug}`} className="textLink">
        Explorer cette ressource →
      </Link>
    </article>
  );
}
