import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Bibliothèque",
  description: "Explore les premières ressources Calis par niveau, capacité et objectif.",
};

export default function LibraryPage() {
  return (
    <section className="section shell">
      <div className="sectionHeading wide">
        <div className="eyebrow">Bibliothèque Calis</div>
        <h1>Des ressources reliées entre elles pour progresser.</h1>
        <p className="lead">La V1 commence volontairement avec peu de ressources, mais chacune appartient à un parcours et pourra être filtrée par niveau, capacité, objectif et matériel.</p>
      </div>

      <div className="filterPreview" aria-label="Filtres prévus">
        <span>Niveau</span><span>Capacité</span><span>Objectif</span><span>Matériel</span>
      </div>

      <div className="resourceGrid">
        {v1Resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}
      </div>
    </section>
  );
}
