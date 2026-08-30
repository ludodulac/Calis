import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traction assistée : progresser vers sa première traction",
  description: "Apprends à utiliser une assistance pour travailler la traction complète, choisir une aide adaptée et la réduire progressivement sans perdre la technique.",
  alternates: { canonical: "/bibliotheque/traction-assistee/" },
  openGraph: {
    title: "Traction assistée : progresser vers sa première traction",
    description: "Utiliser une assistance sans laisser l'aide faire tout le travail : technique, sensations, erreurs et prochaine étape.",
    type: "article",
    url: "/bibliotheque/traction-assistee/",
  },
};

export default function AssistedPullUpPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Progression traction · débutant</div>
      <h1>Traction assistée : apprendre le mouvement avant de pouvoir soulever tout son poids</h1>
      <p className="lead">Si tu tiens à la barre mais que tu n'arrives pas encore à monter, l'assistance te permet de pratiquer une vraie traction avec une difficulté adaptée. Le but n'est pas de rendre le mouvement facile : c'est de garder assez d'effort pour apprendre, puis de réduire progressivement l'aide.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Répéter une traction complète</strong></div>
        <div><span>Capacité</span><strong>Tirer</strong></div>
        <div><span>Étape suivante</span><strong>Contrôler la descente</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>À quoi sert une traction assistée ?</h2>
        <p>Elle réduit temporairement la part de ton poids que tu dois déplacer afin que tu puisses travailler le geste complet. Une bonne assistance te laisse sentir les zones difficiles, monter sans élan important et redescendre avec contrôle.</p>
        <p>Si l'aide te propulse ou rend toutes les répétitions presque gratuites, elle est probablement trop importante pour cet objectif.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Avant de commencer</div>
        <h2>Est-ce la bonne étape pour toi ?</h2>
        <p>Si tes mains lâchent presque immédiatement, commence par <Link className="textLink" href="/bibliotheque/suspension-barre">apprendre la suspension à la barre</Link>. Si tu ne contrôles pas encore le début du mouvement bras tendus, travaille aussi le <Link className="textLink" href="/bibliotheque/controle-scapulaire">contrôle scapulaire</Link>.</p>
        <p>Si tu peux déjà tirer ton corps sur un angle plus facile, le <Link className="textLink" href="/bibliotheque/rowing-incline">rowing incliné</Link> reste un excellent moyen de construire davantage de force sans dépendre uniquement d'une bande.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Choisir l'assistance</div>
        <h2>Bande élastique, pieds ou autre aide : cherche surtout la bonne difficulté</h2>
        <p>Une bande élastique est pratique mais son assistance varie au cours du mouvement. Un appui léger des pieds sur un support bas peut aussi permettre de doser l'aide très progressivement. Dans les deux cas, le principe reste le même : utiliser juste assez d'aide pour conserver une répétition contrôlable.</p>
        <p>Calis ne recommande pas encore une résistance de bande universelle : le poids du corps, le matériel, la longueur de la bande, son installation et ton niveau modifient fortement l'aide réellement obtenue.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Comment faire une traction assistée utile</h2>
        <ol className="contentList numberedList">
          <li>Installe une prise confortable et une position de départ stable.</li>
          <li>Utilise une assistance suffisante pour pouvoir commencer le tirage sans grand balancement.</li>
          <li>Tire en gardant le corps organisé et laisse l'aide compléter ce que tu ne peux pas encore produire seul.</li>
          <li>Atteins une position haute claire sans chercher à projeter la tête vers la barre.</li>
          <li>Redescends volontairement au lieu de laisser l'élastique ou la gravité décider du retour.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>L'aide te permet de pratiquer, elle ne remplace pas ton effort</h2>
          <ul>
            <li>Dos et bras produisent encore un effort net.</li>
            <li>Le passage difficile de la traction reste perceptible.</li>
            <li>Tu peux contrôler la montée et surtout le retour.</li>
            <li>La trajectoire ressemble progressivement à ta future traction libre.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Erreurs fréquentes</div>
          <h2>Ne transforme pas l'assistance en raccourci</h2>
          <ul>
            <li>Choisir une bande qui te projette vers le haut.</li>
            <li>Accumuler des répétitions rapides parce qu'elles deviennent faciles.</li>
            <li>Créer un grand élan avec les jambes avant chaque tirage.</li>
            <li>Changer d'amplitude selon la fatigue sans t'en rendre compte.</li>
          </ul>
          <p>Une douleur vive ou persistante à l'épaule, au coude ou au poignet n'est pas un signe qu'il faut simplement davantage d'assistance. Arrête ou adapte l'exercice et demande un avis professionnel si nécessaire.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Progresser</div>
        <h2>Comment réduire l'aide ?</h2>
        <p>Il n'existe pas un nombre universel de répétitions qui oblige à changer de bande. Réduis l'assistance lorsque tes répétitions sont suffisamment stables pour que l'étape suivante reste contrôlable. Avec une bande, cela peut signifier passer à une assistance moindre. Avec les pieds, cela peut signifier appuyer moins fort ou modifier légèrement le support.</p>
        <p>Ne change qu'une difficulté à la fois : moins d'aide avec une technique similaire est déjà un progrès mesurable.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape suivante</div>
        <h2>Apprends ensuite à résister à la descente</h2>
        <p>Lorsque tu peux travailler avec une assistance modérée et garder un retour propre, les négatives permettent de concentrer le travail sur la descente complète avant de retester une traction libre.</p>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-negative"><strong>Prochaine progression</strong><span>Apprendre la traction négative →</span></Link>
          <Link className="nextCard" href="/bibliotheque/premiere-traction"><strong>Voir tout le chemin</strong><span>Progression première traction →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/tractions">← Revenir au guide des tractions</Link>
    </article>
  );
}
