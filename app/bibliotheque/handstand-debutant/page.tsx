import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Handstand débutant : progression pour apprendre à tenir sur les mains",
  description: "Une progression simple pour apprendre le handstand : poignets, inversion, sortie, mur, équilibre avec les mains et premières secondes libres.",
  alternates: { canonical: "/bibliotheque/handstand-debutant/" },
  openGraph: {
    title: "Handstand débutant : apprendre à tenir sur les mains",
    description: "Construis les appuis, apprivoise l'inversion puis apprends à corriger l'équilibre progressivement.",
    type: "article",
    url: "/bibliotheque/handstand-debutant/",
  },
};

export default function BeginnerHandstandPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Handstand · progression débutant</div>
      <h1>Comment apprendre le handstand quand on débute ?</h1>
      <p className="lead">Ne cherche pas d'abord à « tenir 10 secondes ». Ton premier objectif est plus simple : pouvoir charger tes mains, entrer dans l'inversion, sortir volontairement puis commencer à sentir quand ton poids se déplace au-dessus de tes doigts et de tes poignets.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Premiers équilibres contrôlés</strong></div>
        <div><span>Capacité</span><strong>S'équilibrer</strong></div>
        <div><span>Matériel</span><strong>Un mur suffit</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>Le handstand est une succession de problèmes à résoudre.</h2>
        <p>Avant l'équilibre libre, tu dois tolérer l'appui sur les mains, accepter d'être à l'envers et disposer d'une sortie que tu comprends. Le mur réduit ensuite la difficulté assez longtemps pour que tu puisses observer la position au lieu de seulement survivre à la tentative.</p>
        <p>Quand ces bases deviennent familières, le travail change : tu apprends à corriger de petits déplacements avec les mains et le reste du corps plutôt qu'à lancer plus fort les jambes.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape 1</div>
        <h2>Assure-toi que tes appuis acceptent progressivement la charge.</h2>
        <p>Si tes poignets deviennent immédiatement le facteur limitant, commence par les préparer. L'objectif n'est pas de forcer une amplitude parfaite, mais d'augmenter progressivement la quantité de charge et de temps que tes mains tolèrent sans douleur vive.</p>
        <Link className="textLink" href="/bibliotheque/poignets-handstand">Préparer les poignets pour le handstand →</Link>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape 2</div>
        <h2>Apprends une entrée et une sortie avant de multiplier les tentatives libres.</h2>
        <p>La peur de tomber rend difficile l'apprentissage de l'équilibre : tu accélères, te crispes ou quittes la position avant d'avoir senti ce qui se passe. Commence donc dans un environnement dégagé, proche d'un mur, avec une manière de redescendre que tu as répétée à faible intensité.</p>
        <p>Le but n'est pas de supprimer toute appréhension en une séance. Il est de rendre chaque tentative assez prévisible pour que ton attention puisse progressivement passer de « ne pas tomber » à « sentir mes appuis ».</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape 3</div>
        <h2>Utilise le mur pour réduire la difficulté, pas pour oublier l'équilibre.</h2>
        <p>Le mur te permet de rester inversé sans devoir corriger chaque oscillation. Profite-en pour chercher une position calme, pousser le sol et respirer. Puis réduis progressivement la quantité d'aide : moins de contact, de plus courts instants sans contact, ou des décollages contrôlés selon la variante utilisée.</p>
        <Link className="textLink" href="/bibliotheque/handstand-mur">Apprendre le handstand au mur →</Link>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Tes mains deviennent un vrai outil d'équilibre.</h2>
          <ul>
            <li>La pression change entre la base de la main et les doigts.</li>
            <li>Tu peux parfois ralentir une chute avant qu'elle devienne trop grande.</li>
            <li>Tu restes assez calme pour sentir un déséquilibre naître.</li>
            <li>Le mur sert de sécurité de moins en moins souvent.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Ne confonds pas davantage de tentatives avec davantage d'apprentissage.</h2>
          <ul>
            <li>Chaque essai commence par un lancer beaucoup trop fort.</li>
            <li>Tu quittes la position dès que les pieds ne touchent plus le mur.</li>
            <li>Tu cherches seulement un record de secondes sans comprendre pourquoi tu tombes.</li>
            <li>Les poignets, épaules ou coudes deviennent douloureux de façon vive ou persistante.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Pourquoi les mains comptent autant</div>
        <h2>L'équilibre ne vient pas d'un corps parfaitement immobile.</h2>
        <p>Une revue systématique publiée en 2025 a regroupé 21 études biomécaniques sur le handstand. Chez les gymnastes étudiés, le contrôle de l'équilibre repose souvent d'abord sur des ajustements au niveau des poignets ; lorsque cette stratégie ne suffit plus, épaules, hanches et coudes participent davantage. Les conditions visuelles et la position de la tête influencent aussi la stabilité.</p>
        <p>Ce résultat ne fournit pas une « technique magique » pour un débutant, et les populations étudiées ne représentent pas tous les pratiquants. Il soutient toutefois une idée pédagogique utile : apprendre à sentir et modifier la pression sous les mains fait partie du problème, au lieu de chercher uniquement à figer tout le corps.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Quand commencer à chercher davantage d'équilibre libre ?</h2>
        <p>Quand tu peux entrer au mur sans panique, rester suffisamment calme pour observer tes appuis, réduire volontairement le contact avec le mur et sortir sans chute incontrôlée. Ce n'est pas un examen : c'est simplement le moment où les essais libres commencent à contenir assez d'information pour t'apprendre quelque chose.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Source scientifique</div>
        <h2>Ce que nous avons vérifié</h2>
        <p>MacDonald M, Baker JS, Gu Y, Ugbolue U. <em>Biomechanical analyses of the handstand: a systematic review</em>. Frontiers in Sports and Active Living, 2025. La revue synthétise 21 études biomécaniques et décrit notamment les stratégies de contrôle du centre de pression, le rôle des poignets et l'influence de la vision et de la position de la tête.</p>
        <a className="textLink" href="https://doi.org/10.3389/fspor.2025.1694648" target="_blank" rel="noreferrer">Consulter la publication scientifique →</a>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Choisir la suite</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Mes appuis me limitent</strong><span>Préparer les poignets →</span></Link>
          <Link className="nextCard" href="/bibliotheque/handstand-mur"><strong>Je dois apprivoiser l'inversion</strong><span>Travailler au mur →</span></Link>
          <Link className="nextCard" href="/bibliotheque/parallettes-handstand"><strong>Je me demande si les parallettes aideraient</strong><span>Comprendre leur intérêt →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/handstand">← Revenir au parcours handstand</Link>
    </article>
  );
}
