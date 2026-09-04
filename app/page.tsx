import type { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const choices = [
  { label: "Tractions", detail: "Barre", href: "/tractions", mark: "T" },
  { label: "Pompes", detail: "Sol", href: "/pompes", mark: "P" },
  { label: "Dips", detail: "Parallèles", href: "/dips", mark: "D" },
  { label: "Jambes", detail: "Sans matériel", href: "/bibliotheque/squat-poids-du-corps", mark: "J" },
  { label: "Gainage", detail: "Sol", href: "/bibliotheque/gainage-debutant", mark: "G" },
  { label: "Handstand", detail: "Mur · sol", href: "/handstand", mark: "H" },
  { label: "Mobilité", detail: "Bouger mieux", href: "/bibliotheque/mobilite-debutant", mark: "M" },
  { label: "Muscle-up", detail: "Barre", href: "/muscle-up", mark: "M+" },
] as const;

export default function HomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.start} aria-labelledby="home-title">
        <div className="shell">
          <div className={styles.intro}>
            <p className="eyebrow">Calis</p>
            <h1 id="home-title">Qu’est-ce que tu veux travailler aujourd’hui ?</h1>
            <p className={styles.lead}>Choisis. Le parcours est derrière.</p>
          </div>

          <div className={styles.choiceGrid} aria-label="Choisir quoi travailler">
            {choices.map((choice) => (
              <Link className={styles.choiceCard} href={choice.href} key={choice.href}>
                <span className={styles.choiceMark} aria-hidden="true">{choice.mark}</span>
                <span className={styles.choiceCopy}>
                  <strong>{choice.label}</strong>
                  <small>{choice.detail}</small>
                </span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className={styles.guided}>
            <div>
              <strong>Tu veux juste faire ta séance ?</strong>
              <span>Calis te guide avec ce que tu as déjà fait.</span>
            </div>
            <Link className="button primary" href="/aujourdhui">Aujourd’hui</Link>
          </div>

          <div className={styles.secondaryLinks}>
            <Link href="/essayer">Je veux juste essayer quelque chose</Link>
            <Link href="/commencer">Je ne sais pas par où commencer</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
