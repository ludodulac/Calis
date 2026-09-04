import type { Metadata } from "next";
import Link from "next/link";
import { InfoDialog } from "@/components/info-dialog";
import { ProgressionPath } from "@/components/progression-path";
import { pullUpProgression } from "@/lib/content/v1";
import styles from "./pull-goal.module.css";

export const metadata: Metadata = {
  title: "Tractions : progression débutant, première traction et technique",
  description: "Apprends à faire ta première traction puis à progresser : diagnostic, suspension, rowing, assistance, négatives, technique et volume.",
  alternates: { canonical: "/tractions/" },
  openGraph: { title: "Tractions : de zéro à une traction solide", description: "Identifie ce qui te bloque puis suis un parcours progressif jusqu'à ta première traction et au-delà.", type: "article", url: "/tractions/" },
};

const situations = [
  ["Je ne sais pas", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction"],
  ["Je tiens mal à la barre", "/bibliotheque/suspension-barre"],
  ["Je ne monte pas", "/bibliotheque/rowing-incline"],
  ["J'y suis presque", "/bibliotheque/traction-assistee"],
  ["J'en fais déjà", "/bibliotheque/traction-technique"],
] as const;

export default function PullUpsPage() {
  return <div className="decisionPage">
    <section className="decisionIntro shell narrow">
      <div className="decisionTitleRow">
        <div>
          <div className="eyebrow">Tractions</div>
          <h1>Tu veux travailler les tractions ?</h1>
          <p className={styles.lead}>Choisis ton point de départ ou lance une séance. Le reste du parcours est là quand tu en as besoin.</p>
        </div>
        <div className="infoIconBar" aria-label="Informations secondaires">
          <InfoDialog label="Questions fréquentes" title="Questions fréquentes" icon="help">
            <div className="compactLinks">
              <Link href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction">Pourquoi je n'y arrive pas ? <span aria-hidden="true">→</span></Link>
              <Link href="/bibliotheque/traction-negative">Tractions négatives <span aria-hidden="true">→</span></Link>
              <Link href="/bibliotheque/traction-assistee">Bande élastique ou assistance <span aria-hidden="true">→</span></Link>
              <Link href="/bibliotheque/10-tractions">Après la première traction <span aria-hidden="true">→</span></Link>
            </div>
          </InfoDialog>
        </div>
      </div>

      <div className={styles.primaryAction}>
        <div>
          <span>Aujourd'hui</span>
          <strong>Calis peut trouver ton point de départ.</strong>
          <small>Tu réponds au diagnostic, puis tu fais la séance adaptée à ce que Calis sait réellement mesurer.</small>
        </div>
        <Link className="button primary" href="/aujourdhui?goal=traction">Faire ma séance</Link>
      </div>
    </section>

    <section className="decisionChoices shell narrow" aria-label="Choisir ma situation pour les tractions">
      <div className={styles.choiceHeading}><span>Ou choisis directement</span><strong>Qu'est-ce qui ressemble le plus à ta situation ?</strong></div>
      <div className="decisionGrid decisionGridFive">
        {situations.map(([title, href]) => <Link className="decisionTile" href={href} key={title}><strong>{title}</strong><span aria-hidden="true">→</span></Link>)}
      </div>
    </section>

    <section className={`${styles.pathSection} shell`} aria-labelledby="pull-path-title">
      <div className={styles.pathHeading}>
        <div>
          <span>Ton chemin</span>
          <h2 id="pull-path-title">De la suspension à plusieurs tractions.</h2>
        </div>
      </div>

      <ProgressionPath
        steps={pullUpProgression}
        milestoneId="first"
        ariaLabel="Chemin de la suspension à plusieurs tractions fiables"
        className={styles.progression}
        fork={{ label: "Après plusieurs tractions fiables", links: [{ href: "/bibliotheque/traction-explosive", label: "Gagner en hauteur →" }, { href: "/bibliotheque/tractions-lestees", label: "Gagner en force →" }, { href: "/muscle-up", label: "Préparer le muscle-up →" }] }}
      />

      <details className={styles.pathTruth}>
        <summary>Ce que Calis sait décider automatiquement</summary>
        <p>Les résultats enregistrés peuvent faire évoluer automatiquement <b>suspension → contrôle scapulaire → rowing incliné</b>. Les étapes suivantes restent un chemin pédagogique : Calis n'invente pas de transition sans critère observable.</p>
      </details>
    </section>
  </div>;
}
