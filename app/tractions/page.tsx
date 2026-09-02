import type { Metadata } from "next";
import Link from "next/link";
import { InfoDialog } from "@/components/info-dialog";
import { ProgressionPath } from "@/components/progression-path";
import { pullUpProgression } from "@/lib/content/v1";

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
  return <div className="decisionPage pullGoalPage">
    <section className="decisionIntro shell narrow">
      <div className="decisionTitleRow">
        <div>
          <div className="eyebrow">Traction</div>
          <h1>Où ça bloque ?</h1>
          <p className="pullGoalLead">Tu n'as pas besoin de connaître le nom de ton niveau. Pars simplement de ce que ton corps sait faire aujourd'hui.</p>
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
    </section>

    <section className="pullVisiblePath shell" aria-labelledby="pull-path-title">
      <div className="pullPathHeading">
        <div>
          <span>Le chemin</span>
          <h2 id="pull-path-title">Construire la traction, étape par étape.</h2>
        </div>
        <Link className="button primary" href="/aujourdhui?goal=traction">Trouver mon point de départ</Link>
      </div>

      <div className="pullAutomationNote">
        <strong>Ce que Calis sait décider aujourd'hui</strong>
        <p>Dans le parcours V1, les résultats enregistrés peuvent faire évoluer automatiquement <b>suspension → contrôle scapulaire → rowing incliné</b>. Les étapes suivantes restent visibles comme chemin pédagogique, mais Calis n'invente pas de transition automatique sans critère observable.</p>
      </div>

      <ProgressionPath
        steps={pullUpProgression}
        milestoneId="first"
        ariaLabel="Chemin de la suspension à plusieurs tractions fiables"
        className="pullVisibleProgression"
        fork={{ label: "Après plusieurs tractions fiables", links: [{ href: "/bibliotheque/traction-explosive", label: "Gagner en hauteur →" }, { href: "/bibliotheque/tractions-lestees", label: "Gagner en force →" }, { href: "/muscle-up", label: "Préparer le muscle-up →" }] }}
      />
    </section>

    <section className="decisionChoices shell narrow" aria-label="Choisir ma situation pour les tractions">
      <div className="decisionChoiceHeading"><span>Maintenant</span><strong>Choisis ce qui ressemble le plus à ta situation.</strong></div>
      <div className="decisionGrid decisionGridFive">
        {situations.map(([title, href]) => <Link className="decisionTile" href={href} key={title}><strong>{title}</strong><span aria-hidden="true">→</span></Link>)}
      </div>
    </section>
  </div>;
}
