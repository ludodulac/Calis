import type { Metadata } from "next";
import Link from "next/link";
import { handstandProgression, pullUpProgression, pushUpProgression } from "@/lib/content/v1";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const goals = [
  { title: "Faire ma première traction", text: "Je veux réussir à me hisser au-dessus d'une barre.", href: "/tractions", meta: `Débutant · ${pullUpProgression.length} étapes` },
  { title: "Faire ma première pompe", text: "Même si le sol est encore trop difficile aujourd'hui.", href: "/pompes", meta: `Débutant · ${pushUpProgression.length} étapes` },
  { title: "Tenir sur les mains", text: "Apprendre progressivement sans commencer par me jeter à l'envers.", href: "/handstand", meta: `Débutant · ${handstandProgression.length} étapes` },
  { title: "Réussir un muscle-up", text: "Comprendre si je dois travailler le tirage, le passage ou la poussée.", href: "/muscle-up", meta: "Intermédiaire · diagnostic par maillon" },
  { title: "Renforcer mes jambes", text: "Commencer simplement avec le squat au poids du corps.", href: "/bibliotheque/squat-poids-du-corps", meta: "Point de départ · sans matériel" },
  { title: "Bouger plus facilement", text: "Travailler la mobilité qui me sert vraiment.", href: "/bibliotheque/mobilite-debutant", meta: "Point de départ · mobilité utile" },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div>
            <div className="eyebrow">Callisthénie · du tout premier exercice aux figures</div>
            <h1>Qu'est-ce que tu aimerais réussir avec ton corps ?</h1>
            <p className="lead">Choisis un objectif. Calis te montre par où commencer, quoi essayer maintenant et comment savoir quand tu peux passer à l'étape suivante.</p>
            <div className="actions">
              <Link className="button primary" href="/commencer">Je ne sais pas par où commencer</Link>
              <Link className="button secondary" href="#objectifs">Je choisis un objectif</Link>
            </div>
          </div>
          <aside className={`manifesto ${styles.panel}`}>
            <span>Exemple de chemin</span>
            <strong>Tu veux réussir ta première traction.</strong>
            <div className={styles.path} aria-label="Exemple d'un chemin Calis vers une première traction">
              <div className={styles.step}><small>Objectif</small><b>Première traction</b></div>
              <div className={styles.step}><small>Aujourd'hui</small><b>Je tiens à la barre</b></div>
              <Link className={styles.step} href="/bibliotheque/rowing-incline"><small>Maintenant</small><b>Rowing incliné</b></Link>
              <Link className={styles.step} href="/bibliotheque/traction-assistee"><small>Ensuite</small><b>Traction assistée</b></Link>
            </div>
            <Link className="textLink" href="/tractions">Voir le chemin complet →</Link>
          </aside>
        </div>
      </section>

      <section className="section sectionSoft" id="objectifs">
        <div className="shell">
          <div className="sectionHeading">
            <div className="eyebrow">Choisis ce qui te donne envie</div>
            <h2>Je veux…</h2>
            <p>Tu n'as pas besoin de connaître le vocabulaire de la callisthénie. Clique simplement sur ce que tu aimerais apprendre.</p>
          </div>
          <div className="journeyGrid">
            {goals.map((goal) => (
              <Link className="journeyCard" href={goal.href} key={goal.title}>
                <span>{goal.meta}</span>
                <strong>{goal.title}</strong><p>{goal.text}</p><b>Voir mon chemin →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Tu pars vraiment de zéro ?</div>
        <h2>C'est prévu.</h2>
        <p>Ne pas réussir une pompe ou une traction n'est pas un problème. Une bonne première étape doit être assez facile pour que tu puisses réellement l'essayer et apprendre quelque chose.</p>
        <div className="actions"><Link className="button primary" href="/commencer">Trouver mon premier exercice</Link></div>
      </section>

      <section className="section sectionSoft">
        <div className="shell split">
          <div>
            <div className="eyebrow">Tu sais déjà ce que tu cherches ?</div>
            <h2>La bibliothèque rassemble toutes les fiches.</h2>
            <p>Exercices, technique, progressions et matériel. Elle sert à explorer ; si tu débutes, les parcours ci-dessus sont plus simples.</p>
          </div>
          <Link className="button secondary" href="/bibliotheque">Explorer la bibliothèque</Link>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Santé et sécurité</div>
        <h2>Calis t'aide à apprendre, pas à poser un diagnostic.</h2>
        <p>Les informations du site concernent l'apprentissage et l'entraînement général. Une douleur vive, inhabituelle ou persistante mérite d'être prise au sérieux ; Calis ne remplace pas un professionnel de santé qualifié.</p>
      </section>
    </>
  );
}
