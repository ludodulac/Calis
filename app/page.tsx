import type { Metadata } from "next";
import Link from "next/link";
import { handstandProgression, pullUpProgression, pushUpProgression } from "@/lib/content/v1";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const goals = [
  { title: "Traction", image: "/goals/traction.jpg", alt: "Personne réalisant une traction sur une barre", href: "/tractions" },
  { title: "Pompes", image: "/goals/pompes.jpg", alt: "Personne réalisant une pompe au sol", href: "/pompes" },
  { title: "Équilibre", image: "/goals/handstand.jpg", alt: "Personne en équilibre sur les mains", href: "/handstand" },
  { title: "Muscle-up", image: "/goals/muscle-up.jpg", alt: "Personne au-dessus d'une barre pendant un muscle-up", href: "/muscle-up" },
  { title: "Jambes", image: "/goals/jambes.jpg", alt: "Personne travaillant l'équilibre et les jambes", href: "/bibliotheque/squat-poids-du-corps" },
  { title: "Mobilité", image: "/goals/mobilite.jpg", alt: "Personne étirant sa jambe dans un parc", href: "/bibliotheque/mobilite-debutant" },
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
              <Link className="button primary" href="/commencer">Je débute</Link>
              <Link className="button secondary" href="#objectifs">Choisir un objectif</Link>
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
            <h2>Je veux…</h2>
            <p>Choisis simplement une image.</p>
          </div>
          <div className="journeyGrid">
            {goals.map((goal) => (
              <Link className="journeyCard" href={goal.href} key={goal.title} aria-label={`Choisir : ${goal.title}`}>
                <img className="journeyCardImage" src={goal.image} alt={goal.alt} />
                <strong>{goal.title}</strong>
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
