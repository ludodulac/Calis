import type { Metadata } from "next";
import Link from "next/link";
import { LearningIllustration } from "@/components/learning-illustration";

export const metadata: Metadata = {
  title: "Comment faire une pompe : technique, amplitude et erreurs",
  description: "Apprends à faire une pompe contrôlée : position des mains, alignement, descente, amplitude, sensations, erreurs fréquentes et adaptations si le sol est trop difficile.",
  alternates: { canonical: "/bibliotheque/pompe-technique/" },
  openGraph: { title: "Comment faire une pompe propre ?", description: "Des repères simples pour construire une pompe contrôlée et reproductible sans imposer une forme unique à tous.", type: "article", url: "/bibliotheque/pompe-technique/" },
};

export default function PushUpTechniquePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Pompes · technique</div>
      <h1>Comment faire une pompe propre ? Construis une poussée que tu peux reproduire.</h1>
      <p className="lead">Une pompe utile n'a pas besoin de ressembler au millimètre à celle d'une autre personne. Cherche une position stable, une descente contrôlée, une amplitude que tu tolères et une remontée où poitrine et bassin restent suffisamment liés.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Une pompe contrôlée</strong></div>
        <div><span>Capacité</span><strong>Pousser</strong></div>
        <div><span>Si trop difficile</span><strong>Incliner le mouvement</strong></div>
      </div>

      <LearningIllustration
        src="/illustrations/calis/pompes/pompe-technique.svg"
        alt="Deux vues de côté d'une pompe : position haute bras tendus puis position plus basse bras fléchis, avec tête, poitrine, bassin et jambes qui restent organisés ensemble."
        label="Garde le corps lié pendant la descente"
        caption="Observe surtout la relation entre poitrine et bassin. La profondeur dessinée n'est pas une amplitude obligatoire : descends seulement aussi loin que tu peux garder une répétition contrôlée et tolérable."
        variant="comparison"
      />

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>À quoi ressemble une répétition utile pour progresser ?</h2>
        <p>Place tes mains dans une position confortable, organise ton corps avant de descendre, plie les bras en gardant le mouvement contrôlable puis repousse le support jusqu'à retrouver ta position de départ. Le repère principal est la répétabilité : ton corps ne devrait pas devoir inventer une nouvelle stratégie à chaque répétition.</p>
        <p>Si tu peux descendre mais pas remonter proprement, le problème n'est pas forcément ta technique : la version au sol peut simplement être trop difficile. Utilise alors les <Link className="textLink" href="/bibliotheque/pompes-inclinees">pompes inclinées pour régler la difficulté</Link>.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Les quatre moments</div>
        <h2>Lis la pompe comme une poussée complète.</h2>
        <ol className="contentList numberedList">
          <li><strong>Installation :</strong> mains stables, bras tendus sans verrouillage agressif, corps organisé avant de commencer.</li>
          <li><strong>Descente :</strong> plie les coudes progressivement et laisse épaules et omoplates accompagner le mouvement plutôt que de chercher à les figer.</li>
          <li><strong>Position basse :</strong> arrête l'amplitude là où tu peux encore conserver le contrôle et une position tolérable pour tes épaules et poignets.</li>
          <li><strong>Remontée :</strong> pousse le sol ou le support en gardant poitrine et bassin suffisamment synchronisés jusqu'au retour en position haute.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Une poussée répartie et un corps qui reste lié.</h2>
          <ul>
            <li>Poitrine, triceps et épaules participent à l'effort.</li>
            <li>Le tronc travaille pour éviter que bassin et poitrine deviennent deux mouvements séparés.</li>
            <li>Les mains restent stables sur le support.</li>
            <li>La difficulté est nette mais la trajectoire reste reconnaissable.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Ne gagne pas une répétition en perdant le mouvement.</h2>
          <ul>
            <li>Le bassin tombe ou remonte longtemps avant la poitrine.</li>
            <li>L'amplitude disparaît progressivement avec la fatigue.</li>
            <li>Les mains ou les coudes sont placés selon une règle qui te provoque une gêne.</li>
            <li>Une douleur vive ou persistante apparaît au poignet, au coude ou à l'épaule.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Mains, coudes et amplitude</div>
        <h2>Évite les règles universelles qui oublient ta morphologie.</h2>
        <p>Il n'existe pas une largeur de mains ou un angle de coudes à imposer au degré près à tout le monde. Ta morphologie, ta mobilité, ton support et ton objectif changent la position confortable. Pars d'une largeur proche de celle qui te permet naturellement de pousser, puis ajuste légèrement si nécessaire.</p>
        <p>Pour suivre tes progrès, garde ensuite des repères assez cohérents : même type de support, amplitude comparable et répétitions contrôlées. La cohérence permet de distinguer une vraie progression d'un simple changement de mouvement.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Si quelque chose bloque</div>
        <h2>Change la difficulté avant de forcer la répétition.</h2>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/pompes-inclinees"><strong>Le sol est trop difficile</strong><span>Remonter les mains sur un support →</span></Link>
          <Link className="nextCard" href="/bibliotheque/premiere-pompe"><strong>Je suis proche de ma première</strong><span>Suivre la progression complète →</span></Link>
          <Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Mes poignets limitent les appuis</strong><span>Explorer la préparation des poignets →</span></Link>
          <Link className="nextCard" href="/dips"><strong>Ma poussée est déjà solide</strong><span>Découvrir la branche dips →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Une répétition stable vaut davantage qu'un chiffre isolé.</h2>
        <p>Avant d'augmenter fortement le nombre de répétitions ou de choisir une variante plus difficile, vérifie que plusieurs répétitions gardent des repères comparables. Si la forme se désorganise très vite, ajuste le volume ou reviens temporairement à une version plus facile.</p>
      </section>

      <Link className="textLink" href="/pompes">← Revenir au parcours complet des pompes</Link>
    </article>
  );
}
