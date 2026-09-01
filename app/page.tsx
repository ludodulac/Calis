import type { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const goals = [
  { title: "Traction", image: `${basePath}/goals/traction.webp`, alt: "Personne réalisant une traction sur une barre", href: "/tractions" },
  { title: "Pompes", image: `${basePath}/goals/pompes.webp`, alt: "Personne réalisant une pompe au sol", href: "/pompes" },
  { title: "Équilibre", image: `${basePath}/goals/handstand.webp`, alt: "Personne en équilibre sur les mains", href: "/handstand" },
  { title: "Muscle-up", image: `${basePath}/goals/muscle-up.webp`, alt: "Personne au-dessus d'une barre après un muscle-up", href: "/muscle-up" },
  { title: "Jambes", href: "/bibliotheque/squat-poids-du-corps" },
  { title: "Mobilité", href: "/bibliotheque/mobilite-debutant" },
] as const;

export default function HomePage() {
  return (
    <>
      <div className={styles.mobileHome}>
        <section className={styles.goalPicker} id="objectifs" aria-labelledby="goal-title">
          <div className={styles.goalHeading}>
            <span>Mon objectif</span>
            <h1 id="goal-title">Qu'est-ce que tu aimerais réussir avec ton corps ?</h1>
          </div>

          <div className={styles.goalGrid}>
            {goals.map((goal) => {
              const hasImage = "image" in goal;
              return (
                <Link
                  className={`${styles.goalCard} ${hasImage ? styles.goalCardImage : styles.goalCardPlain}`}
                  href={goal.href}
                  key={goal.title}
                  aria-label={`Choisir ${goal.title}`}
                >
                  {hasImage && <img src={goal.image} alt={goal.alt} />}
                  <strong>{goal.title}</strong>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <section className={styles.supportingContent} aria-label="Informations complémentaires">
        <div className="shell narrow">
          <h2>Tu pars de zéro ?</h2>
          <p>Calis peut te proposer une première étape adaptée, même si tu ne réussis pas encore une pompe ou une traction.</p>
          <Link className="button primary" href="/commencer">Commencer</Link>
        </div>
      </section>
    </>
  );
}
