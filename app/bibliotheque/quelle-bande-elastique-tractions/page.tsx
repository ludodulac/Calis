import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quelle bande élastique choisir pour les tractions ?",
  description: "Choisis une bande d'assistance pour les tractions sans te fier uniquement à une couleur ou à ton poids : résistance, difficulté réelle, progression et erreurs à éviter.",
  alternates: { canonical: "/bibliotheque/quelle-bande-elastique-tractions/" },
  openGraph: {
    title: "Quelle bande élastique choisir pour les tractions ?",
    description: "Une méthode simple pour choisir assez d'assistance pour apprendre la traction, puis la réduire progressivement.",
    type: "article",
    url: "/bibliotheque/quelle-bande-elastique-tractions/",
  },
};

export default function PullUpBandGuidePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Équipement · tractions</div>
      <h1>Quelle bande élastique choisir pour apprendre les tractions ?</h1>
      <p className="lead">Ne choisis pas ta bande uniquement avec un tableau « poids du corps → résistance ». Deux bandes annoncées au même nombre de kilos peuvent donner une aide différente selon leur longueur, leur tension, leur installation et la position de ton corps. Le bon choix est celui qui rend la traction praticable sans la rendre gratuite.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Choisir une assistance utile</strong></div>
        <div><span>Matériel</span><strong>Bande en boucle adaptée à la barre</strong></div>
        <div><span>Principe</span><strong>Assez d'aide, pas plus que nécessaire</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>La bonne bande est celle qui te laisse encore travailler</h2>
        <p>Pour apprendre une traction, cherche une bande qui te permet de réaliser le mouvement avec une trajectoire contrôlée, sans grand balancement et sans être projeté vers la barre. Si tu ne peux toujours pas monter malgré une forte assistance, il est souvent plus utile de revenir au <Link className="textLink" href="/bibliotheque/rowing-incline">rowing incliné</Link> et aux étapes précédentes plutôt que d'empiler toujours plus d'aide.</p>
        <p>À l'inverse, si la bande te fait presque flotter et que tu pourrais enchaîner les répétitions sans effort net du dos et des bras, l'assistance est trop importante pour apprendre efficacement cette étape.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Pourquoi les kilos ne suffisent pas</div>
        <h2>La résistance annoncée n'est pas une quantité fixe d'aide pendant toute la traction</h2>
        <p>Une bande élastique produit davantage de tension lorsqu'elle est davantage étirée. Sur une traction assistée, elle aide donc généralement plus quand elle est fortement tendue et moins lorsqu'elle se raccourcit. Le chiffre indiqué par le fabricant dépend aussi de sa méthode de mesure.</p>
        <p>C'est pourquoi Calis ne publie pas un tableau universel du type « 70 kg = bande de 30 kg ». Ton poids compte, mais ta force actuelle, la longueur de la bande, la hauteur de la barre, l'endroit où tu poses le pied ou le genou et la marque comptent aussi.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Méthode de choix</div>
        <h2>Teste la difficulté du mouvement, pas seulement l'étiquette</h2>
        <ol className="contentList numberedList">
          <li>Choisis une assistance qui te permet d'abord une répétition complète et contrôlable.</li>
          <li>Vérifie que tu dois encore produire un effort important avec le dos et les bras.</li>
          <li>Observe le point le plus difficile : la bande ne doit pas masquer complètement ce passage.</li>
          <li>Vérifie que tu peux redescendre volontairement sans être tiré ou désorganisé par l'élastique.</li>
          <li>Lorsque le mouvement devient nettement plus facile et reste propre, diminue l'assistance plutôt que d'accumuler seulement davantage de répétitions.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Bande adaptée</div>
          <h2>Tu reconnais encore une vraie traction</h2>
          <ul>
            <li>Tu peux partir sans grand élan.</li>
            <li>Dos et bras travaillent nettement.</li>
            <li>Tu sens encore un passage plus difficile.</li>
            <li>La descente reste contrôlée.</li>
            <li>Tu peux progressivement utiliser moins d'aide.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Bande mal choisie</div>
          <h2>L'élastique dicte le mouvement</h2>
          <ul>
            <li>Tu es fortement projeté au départ.</li>
            <li>La partie basse devient presque automatique.</li>
            <li>Tu cherches surtout à stabiliser l'élastique au lieu d'apprendre la traction.</li>
            <li>Tu changes complètement de technique lorsque tu passes à une bande plus légère.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Une bande ou plusieurs ?</div>
        <h2>Plusieurs résistances peuvent être utiles, mais un kit n'est pas obligatoire</h2>
        <p>Disposer de plusieurs résistances facilite les petits ajustements et permet de réduire progressivement l'assistance. Mais tu n'as pas besoin d'acheter un kit complet pour commencer. Si un appui des pieds sur un support permet déjà de régler précisément l'aide, une bande peut même être inutile.</p>
        <p>Calis pourra recommander des modèles précis lorsqu'un comparatif de produits, de dimensions, de résistance réelle, de durabilité et de conditions commerciales aura été réalisé. Cette page n'a donc pas besoin de vendre quelque chose pour être utile.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Sécurité pratique</div>
        <h2>Inspecte et installe correctement la bande</h2>
        <p>Avant chaque utilisation, vérifie l'état de la bande et son point d'ancrage. Une bande abîmée, entaillée ou mal installée peut revenir brutalement. Suis les instructions du fabricant pour l'installation et évite de placer ton visage dans une trajectoire où une bande pourrait revenir si elle se détache.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Prochaine étape</div>
        <h2>Utilise ensuite la bande comme une étape, pas comme une destination</h2>
        <p>Une fois l'assistance choisie, le travail consiste à pratiquer une traction propre puis à réduire progressivement cette aide. Si tu peux déjà contrôler la descente avec moins d'assistance, ajoute aussi le travail de négatives.</p>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-assistee"><strong>Apprendre le mouvement</strong><span>Traction assistée : technique et progression →</span></Link>
          <Link className="nextCard" href="/bibliotheque/traction-negative"><strong>Réduire l'aide</strong><span>Apprendre la traction négative →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction"><strong>Tu bloques encore ?</strong><span>Identifier ce qui limite ta traction →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/tractions">← Revenir au guide des tractions</Link>
    </article>
  );
}
