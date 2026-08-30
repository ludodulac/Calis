import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tractions lestées : quand et comment commencer",
  description: "Savoir quand ajouter du lest aux tractions, comment démarrer progressivement et quels repères conserver sans sacrifier la technique.",
  alternates: { canonical: "/bibliotheque/tractions-lestees/" },
  openGraph: {
    title: "Tractions lestées : quand et comment commencer",
    description: "Ajouter du poids seulement lorsque cela sert réellement ta progression en force.",
  },
};

export default function WeightedPullUpsPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Force · Intermédiaire</div>
        <h1>Quand commencer les tractions lestées ?</h1>
        <p className="lead">Le lest devient intéressant quand tes tractions au poids du corps sont suffisamment prévisibles pour que l'ajout de charge mesure vraiment une progression de force — pas quand il sert à compenser l'impatience d'aller plus vite.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/traction-technique">Vérifier ma technique</Link><Link className="button secondary" href="/bibliotheque/10-tractions">Construire plusieurs tractions</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="eyebrow">Réponse rapide</div><h2>Tu n'as pas besoin d'un nombre magique de tractions.</h2>
        <p>Avant de lester, cherche surtout des répétitions complètes et reproductibles, une prise stable et une technique qui ne change pas radicalement dès que l'effort augmente. Le nombre exact nécessaire dépend du but, de la charge envisagée et de ton expérience.</p>
      </div></section>

      <section className="section shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Décider</div><h2>Le lest doit résoudre un besoin réel.</h2></div>
        <div className="mistakeList">
          <div><strong>Tu cherches encore ta première traction</strong><p>Le lest n'a rien à apporter pour l'instant. Construis d'abord la capacité de tirer ton propre corps.</p></div>
          <div><strong>Tes répétitions changent beaucoup d'une séance à l'autre</strong><p>Stabilise le mouvement avant d'ajouter une nouvelle variable.</p></div>
          <div><strong>Tu contrôles bien tes tractions et veux développer davantage de force</strong><p>Une petite surcharge progressive peut devenir un outil pertinent.</p></div>
        </div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Premières séances</div><h2>Ajoute assez peu pour reconnaître encore ta traction.</h2></div>
        <div className="mistakeList">
          <div><strong>1. Garde ton mouvement de référence</strong><p>Utilise une prise et une amplitude que tu connais déjà afin que la charge soit la principale nouveauté.</p></div>
          <div><strong>2. Commence avec une surcharge modeste</strong><p>La première charge n'a pas besoin d'impressionner. Elle doit te permettre d'observer comment ton mouvement réagit au poids supplémentaire.</p></div>
          <div><strong>3. Compare des répétitions comparables</strong><p>Si l'amplitude raccourcit fortement ou que l'élan change complètement, le chiffre de charge devient moins utile pour suivre ta progression.</p></div>
          <div><strong>4. Fais évoluer une variable à la fois</strong><p>Charge, répétitions, séries et fréquence peuvent toutes augmenter le stress. Il n'est pas nécessaire de les pousser simultanément.</p></div>
        </div>
      </div></section>

      <section className="section shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Sensations et sécurité</div><h2>Le mouvement doit devenir plus difficile, pas méconnaissable.</h2></div>
        <p>Tu peux ressentir une demande de force plus importante dans le tirage et la prise. En revanche, une douleur inhabituelle à l'épaule, au coude, au poignet ou ailleurs n'est pas un objectif d'entraînement. Réduis ou arrête la charge si nécessaire et demande l'avis d'un professionnel de santé qualifié si le problème persiste ou t'inquiète.</p>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="eyebrow">Matériel</div><h2>Une ceinture de lest peut être utile. Elle n'est pas obligatoire pour apprendre les tractions.</h2>
        <p>Calis pourra comparer plus tard ceintures, chaînes, charges et solutions alternatives lorsque de vrais critères de test et des offres commerciales pertinentes seront disponibles. Cette page n'a pas besoin de vendre un produit pour être utile aujourd'hui.</p>
      </div></section>

      <section className="section shell narrow">
        <div className="eyebrow">Deux directions possibles</div><h2>Plus fort ou plus explosif : les deux chemins peuvent ensuite se recroiser.</h2>
        <p>Le lest développe une surcharge mesurable. Le tirage explosif travaille davantage la capacité à produire rapidement de la force et à gagner de la hauteur. Selon ton objectif, tu peux donner la priorité à l'un sans prétendre qu'ils sont interchangeables.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/traction-explosive">Travailler l'explosivité</Link><Link className="button secondary" href="/tractions">Revenir au parcours traction</Link></div>
      </section>
    </>
  );
}
