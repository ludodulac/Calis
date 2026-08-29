import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Handstand : poignets, mur et premiers équilibres",
  description: "Apprends le handstand progressivement : préparation des poignets, travail au mur et premiers instants d'équilibre libre.",
  alternates: { canonical: "/handstand/" },
};

export default function HandstandPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "handstand");

  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Hub · s'équilibrer</div>
        <h1>Apprends à tenir sur les mains sans transformer chaque tentative en chute.</h1>
        <p className="lead">Prépare les appuis, apprends à utiliser le mur et développe progressivement les corrections fines qui créent l'équilibre.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/poignets-handstand">Commencer par les appuis</Link><Link className="button secondary" href="/bibliotheque/handstand-mur">Travailler au mur</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Chemin conseillé</div><h2>Préparer → inverser → réduire l'aide → équilibrer</h2><p>Le record de secondes vient après la capacité à entrer, corriger et sortir proprement.</p></div><div className="journeyGrid"><Link className="journeyCard" href="/bibliotheque/poignets-handstand"><span>01 · Préparer</span><strong>Poignets et appuis</strong><p>Habitue progressivement les mains et les poignets à supporter davantage de charge.</p><b>Commencer →</b></Link><Link className="journeyCard" href="/bibliotheque/handstand-mur"><span>02 · Construire</span><strong>Handstand au mur</strong><p>Apprends l'inversion, la ligne et surtout une sortie contrôlée.</p><b>Ouvrir →</b></Link></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Le parcours handstand actuel</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
    </>
  );
}
