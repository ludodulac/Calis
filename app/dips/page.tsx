import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Dips : apprendre l'appui, l'amplitude et la technique",
  description: "Construis tes premiers dips avec un appui stable, une amplitude adaptée et une progression contrôlée.",
  alternates: { canonical: "/dips/" },
};

export default function DipsPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "dips");

  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Hub · pousser</div>
        <h1>Les dips commencent par l'appui, pas par la profondeur.</h1>
        <p className="lead">Apprends d'abord à supporter ton poids entre deux barres, puis construis une descente que tes épaules tolèrent et que tu peux reproduire.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/dips-debutant">Commencer les dips</Link><Link className="button secondary" href="/bibliotheque/dips-technique">Affiner ma technique</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Principe</div><h2>Stabilité avant amplitude.</h2></div><div className="mistakeList"><div><strong>Appui haut</strong><p>Construis une position stable avant de descendre.</p></div><div><strong>Amplitude adaptée</strong><p>Une plus grande profondeur n'est utile que si elle reste contrôlée et confortable.</p></div><div><strong>Retour maîtrisé</strong><p>Évite le rebond et retrouve une position haute nette.</p></div><div><strong>Progression graduelle</strong><p>Ajoute du volume ou de la difficulté seulement quand la répétition reste fiable.</p></div></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Le parcours dips actuel</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
    </>
  );
}
