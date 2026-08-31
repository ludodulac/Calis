import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premiers équilibres libres en handstand",
  description: "Passe progressivement du mur aux premiers instants d'équilibre libre : réduire l'aide, sentir la pression des mains et corriger de petits déséquilibres.",
  alternates: { canonical: "/bibliotheque/premiers-equilibres-handstand/" },
  openGraph: {
    title: "Premiers équilibres libres en handstand",
    description: "Réduire progressivement l'aide du mur et apprendre à corriger de petits déséquilibres avec les mains.",
    type: "article",
    url: "/bibliotheque/premiers-equilibres-handstand/",
  },
};

export default function FirstFreeHandstandBalancePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Handstand · progression</div>
      <h1>Comment passer du mur aux premiers équilibres libres ?</h1>
      <p className="lead">Le passage au handstand libre ne demande pas d'abandonner le mur d'un coup. Le but est de créer de petits instants sans contact dans lesquels tu restes assez calme pour sentir ce qui se passe sous tes mains et essayer une correction avant que le déséquilibre devienne trop grand.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Premiers instants sans aide</strong></div>
        <div><span>Capacité</span><strong>S'équilibrer</strong></div>
        <div><span>Matériel</span><strong>Mur facultatif</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Avant de commencer</div>
        <h2>Le mur doit déjà être un outil, pas une urgence.</h2>
        <p>Travaille d'abord cette étape quand tu peux entrer au mur sans panique, rester suffisamment calme pour observer tes appuis, réduire volontairement le contact et sortir sans chute incontrôlée. Si chaque essai ressemble encore à une lutte pour ne pas tomber, garde davantage d'assistance.</p>
        <Link className="textLink" href="/bibliotheque/handstand-mur">Consolider le handstand au mur →</Link>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape 1</div>
        <h2>Réduis l'aide avant d'augmenter la durée.</h2>
        <p>Depuis une position assistée que tu contrôles, cherche de très courts instants où les pieds quittent le mur sans lancer davantage les jambes. La durée n'est pas le premier critère : un instant court mais observé t'apprend davantage qu'une longue tentative sauvée au hasard.</p>
        <p>Si tu perds immédiatement toute organisation dès que le contact disparaît, rapproche-toi du mur ou réduis l'amplitude de la tentative.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape 2</div>
        <h2>Observe la pression sous les mains.</h2>
        <p>Quand ton corps se déplace légèrement au-dessus de tes mains, la pression n'est pas identique partout. Essaie surtout de reconnaître si elle se déplace vers les doigts ou vers la base de la main. L'objectif n'est pas d'appliquer une recette universelle, mais de commencer à relier une sensation sous la main à la direction dans laquelle ton corps part.</p>
        <p>Une revue systématique publiée en 2025, basée sur 21 études biomécaniques, rapporte que les gymnastes utilisent fréquemment une stratégie dominante au niveau des poignets pour contrôler le centre de pression ; lorsque cette stratégie ne suffit plus, épaules, hanches et coudes peuvent participer davantage. Ces données viennent surtout de gymnastes et ne définissent donc pas une technique unique pour tous les débutants.</p>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Signes utiles</div>
          <h2>Tu commences à apprendre de chaque essai.</h2>
          <ul>
            <li>Tu sais parfois sentir dans quelle direction tu pars avant de tomber.</li>
            <li>Tu peux modifier légèrement la pression sous les mains sans quitter immédiatement la position.</li>
            <li>Tu sors volontairement quand la correction devient trop grande.</li>
            <li>Les essais restent courts mais de plus en plus compréhensibles.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À éviter</div>
          <h2>Ne transforme pas l'apprentissage en concours de tentatives.</h2>
          <ul>
            <li>Lancer les jambes plus fort à chaque essai pour « trouver » l'équilibre.</li>
            <li>Continuer quand les poignets, coudes ou épaules deviennent douloureux de façon vive ou persistante.</li>
            <li>Compter uniquement les secondes sans observer comment l'équilibre a été obtenu.</li>
            <li>S'éloigner du mur avant de savoir sortir volontairement.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Quand cette étape commence-t-elle à être acquise ?</h2>
        <p>Quand tu peux répéter de courts instants sans aide où tu restes assez calme pour sentir un déséquilibre, tenter une petite correction avec les mains et sortir volontairement si la correction ne suffit pas. Calis ne fixe pas ici un nombre universel de secondes : la qualité de l'information que tu tires de l'essai compte davantage qu'un record isolé.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Source scientifique</div>
        <h2>Ce qui soutient cette étape</h2>
        <p>MacDonald M, Baker JS, Gu Y, Ugbolue UC. <em>Biomechanical analyses of the handstand: a systematic review</em>. Frontiers in Sports and Active Living, 2025. La revue synthétise 21 études et décrit notamment le rôle du contrôle du centre de pression, l'importance fréquente de la stratégie du poignet et l'influence de la vision et de la position de la tête.</p>
        <a className="textLink" href="https://doi.org/10.3389/fspor.2025.1694648" target="_blank" rel="noreferrer">Consulter la publication scientifique →</a>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Choisir la suite</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/handstand-mur"><strong>Je perds le contrôle dès que le mur disparaît</strong><span>Revenir à l'assistance →</span></Link>
          <Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Mes poignets limitent mes essais</strong><span>Revoir la préparation des appuis →</span></Link>
          <Link className="nextCard" href="/handstand"><strong>Je veux revoir le chemin complet</strong><span>Retour au parcours Handstand →</span></Link>
        </div>
      </section>
    </article>
  );
}
