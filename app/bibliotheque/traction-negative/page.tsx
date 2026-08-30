import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traction négative : apprendre à contrôler la descente",
  description: "Apprends la traction négative pour construire ta première traction : position de départ, descente contrôlée, erreurs à éviter et étape suivante.",
  alternates: { canonical: "/bibliotheque/traction-negative/" },
  openGraph: {
    title: "Traction négative : apprendre à contrôler la descente",
    description: "Une étape progressive vers la première traction, sans chrono magique ni répétitions imposées.",
    type: "article",
    url: "/bibliotheque/traction-negative/",
  },
};

export default function NegativePullUpPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Progression · première traction</div>
      <h1>Traction négative : apprendre à contrôler la descente</h1>
      <p className="lead">Tu n'arrives pas encore à monter jusqu'à la barre ? La traction négative te permet de travailler une partie très concrète du mouvement : tu pars en haut avec de l'aide, puis tu résistes à la descente. L'objectif n'est pas de battre un chrono, mais de transformer une chute en mouvement que tu contrôles.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Contrôler la descente d'une traction</strong></div>
        <div><span>Pour qui</span><strong>Première traction en construction</strong></div>
        <div><span>Matériel</span><strong>Barre + support stable</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>C'est quoi une traction négative ?</h2>
        <p>Une traction complète comporte une montée et une descente. Dans une négative, tu évites temporairement la montée : un support te permet d'atteindre proprement la position haute, puis tu contrôles le retour vers les bras tendus. Cela permet de pratiquer la phase descendante même lorsque la traction complète n'est pas encore disponible.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Avant de commencer</div>
        <h2>Vérifie surtout que tu peux t'installer sans te battre avec la barre</h2>
        <p>Utilise un support suffisamment haut et stable pour arriver en position haute sans saut violent. Si tu n'es pas encore à l'aise en suspension, commence par <Link className="textLink" href="/bibliotheque/suspension-barre">apprendre à tenir à la barre</Link>. Si tu chutes immédiatement malgré une installation propre, <Link className="textLink" href="/bibliotheque/traction-assistee">une traction assistée</Link> peut être une étape plus facile à contrôler aujourd'hui.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Comment faire une traction négative ?</h2>
        <ol className="contentList numberedList">
          <li>Place un support stable sous la barre et prends une prise confortable.</li>
          <li>Aide-toi des jambes pour atteindre la position haute sans transformer l'installation en saut maximal.</li>
          <li>Organise ton corps avant de quitter le support : prise ferme, tronc calme, épaules contrôlées.</li>
          <li>Retire progressivement l'aide des pieds puis laisse ton corps descendre en résistant à la gravité.</li>
          <li>Continue aussi loin que tu peux garder une descente volontaire et régulière.</li>
          <li>Repose les pieds sur le support, réinstalle-toi et recommence proprement.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Tu freines au lieu de tomber</h2>
          <ul>
            <li>Le dos et les bras produisent un effort net pendant la descente.</li>
            <li>Tu peux influencer la vitesse au lieu de subir immédiatement la gravité.</li>
            <li>Le tronc aide à garder le corps calme sous la barre.</li>
            <li>Le contrôle peut varier selon l'endroit de la descente : c'est une information utile sur ton niveau actuel.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Erreurs fréquentes</div>
          <h2>Ne transforme pas la négative en test de souffrance</h2>
          <ul>
            <li>Sauter jusqu'en haut alors qu'un support permettrait une installation beaucoup plus propre.</li>
            <li>Se laisser tomber puis considérer la répétition comme terminée.</li>
            <li>Multiplier les descentes lorsque le contrôle a déjà disparu.</li>
            <li>Forcer artificiellement une descente extrêmement lente au prix d'une position qui se désorganise.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Combien de secondes ?</div>
        <h2>Il n'existe pas de chrono magique</h2>
        <p>Tu trouveras souvent des objectifs de quelques secondes dans les programmes. Ils peuvent servir de repère pratique, mais Calis ne transforme pas une durée précise en frontière universelle. Ce qui compte ici est de voir évoluer une capacité : au début tu chutes peut-être rapidement ; ensuite tu peux ralentir davantage, garder le contrôle sur une plus grande partie de l'amplitude et reproduire cette qualité.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de passage</div>
        <h2>Quand tester une vraie traction ?</h2>
        <p>Teste ponctuellement une traction libre lorsque tes négatives deviennent réellement contrôlées et que les autres étapes du parcours — suspension, tirage horizontal et assistance — ont elles aussi progressé. Ne transforme pas chaque séance en test maximal : une tentative te renseigne, l'entraînement construit la capacité.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Et si ça bloque encore ?</div>
        <h2>Le problème n'est pas forcément la négative</h2>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-assistee"><strong>Je tombe trop vite</strong><span>Revenir à la traction assistée →</span></Link>
          <Link className="nextCard" href="/bibliotheque/rowing-incline"><strong>Mon tirage manque encore de force</strong><span>Renforcer avec le rowing incliné →</span></Link>
          <Link className="nextCard" href="/bibliotheque/premiere-traction"><strong>Je veux voir tout le chemin</strong><span>Parcours première traction →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Prochaine étape</div>
        <h2>Passer de la descente à la traction complète</h2>
        <p>Quand tu peux contrôler la descente avec suffisamment de marge, retourne régulièrement vers le mouvement complet. La prochaine ressource t'aide à relier les étapes plutôt qu'à attendre un seuil arbitraire.</p>
        <Link className="button primary" href="/bibliotheque/premiere-traction">Construire ma première traction →</Link>
      </section>

      <Link className="textLink" href="/tractions">← Voir tout le parcours traction</Link>
    </article>
  );
}
