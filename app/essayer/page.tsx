import type { Metadata } from "next";
import Link from "next/link";
import styles from "./try.module.css";

export const metadata: Metadata = {
  title: "Essayer quelque chose",
  description: "Des défis simples pour bouger maintenant et découvrir la callisthénie.",
  alternates: { canonical: "/essayer" },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ideas = [
  {
    eyebrow: "Tirer",
    title: "Te suspendre 20 secondes",
    cue: "Bras longs. Épaules calmes. Respire.",
    image: "/brand/traction-home.webp",
    alt: "Personne suspendue à une barre en extérieur",
    href: "/tractions",
    action: "Voir la suite",
  },
  {
    eyebrow: "Pousser",
    title: "Faire 5 pompes propres",
    cue: "Corps gainé. Descends sans te précipiter.",
    image: "/goals/pompes.webp",
    alt: "Personne réalisant une pompe au sol dans un parc",
    href: "/pompes",
    action: "Essayer les pompes",
  },
  {
    eyebrow: "Équilibre",
    title: "Explorer l'appui sur les mains",
    cue: "Commence près d'un mur. Cherche le contrôle.",
    image: "/brand/handstand-home.webp",
    alt: "Personne en équilibre sur les mains en extérieur",
    href: "/handstand",
    action: "Découvrir le handstand",
  },
] as const;

export default function TryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Pas besoin d'un programme</p>
          <h1>Essaie quelque chose.</h1>
          <p>Choisis une idée. Regarde. Va bouger.</p>
        </div>
      </section>

      <section className={styles.ideas} aria-label="Idées à essayer maintenant">
        <div className={`shell ${styles.grid}`}>
          {ideas.map((idea) => (
            <article className={styles.card} key={idea.title}>
              <div className={styles.media}>
                <img src={`${basePath}${idea.image}`} alt={idea.alt} width="640" height="480" />
                <span className={styles.videoSlot}>Vidéo courte · bientôt</span>
              </div>
              <div className={styles.copy}>
                <p className="eyebrow">{idea.eyebrow}</p>
                <h2>{idea.title}</h2>
                <p>{idea.cue}</p>
                <Link href={idea.href}>{idea.action} <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.structured}>
        <div className={`shell ${styles.structuredInner}`}>
          <div>
            <p className="eyebrow">Tu veux être guidé ?</p>
            <h2>La séance complète est toujours là.</h2>
          </div>
          <Link className="button primary" href="/aujourdhui">Faire une vraie séance</Link>
        </div>
      </section>
    </main>
  );
}
