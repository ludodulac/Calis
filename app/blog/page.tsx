import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Guides de callisthénie",
  description: "Les guides de fond de Calisthenics Atlas : commencer, progresser, comprendre les mouvements et choisir le matériel avec méthode.",
  robots: { index: false, follow: true },
};

const themes = [
  {
    title: "Commencer",
    text: "Des réponses simples aux questions des débutants : par où commencer, quelles bases construire et comment choisir une progression réaliste.",
  },
  {
    title: "Comprendre les mouvements",
    text: "Des guides reliés aux parcours Atlas pour mieux comprendre les pompes, les tractions, les dips, le handstand et les prérequis utiles.",
  },
  {
    title: "Matériel utile",
    text: "Des comparatifs et guides d’achat seulement lorsqu’ils peuvent réellement aider à choisir. Les liens commerciaux seront clairement signalés lorsqu’ils existent.",
  },
  {
    title: "Progression et méthode",
    text: "Des ressources durables pour structurer son entraînement, éviter de brûler les étapes et savoir quoi travailler ensuite.",
  },
] as const;

export default function BlogPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Guides · Calisthenics Atlas</p>
          <h1>Une bibliothèque éditoriale qui doit devenir meilleure, pas simplement plus grosse.</h1>
          <p className="lead">
            Le blog d’Atlas est en construction. Les futurs articles seront pensés comme des ressources durables : recherche, sources, apport humain, vérification puis liens utiles vers les parcours du site.
          </p>
          <div className={styles.actions}>
            <Link className="button" href="/commencer">Commencer avec Atlas</Link>
            <Link className={styles.secondary} href="/bibliotheque">Explorer les mouvements</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className={styles.heading}>
            <div>
              <p className="eyebrow">Architecture éditoriale</p>
              <h2>Les grands sujets que nous allons construire</h2>
            </div>
            <p>Nous publierons progressivement les premiers guides après leur revue. Cette page reste volontairement légère tant que les ressources ne sont pas réellement prêtes.</p>
          </div>
          <div className={styles.grid}>
            {themes.map((theme) => (
              <article className={styles.card} key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
                <span>Guides à venir</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.principleSection}>
        <div className="shell">
          <div className={styles.principle}>
            <p className="eyebrow">Principe éditorial</p>
            <h2>Humain aux commandes, IA pour accélérer.</h2>
            <p>L’IA peut aider à rechercher, organiser, rédiger et décliner un sujet. Elle ne remplace pas la validation du sujet, les sources, l’expérience réellement disponible ni la vérification avant publication.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
