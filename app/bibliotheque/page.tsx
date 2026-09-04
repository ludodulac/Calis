import type { Metadata } from "next";
import Link from "next/link";
import { InfoDialog } from "@/components/info-dialog";
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
        <div className="libraryTitleRow">
          <div>
            <div className="eyebrow">Bibliothèque</div>
            <h1 id="library-title">Qu'est-ce que tu veux comprendre ?</h1>
            <p>Choisis un besoin si tu l'as déjà. Sinon, explore librement les fiches plus bas.</p>
          </div>
          <div className="infoIconBar" aria-label="Informations secondaires">
            <InfoDialog label="Parcours" title="Choisir un parcours" icon="path">
              <div className="libraryJourneyGrid modalGrid">
                {journeys.map((journey) => (
                  <Link className="libraryJourneyCard" href={journey.href} key={journey.title}>
                    <strong>{journey.title}</strong><small>{journey.description}</small><span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </InfoDialog>

            <InfoDialog label="Exemple de progression" title="Exemple de progression" icon="info">
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
            </InfoDialog>
          </div>
        </div>
      </section>

      <section className="libraryQuickGrid" aria-label="Besoins fréquents">
        {quickEntries.map((entry) => (
          <Link className="libraryQuickTile" href={entry.href} key={entry.title}>
            <strong>{entry.title}</strong><span aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <section className="section" aria-labelledby="library-explore-title">
        <div className="sectionHeading wide">
          <div className="eyebrow">Explorer librement</div>
          <h2 id="library-explore-title">Toutes les fiches, ici.</h2>
          <p>Recherche directement un mouvement, un problème ou une capacité. Tu n'as pas besoin d'ouvrir une autre couche pour commencer à chercher.</p>
        </div>
        <LibraryBrowser resources={v1Resources} />
      </section>
    </div>
  );
}
