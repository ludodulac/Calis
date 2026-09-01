import type { Metadata } from "next";
import Link from "next/link";
import { ProgressionPath } from "@/components/progression-path";
import { LibraryBrowser } from "@/components/library-browser";
import { pullUpProgression, v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Bibliothèque de callisthénie : progressions, exercices et guides",
  description: "Trouve ta prochaine étape en callisthénie : débuter, réussir une traction, progresser en pompes et dips, apprendre le handstand, travailler jambes et mobilité.",
  alternates: { canonical: "/bibliotheque/" },
};

const journeys = [
  { title: "Je débute", description: "Pars de ce que tu arrives ou non à faire aujourd'hui.", href: "/commencer" },
  { title: "Traction", description: "Construis suspension, contrôle, tirage et première répétition.", href: "/tractions" },
  { title: "Pompes", description: "Trouve une difficulté adaptée puis consolide ta poussée.", href: "/pompes" },
  { title: "Équilibre", description: "Prépare les appuis, le mur puis l'équilibre libre.", href: "/handstand" },
] as const;

const quickEntries = [
  { title: "Pas encore une traction", href: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction" },
  { title: "Pas encore une pompe", href: "/bibliotheque/premiere-pompe" },
  { title: "Apprendre les dips", href: "/bibliotheque/dips-debutant" },
  { title: "Peur en handstand", href: "/bibliotheque/handstand-debutant" },
  { title: "Gagner en mobilité", href: "/bibliotheque/mobilite-debutant" },
  { title: "Renforcer mes jambes", href: "/bibliotheque/squat-poids-du-corps" },
] as const;

export default function LibraryPage() {
  return (
    <div className="libraryScreen shell">
      <section className="libraryIntro" aria-labelledby="library-title">
        <div className="eyebrow">Bibliothèque</div>
        <h1 id="library-title">Qu'est-ce que tu cherches ?</h1>
      </section>

      <section className="libraryQuickGrid" aria-label="Besoins fréquents">
        {quickEntries.map((entry) => (
          <Link className="libraryQuickTile" href={entry.href} key={entry.title}>
            <strong>{entry.title}</strong><span aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <div className="libraryMore">
        <details className="libraryDisclosure">
          <summary>Choisir un parcours</summary>
          <div className="libraryJourneyGrid">
            {journeys.map((journey) => (
              <Link className="libraryJourneyCard" href={journey.href} key={journey.title}>
                <strong>{journey.title}</strong><small>{journey.description}</small><span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </details>

        <details className="libraryDisclosure">
          <summary>Voir un exemple de progression</summary>
          <div className="libraryDisclosureBody">
            <ProgressionPath
              steps={pullUpProgression}
              milestoneId="first"
              ariaLabel="Chemin traction visible dans la bibliothèque"
              fork={{
                label: "Après plusieurs tractions fiables",
                links: [
                  { href: "/bibliotheque/traction-explosive", label: "Gagner en hauteur →" },
                  { href: "/bibliotheque/tractions-lestees", label: "Gagner en force →" },
                  { href: "/muscle-up", label: "Préparer le muscle-up →" },
                ],
              }}
            />
            <Link className="textLink" href="/tractions">Parcours traction complet →</Link>
          </div>
        </details>

        <details className="libraryDisclosure">
          <summary>Tout explorer</summary>
          <div className="libraryDisclosureBody">
            <LibraryBrowser resources={v1Resources} />
          </div>
        </details>
      </div>
    </div>
  );
}
