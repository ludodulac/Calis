import type { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const goals = [
  { title: "Traction", image: "/goals/traction.webp", alt: "Personne réalisant une traction sur une barre", href: "/tractions" },
  { title: "Pompes", href: "/pompes" },
  { title: "Équilibre", href: "/handstand" },
  { title: "Muscle-up", href: "/muscle-up" },
  { title: "Jambes", href: "/bibliotheque/squat-poids-du-corps" },
  { title: "Mobilité", href: "/bibliotheque/mobilite-debutant" },
] as const;

export default function HomePage() {
  return (
    <>
      <main className={styles.mobileHome}>
        <header className={styles.homeTopbar}>
          <strong>CALIS</strong>
          <Link href="/commencer">Je débute</Link>
        </header>

        <section className={styles.goalPicker} id="objectifs" aria-labelledby="goal-title">
          <div className={styles.goalHeading}>
            <span>Mon objectif</span>
            <h1 id="goal-title">Qu'est-ce que tu veux réussir ?</h1>
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

        <nav className={styles.mobileNav} aria-label="Navigation principale">
          <Link className={styles.navActive} href="/" aria-current="page"><span aria-hidden="true">●</span><b>Accueil</b></Link>
          <Link href="/commencer"><span aria-hidden="true">↑</span><b>Parcours</b></Link>
          <Link href="/bibliotheque"><span aria-hidden="true">▦</span><b>Bibliothèque</b></Link>
        </nav>
      </main>

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
