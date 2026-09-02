import type { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const goals = [
  ["Première traction", "/tractions"],
  ["Vraies pompes", "/pompes"],
  ["Tenir sur les mains", "/handstand"],
  ["Renforcer mes jambes", "/bibliotheque/squat-poids-du-corps"],
  ["Bouger plus librement", "/bibliotheque/mobilite-debutant"],
  ["Muscle-up", "/muscle-up"],
] as const;

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className="eyebrow">Callisthénie, guidée</div>
            <h1 id="home-title">Qu'est-ce que tu aimerais réussir avec ton corps ?</h1>
            <p className={styles.heroLead}>Calis trouve ton point de départ, te donne une séance claire et t'explique ce qui vient ensuite.</p>
            <div className={styles.heroActions}>
              <Link className="button primary" href="/aujourdhui">Trouver mon point de départ</Link>
              <Link className={styles.secondaryAction} href="#objectifs">Choisir un objectif <span aria-hidden="true">↓</span></Link>
            </div>
          </div>

          <figure className={`${styles.brandPhoto} ${styles.heroPhoto}`}>
            <img src={`${basePath}/brand/traction-home.webp`} alt="Personne s'entraînant à la traction sur une barre dans un parc" width="260" height="390" />
            <figcaption>Commencer par une capacité réelle, à ton niveau.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.goalSection} id="objectifs" aria-labelledby="goals-title">
        <div className="shell">
          <div className={styles.sectionIntro}>
            <div className="eyebrow">Un objectif concret</div>
            <h2 id="goals-title">Choisis ce que tu veux construire.</h2>
            <p>Tu n'as pas besoin de connaître la programmation sportive : pars simplement de ce que tu veux réussir.</p>
          </div>
          <div className={styles.goalLinks}>
            {goals.map(([label, href]) => (
              <Link href={href} key={href}><span>{label}</span><b aria-hidden="true">→</b></Link>
            ))}
          </div>
          <Link className={styles.unsureLink} href="/commencer">Je ne sais pas encore par où commencer →</Link>
        </div>
      </section>

      <section className={styles.methodSection} aria-labelledby="method-title">
        <div className={`shell ${styles.methodGrid}`}>
          <div>
            <div className="eyebrow">La différence Calis</div>
            <h2 id="method-title">Tu n'as pas à deviner la suite.</h2>
            <p>Le produit relie ton point de départ, ce que tu fais aujourd'hui et la prochaine étape réellement documentée.</p>
          </div>
          <ol className={styles.methodPath} aria-label="De ton point de départ à ta prochaine étape">
            <li><span>01</span><strong>Tu es ici</strong><small>Un diagnostic court situe tes fondations.</small></li>
            <li><span>02</span><strong>Tu travailles ça</strong><small>Une séance précise, mesurable et adaptée.</small></li>
            <li><span>03</span><strong>Ensuite</strong><small>Calis explique ce que tes résultats permettent de faire.</small></li>
          </ol>
        </div>
      </section>

      <section className={styles.storySection} aria-labelledby="foundations-title">
        <div className={`shell ${styles.storyGrid}`}>
          <figure className={`${styles.brandPhoto} ${styles.pushPhoto}`}>
            <img src={`${basePath}/goals/pompes.webp`} alt="Personne réalisant une pompe au sol dans un parc" width="520" height="347" />
          </figure>
          <div className={styles.storyCopy}>
            <div className="eyebrow">Construire</div>
            <h2 id="foundations-title">Des fondations avant les raccourcis.</h2>
            <p>Pousser, tirer, jambes, tronc et chaîne postérieure restent dans le programme, même lorsque tu as un objectif principal.</p>
            <Link className={styles.textAction} href="/aujourdhui">Voir ce que je fais aujourd'hui →</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.storySection} ${styles.masterySection}`} aria-labelledby="mastery-title">
        <div className={`shell ${styles.storyGrid} ${styles.masteryGrid}`}>
          <div className={styles.storyCopy}>
            <div className="eyebrow">Maîtriser</div>
            <h2 id="mastery-title">Puis apprendre ce dont ton corps est capable.</h2>
            <p>Une figure comme le handstand devient une direction, pas une promesse magique : appuis, contrôle et équilibre se construisent étape par étape.</p>
            <Link className={styles.textAction} href="/handstand">Explorer le parcours handstand →</Link>
          </div>
          <figure className={`${styles.brandPhoto} ${styles.handstandPhoto}`}>
            <img src={`${basePath}/brand/handstand-home.webp`} alt="Personne en équilibre sur les mains en extérieur" width="260" height="390" />
          </figure>
        </div>
      </section>
    </div>
  );
}
