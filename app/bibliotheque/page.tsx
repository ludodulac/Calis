import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { LibraryBrowser } from "@/components/library-browser";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Bibliothèque",
  description: "Explore les ressources Calis par parcours, capacité et objectif.",
  alternates: { canonical: "/bibliotheque/" },
};

const journeys = [
  { label: "Je pars de zéro", title: "Construire les bases sans sauter d'étape", description: "Tu ne sais pas encore quoi travailler ? Commence par un problème concret plutôt que par une liste d'exercices.", href: "/commencer" },
  { label: "Objectif traction", title: "De la suspension à 10 tractions", description: "Un parcours relié : prise, contrôle scapulaire, rowing, assistance, négatives, première traction, technique et volume.", href: "/tractions" },
  { label: "Pousser", title: "Pompes et dips", description: "Construis d'abord une poussée contrôlée, puis apprends à transférer cette capacité vers les dips.", href: "/pompes" },
  { label: "S'équilibrer", title: "Commencer le handstand", description: "Prépare les poignets, apprends à utiliser le mur puis construis progressivement tes premiers équilibres libres.", href: "/handstand" },
] as const;

export default function LibraryPage() {
  const zeroResources = v1Resources.filter((resource) => resource.level === "zero");
  const pullResources = v1Resources.filter((resource) => resource.hub === "tractions");
  const otherResources = v1Resources.filter((resource) => resource.level !== "zero" && resource.hub !== "tractions");

  return <main>
    <section className="section shell"><div className="sectionHeading wide"><div className="eyebrow">Bibliothèque Calis</div><h1>Ne cherche pas un exercice. Trouve ta prochaine étape.</h1><p className="lead">La bibliothèque est organisée comme un réseau de parcours. Tu peux entrer par ton niveau actuel, une capacité ou un objectif, puis suivre les liens entre les fiches.</p></div><div className="journeyGrid">{journeys.map((journey) => <Link className="journeyCard" href={journey.href} key={journey.title}><span>{journey.label}</span><strong>{journey.title}</strong><p>{journey.description}</p><b>Explorer →</b></Link>)}</div></section>

    <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Explorer librement</div><h2>Recherche dans toute la bibliothèque</h2><p>Recherche un mouvement, un besoin ou du matériel, puis affine par niveau et capacité. Les filtres restent locaux : ils ne créent pas de pages SEO artificielles.</p></div><LibraryBrowser resources={v1Resources} /></div></section>

    <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Point de départ</div><h2>Ressources accessibles quand tu pars de zéro</h2><p>Pas besoin de connaître le vocabulaire de la callisthénie : pars de ce que tu peux ou ne peux pas encore faire.</p></div><div className="resourceGrid">{zeroResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>

    <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Parcours traction</div><h2>Un premier hub relié de bout en bout</h2><p>Ces fiches forment un parcours complet : chacune développe une capacité précise et prépare la suivante.</p></div><div className="resourceGrid">{pullResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>

    <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Pousser, jambes et équilibre</div><h2>Les capacités fondamentales commencent à former un vrai réseau</h2><p>Pompes, dips, squat, mobilité et handstand utilisent le même langage pédagogique : point de départ, technique, sensations, erreurs et critères de progression.</p></div><div className="resourceGrid">{otherResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
  </main>;
}
