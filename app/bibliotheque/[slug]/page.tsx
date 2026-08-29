import { notFound } from "next/navigation";
import Link from "next/link";
import { v1Resources } from "@/lib/content/v1";

export function generateStaticParams() {
  return v1Resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  return (
    <article className="section shell narrow">
      <div className="eyebrow">{resource.kind} · {resource.level}</div>
      <h1>{resource.title}</h1>
      <p className="lead">{resource.summary}</p>

      <div className="infoPanel">
        <p><strong>Capacité :</strong> {resource.capability}</p>
        <p><strong>Matériel :</strong> {resource.equipment.length ? resource.equipment.join(", ") : "aucun matériel obligatoire"}</p>
      </div>

      <section className="articleSection">
        <h2>Ce que cette fiche doit t'apprendre</h2>
        <p>Cette page est une première structure fonctionnelle. Son contenu éditorial détaillé sera rédigé à partir du brief V1 correspondant : prérequis, test de départ, technique, sensations, erreurs, régressions, progressions, critères de passage, matériel et sources.</p>
      </section>

      <section className="articleSection">
        <h2>Principe Calis</h2>
        <p>Le but n'est pas de réussir une répétition à tout prix, mais de comprendre ce qui manque aujourd'hui et quelle étape permet de progresser proprement.</p>
      </section>

      <Link className="textLink" href={resource.hub === "tractions" ? "/tractions" : "/bibliotheque"}>← Retour au parcours</Link>
    </article>
  );
}
