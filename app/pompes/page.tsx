import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Pompes : partir de zéro et construire une poussée solide",
  description: "Apprends les pompes par étapes : version inclinée, première pompe, technique puis transition vers les dips.",
  alternates: { canonical: "/pompes/" },
};

export default function PushUpsPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "pompes");

  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Hub · pousser</div>
        <h1>Construis ta poussée avant de chercher des variantes difficiles.</h1>
        <p className="lead">La pompe est une compétence de base : choisis une difficulté que tu contrôles, rapproche progressivement le mouvement du sol, puis rends ta répétition stable.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/premiere-pompe">Je pars de zéro</Link><Link className="button secondary" href="/bibliotheque/pompe-technique">Je fais déjà des pompes</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Chemin conseillé</div><h2>Incliner → réussir → stabiliser → transférer</h2><p>La difficulté augmente seulement lorsque la version actuelle reste propre et reproductible.</p></div><div className="journeyGrid"><Link className="journeyCard" href="/bibliotheque/pompes-inclinees"><span>01 · Régresser</span><strong>Pompes inclinées</strong><p>Ajuste la hauteur pour trouver une poussée que tu peux vraiment apprendre.</p><b>Commencer →</b></Link><Link className="journeyCard" href="/bibliotheque/pompe-technique"><span>02 · Stabiliser</span><strong>Technique de pompe</strong><p>Travaille l'alignement, la trajectoire et une amplitude que tu contrôles.</p><b>Ouvrir →</b></Link></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Le parcours pompe actuel</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>

      <section className="section shell"><div className="split"><div><div className="eyebrow">Étape suivante possible</div><h2>Quand la pompe devient solide, découvre les dips.</h2><p>Ce n'est pas une obligation : c'est une branche plus exigeante de la capacité à pousser.</p></div><Link className="button secondary" href="/dips">Voir le parcours dips</Link></div></section>
    </>
  );
}
