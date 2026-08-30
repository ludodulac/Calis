import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transition muscle-up : apprendre à passer au-dessus de la barre",
  description: "Comprendre et travailler la transition du muscle-up entre tirage haut et appui au-dessus de la barre, sans multiplier les tentatives complètes.",
  alternates: { canonical: "/bibliotheque/transition-muscle-up/" },
};

export default function MuscleUpTransitionPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Muscle-up · transition</div>
      <h1>Tu arrives haut mais tu bloques à la barre ? Travaille le passage, pas seulement le tirage.</h1>
      <p className="lead">La transition est le moment où tu cesses d'être principalement sous la barre pour arriver en appui au-dessus. Si ton tirage monte déjà haut mais que tu restes coincé devant la barre, davantage de tractions classiques ne répondent pas forcément au problème que tu rencontres.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Relier tirage et appui</strong></div>
        <div><span>Niveau</span><strong>Intermédiaire</strong></div>
        <div><span>Matériel</span><strong>Barre stable</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>Le muscle-up contient un changement de problème.</h2>
        <p>Au début tu dois produire assez de mouvement pour monter. Ensuite il faut déplacer le corps vers une position où les bras peuvent pousser au-dessus de la barre. Cette liaison demande force, coordination et familiarité avec la trajectoire ; elle ne se résume pas à tirer le menton toujours plus haut.</p>
        <p>La recherche spécifique au muscle-up reste limitée. Une étude sur le muscle-up à la barre avec élan décrit néanmoins distinctement une phase de tirage puis le passage vers la position de dip, et les travaux EMG sur muscle-ups distinguent eux aussi des phases de tirage et de poussée. Calis utilise cette décomposition comme cadre pédagogique, pas comme preuve d'une technique universelle.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Avant de travailler la transition</div>
        <h2>Vérifie que tu n'essaies pas de résoudre un manque de hauteur avec de la technique.</h2>
        <p>Si ta tentative s'arrête encore très bas sous la barre, la priorité reste probablement le tirage. Si tu arrives haut, proche de la barre, mais que tu ne sais pas transformer cette hauteur en appui, la transition devient un problème plus pertinent à isoler.</p>
        <Link className="textLink" href="/bibliotheque/traction-explosive">Développer le tirage haut →</Link>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Réduire la difficulté</div>
        <h2>Apprends le passage dans une situation où tu peux réellement le contrôler.</h2>
        <p>Une barre suffisamment basse et un appui des pieds peuvent permettre de répéter lentement le passage entre dessous et dessus sans devoir produire toute la puissance d'un muscle-up complet. L'aide des jambes doit rendre la trajectoire observable, pas projeter le corps au hasard.</p>
        <p>Le critère utile est simple : peux-tu répéter le passage de façon comparable, avec les deux bras participant ensemble, puis réduire progressivement l'aide ?</p>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois observer</div>
          <h2>Le mouvement devient une liaison plutôt qu'un choc contre la barre.</h2>
          <ul>
            <li>Tu arrives assez haut pour que le passage soit réellement possible.</li>
            <li>Le torse se retrouve progressivement au-dessus de la barre.</li>
            <li>Les deux bras participent au passage sans qu'un côté doive systématiquement passer en premier.</li>
            <li>Tu termines dans un appui que tu peux stabiliser.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Ne transforme pas une compensation en objectif technique.</h2>
          <ul>
            <li>Un bras passe systématiquement longtemps avant l'autre.</li>
            <li>Tu percutes la barre sans pouvoir contrôler la trajectoire.</li>
            <li>Tu ajoutes toujours plus d'élan sans comprendre où tu bloques.</li>
            <li>Une douleur vive, inhabituelle ou persistante apparaît à l'épaule, au coude ou au poignet.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Quand remettre davantage de mouvement complet ?</h2>
        <p>Quand ton tirage t'amène régulièrement assez haut, que tu comprends comment passer vers l'appui avec une assistance réduite et que la poussée finale n'est plus un problème séparé. Il n'existe pas ici de nombre universel de répétitions garantissant le muscle-up.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Sources et limites</div>
        <h2>Ce que la recherche permet réellement de dire.</h2>
        <p>Les études directement consacrées au muscle-up sont encore peu nombreuses et portent souvent sur de petits échantillons ou sur des variantes avec élan. Elles permettent de confirmer que le mouvement comporte des phases mécaniquement distinctes et demande une coordination importante, mais pas de prescrire une progression unique valable pour tout le monde.</p>
        <a className="textLink" href="https://doi.org/10.3233/ATDE240589" target="_blank" rel="noreferrer">Étude biomécanique du bar muscle-up →</a><br />
        <a className="textLink" href="https://doi.org/10.70252/FJQL7859" target="_blank" rel="noreferrer">Étude EMG barre vs anneaux →</a>
      </section>

      <section className="articleSection">
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-explosive"><strong>Je ne monte pas encore assez haut</strong><span>Travailler le tirage →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up"><strong>Je ne sais pas ce qui bloque</strong><span>Faire le diagnostic →</span></Link>
          <Link className="nextCard" href="/dips"><strong>Je bloque une fois au-dessus</strong><span>Construire la poussée →</span></Link>
        </div>
      </section>
      <Link className="textLink" href="/muscle-up">← Revenir au parcours muscle-up</Link>
    </article>
  );
}
