import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pont fessier débutant : construire une base de chaîne postérieure",
  description: "Apprends le pont fessier avec une amplitude contrôlée pour ajouter une base simple de chaîne postérieure aux fondations Calis.",
  alternates: { canonical: "/bibliotheque/pont-fessier-debutant/" },
  openGraph: {
    title: "Pont fessier débutant : chaîne postérieure",
    description: "Une base sans matériel pour apprendre à produire de l'extension de hanche avec contrôle.",
    type: "article",
    url: "/bibliotheque/pont-fessier-debutant/",
  },
};

export default function BeginnerGluteBridgePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Chaîne postérieure · débutant</div>
      <h1>Ajoute un mouvement simple pour apprendre à pousser avec les hanches.</h1>
      <p className="lead">Le squat couvre déjà une grande partie du travail des jambes, mais il ne suffit pas à représenter toute la base du bas du corps. Le pont fessier ajoute une extension de hanche simple, sans matériel et facile à arrêter dès que le contrôle disparaît.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Étendre les hanches avec contrôle</strong></div>
        <div><span>Capacité</span><strong>Chaîne postérieure</strong></div>
        <div><span>Matériel</span><strong>Aucun</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Allongé, pieds au sol, monte le bassin sans chercher une hauteur forcée.</h2>
        <ol className="contentList numberedList">
          <li>Allonge-toi sur le dos, genoux pliés et pieds posés dans une position confortable.</li>
          <li>Pousse le sol avec les pieds et monte progressivement le bassin.</li>
          <li>Arrête la montée au point où tu peux encore contrôler le bassin sans cambrer volontairement pour gagner de la hauteur.</li>
          <li>Redescends lentement puis recommence avec la même amplitude.</li>
        </ol>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Prescription Fondations</div>
        <h2>2 séries de 8 à 12 répétitions, avec 90 secondes de repos.</h2>
        <p>La plage sert à suivre un mouvement reproductible. Garde quelques répétitions possibles en réserve et arrête avant que l'amplitude ou le contrôle changent nettement.</p>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Repères utiles</div>
          <h2>Les hanches produisent le mouvement.</h2>
          <ul>
            <li>Les pieds restent stables.</li>
            <li>Le bassin monte et descend sans à-coup.</li>
            <li>Tu peux répéter une amplitude similaire.</li>
            <li>Les fessiers et l'arrière des jambes participent clairement à l'effort.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Plus haut n'est pas automatiquement mieux.</h2>
          <ul>
            <li>Cambrer volontairement le bas du dos pour finir la répétition.</li>
            <li>Pousser de façon très asymétrique avec les pieds.</li>
            <li>Accélérer la descente lorsque la fatigue arrive.</li>
            <li>Continuer malgré une douleur vive ou persistante.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Progression</div>
        <h2>Valide la base avant d'inventer une variante plus difficile.</h2>
        <p>Quand 2 × 12 reste contrôlé sur deux séances comparables, Calis peut considérer cette prescription comme maîtrisée. Cette V1 n'automatise pas encore une variante suivante : une progression de chaîne postérieure sera ajoutée seulement lorsqu'elle sera documentée comme un vrai chemin, pas pour remplir le moteur.</p>
      </section>

      <div className="nextGrid compactNextGrid">
        <Link className="nextCard" href="/bibliotheque/squat-poids-du-corps"><strong>Je travaille aussi mes jambes</strong><span>Revoir le squat →</span></Link>
        <Link className="nextCard" href="/aujourdhui"><strong>Je veux ma séance</strong><span>Voir Aujourd'hui →</span></Link>
      </div>
    </article>
  );
}
