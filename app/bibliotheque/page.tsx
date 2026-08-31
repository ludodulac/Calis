import type { Metadata } from "next";
import Link from "next/link";
import { ProgressionPath } from "@/components/progression-path";
import { ResourceCard } from "@/components/resource-card";
import { LibraryBrowser } from "@/components/library-browser";
import { pullUpProgression, v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Bibliothèque de callisthénie : progressions, exercices et guides",
  description: "Trouve ta prochaine étape en callisthénie : débuter, réussir une traction, progresser en pompes et dips, apprendre le handstand, travailler jambes et mobilité.",
  alternates: { canonical: "/bibliotheque/" },
};

const journeys = [
  { label: "Je pars de zéro", title: "Je ne sais pas par où commencer", description: "Entre par ce que tu peux ou ne peux pas encore faire, sans devoir connaître le vocabulaire de la callisthénie.", href: "/commencer" },
  { label: "Je veux tirer", title: "Réussir ma première traction", description: "Identifie ce qui te bloque puis construis suspension, contrôle, tirage, assistance et première répétition.", href: "/tractions" },
  { label: "Je veux pousser", title: "Faire de vraies pompes puis des dips", description: "Règle d'abord la difficulté des pompes, consolide ta technique puis transfère ta poussée vers les dips.", href: "/pompes" },
  { label: "Je veux m'équilibrer", title: "Apprendre à tenir sur les mains", description: "Prépare les appuis, apprends l'inversion et la sortie, utilise le mur puis développe les corrections d'équilibre.", href: "/handstand" },
] as const;

const quickEntries = [
  { title: "Je n'arrive pas à faire une traction", href: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction", detail: "Diagnostiquer le maillon faible" },
  { title: "Je n'arrive pas à faire une pompe au sol", href: "/bibliotheque/premiere-pompe", detail: "Trouver une version accessible" },
  { title: "Je veux apprendre les dips", href: "/bibliotheque/dips-debutant", detail: "Construire l'appui puis la descente" },
  { title: "J'ai peur de tomber en handstand", href: "/bibliotheque/handstand-debutant", detail: "Apprendre d'abord à entrer et sortir" },
  { title: "Je manque de mobilité", href: "/bibliotheque/mobilite-debutant", detail: "Explorer les amplitudes vraiment utiles" },
  { title: "Je veux renforcer mes jambes", href: "/bibliotheque/squat-poids-du-corps", detail: "Construire une base sans matériel" },
] as const;

export default function LibraryPage() {
  const zeroResources = v1Resources.filter((resource) => resource.level === "zero");
  const otherResources = v1Resources.filter((resource) => resource.level !== "zero" && resource.hub !== "tractions");

  return <main>
    <section className="section shell"><div className="sectionHeading wide"><div className="eyebrow">Bibliothèque Calis</div><h1>Dis-moi ce que tu veux réussir. La bibliothèque t'aide à trouver la prochaine étape.</h1><p className="lead">Calis n'est pas une pile d'articles. Les ressources sont reliées pour transformer un objectif ou un blocage en action : comprendre où tu en es, essayer une étape adaptée, reconnaître les bonnes sensations puis savoir où aller ensuite.</p></div><div className="journeyGrid">{journeys.map((journey) => <Link className="journeyCard" href={journey.href} key={journey.title}><span>{journey.label}</span><strong>{journey.title}</strong><p>{journey.description}</p><b>Explorer ce parcours →</b></Link>)}</div></section>

    <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Entrées rapides</div><h2>Pars directement de ton problème actuel.</h2><p>Tu n'as pas besoin de choisir une catégorie. Choisis la phrase qui ressemble le plus à ce que tu vis maintenant.</p></div><div className="nextGrid">{quickEntries.map((entry) => <Link className="nextCard" href={entry.href} key={entry.title}><strong>{entry.title}</strong><span>{entry.detail} →</span></Link>)}</div></div></section>

    <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Explorer librement</div><h2>Recherche dans toute la bibliothèque</h2><p>Recherche un mouvement, un besoin ou du matériel, puis affine par niveau et capacité. Les filtres restent locaux : ils ne créent pas de pages SEO artificielles.</p></div><LibraryBrowser resources={v1Resources} /></div></section>

    <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Point de départ</div><h2>Ressources accessibles quand tu pars de zéro</h2><p>Pas besoin de connaître le vocabulaire de la callisthénie : pars de ce que tu peux ou ne peux pas encore faire.</p></div><div className="resourceGrid">{zeroResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>

    <section className="section shell"><div className="sectionHeading wide"><div className="eyebrow">Un chemin visible</div><h2>La traction montre comment les fiches deviennent une progression.</h2><p>Au lieu de présenter seulement une série de contenus, Calis rend visible le chemin principal. Les questions de diagnostic, le matériel et les variantes restent disponibles dans la recherche sans être confondus avec les étapes du parcours.</p></div><ProgressionPath steps={pullUpProgression} milestoneId="first" ariaLabel="Chemin traction visible dans la bibliothèque" fork={{ label: "Après plusieurs tractions fiables", links: [{ href: "/bibliotheque/traction-explosive", label: "Gagner en hauteur →" }, { href: "/bibliotheque/tractions-lestees", label: "Gagner en force →" }, { href: "/muscle-up", label: "Préparer le muscle-up →" }] }} /><div className="actions"><Link className="button secondary" href="/tractions">Ouvrir le parcours traction complet</Link></div></section>

    <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Pousser, jambes et équilibre</div><h2>Les capacités fondamentales forment progressivement le même système</h2><p>Pompes, dips, squat, mobilité et handstand utilisent le même langage pédagogique : point de départ, technique, sensations, erreurs, adaptations et critères de progression.</p></div><div className="resourceGrid">{otherResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
  </main>;
}
