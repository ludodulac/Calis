import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gainage débutant : construire un tronc stable sans chercher un record",
  description: "Apprends un gainage simple et mesurable : position contrôlée, séries courtes, respiration et progression sans chrono magique.",
  alternates: { canonical: "/bibliotheque/gainage-debutant/" },
  openGraph: {
    title: "Gainage débutant : construire un tronc stable",
    description: "Une base simple pour apprendre à garder le tronc organisé pendant un effort au poids du corps.",
    type: "article",
    url: "/bibliotheque/gainage-debutant/",
  },
};

export default function BeginnerCorePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Tronc · débutant</div>
      <h1>Construis un gainage que tu peux garder sans bloquer tout ton corps.</h1>
      <p className="lead">Le but n'est pas de tenir le plus longtemps possible. Apprends d'abord à relier épaules, bassin et respiration dans une position simple, puis répète des expositions courtes qui restent reconnaissables du début à la fin.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Stabiliser le tronc</strong></div>
        <div><span>Capacité</span><strong>Anti-extension</strong></div>
        <div><span>Matériel</span><strong>Aucun</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Point de départ</div>
        <h2>Utilise une planche assez facile pour rester maître de la position.</h2>
        <p>Commence en appui sur les avant-bras. Si la position complète est trop difficile à organiser, pose les genoux au sol. Cherche une ligne stable entre épaules et bassin, sans laisser le ventre descendre progressivement ni pousser les hanches toujours plus haut pour survivre au chrono.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Prescription Fondations</div>
        <h2>2 séries de 15 à 30 secondes, avec 60 secondes de repos.</h2>
        <p>Cette plage sert à rendre la séance exécutable et comparable, pas à définir un seuil universel de force. Arrête une série lorsque tu ne peux plus garder la même organisation tout en respirant normalement.</p>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Repères utiles</div>
          <h2>La position reste calme.</h2>
          <ul>
            <li>Tu peux continuer à respirer pendant l'effort.</li>
            <li>Le bassin ne s'effondre pas progressivement vers le sol.</li>
            <li>Les épaules et les avant-bras restent des appuis actifs.</li>
            <li>La fin de la série ressemble encore au début.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Ne transforme pas le chrono en objectif principal.</h2>
          <ul>
            <li>Bloquer volontairement la respiration pour prolonger la série.</li>
            <li>Continuer alors que la position change nettement.</li>
            <li>Interpréter une douleur vive ou persistante comme un effort normal.</li>
            <li>Ajouter du temps uniquement parce que le nombre précédent paraît trop petit.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Progression</div>
        <h2>Rends d'abord la même plage reproductible.</h2>
        <p>Quand 2 × 30 secondes restent calmes sur deux séances comparables, Calis considère surtout que cette base est disponible. La suite ne doit pas être une course automatique vers des planches toujours plus longues : le tronc devra ensuite servir les pompes, tractions, jambes et futurs mouvements plus spécialisés.</p>
      </section>

      <div className="nextGrid compactNextGrid">
        <Link className="nextCard" href="/aujourdhui"><strong>Je construis mes fondations</strong><span>Voir ma séance du jour →</span></Link>
        <Link className="nextCard" href="/bibliotheque/par-ou-commencer-calisthenie"><strong>Je pars de zéro</strong><span>Revenir au parcours débutant →</span></Link>
      </div>
    </article>
  );
}
