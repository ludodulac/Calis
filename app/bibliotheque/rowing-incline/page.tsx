import type { Metadata } from "next";
import Link from "next/link";
import { LearningIllustration } from "@/components/learning-illustration";

export const metadata: Metadata = {
  title: "Rowing incliné au poids du corps",
  description: "Apprendre le tirage horizontal avec une difficulté réglable avant de progresser vers la traction assistée.",
  alternates: { canonical: "/bibliotheque/rowing-incline/" },
};

export default function InclinedRowPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Exercice · traction</div>
      <h1>Rowing incliné au poids du corps</h1>
      <p className="lead">Le rowing te permet d'apprendre à tirer ton corps sans devoir déplacer immédiatement tout ton poids sous une barre haute. Son grand intérêt est simple : tu peux régler la difficulté avec ton angle et construire un tirage que tu contrôles vraiment.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Construire un tirage horizontal propre</strong></div>
        <div><span>Capacité</span><strong>Tirer</strong></div>
        <div><span>Matériel</span><strong>Barre basse stable ou anneaux</strong></div>
      </div>

      <LearningIllustration
        src="/illustrations/calis/tractions/rowing-incline.svg"
        alt="Deux positions d'un rowing incliné : départ bras tendus puis poitrine rapprochée de la barre, avec le corps aligné et les pieds au sol."
        label="Départ et tirage"
        caption="Garde une ligne corporelle stable et rapproche la poitrine du support sans donner un coup de bassin. Plus ton corps approche de l'horizontale, plus la variante devient généralement exigeante."
        variant="comparison"
      />

      <section className="articleSection">
        <div className="eyebrow">Pourquoi cette étape ?</div>
        <h2>Apprendre à tirer avant la traction complète</h2>
        <p>Le rowing inversé sollicite fortement plusieurs muscles du tirage et demande aussi au tronc de stabiliser le corps. Pour Calis, il sert surtout de laboratoire réglable : trouve d'abord un angle où tu peux comprendre le geste, puis rends-le progressivement plus exigeant.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Test de départ</div>
        <h2>Trouve ton angle utile</h2>
        <p>Place-toi sous un support parfaitement stable, pieds au sol. Commence assez redressé pour pouvoir tendre les bras, organiser le tronc puis rapprocher la poitrine du support sans que le bassin parte en premier. Si tu dois te tortiller ou raccourcir fortement le mouvement, rends l'angle plus facile.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Les repères à garder</h2>
        <ol className="contentList numberedList">
          <li>Choisis une prise confortable et vérifie que le support ne peut ni glisser ni basculer.</li>
          <li>Organise tête, tronc, bassin et jambes comme un ensemble plutôt que de laisser les hanches s'effondrer.</li>
          <li>Depuis les bras tendus, tire en rapprochant progressivement la poitrine du support.</li>
          <li>Laisse les coudes se plier naturellement sans hausser volontairement les épaules vers les oreilles.</li>
          <li>Redescends avec contrôle jusqu'à retrouver les bras longs.</li>
          <li>Pour progresser, modifie progressivement l'inclinaison au lieu de sacrifier l'amplitude ou l'alignement.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Un tirage partagé entre dos et bras</h2>
          <ul>
            <li>Le haut du dos et les bras participent ensemble au mouvement.</li>
            <li>Le tronc travaille pour conserver la forme du corps pendant le tirage.</li>
            <li>La montée et la descente restent contrôlables à chaque répétition.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Ce que tu ne devrais pas ignorer</div>
          <h2>Rends l'exercice plus facile si nécessaire</h2>
          <ul>
            <li>Le bassin donne systématiquement l'impulsion.</li>
            <li>La tête part vers la barre alors que la poitrine reste loin derrière.</li>
            <li>L'amplitude diminue rapidement parce que l'angle est trop difficile.</li>
            <li>Une douleur vive apparaît à l'épaule, au coude, au poignet ou au dos.</li>
          </ul>
          <p>Une douleur vive ou persistante n'est pas un objectif d'entraînement. Adapte ou arrête l'exercice et demande un avis professionnel si nécessaire.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Régler la difficulté</div>
        <h2>Fais évoluer l'angle, pas seulement le nombre</h2>
        <p>Il n'existe pas un angle universel à atteindre. Garde d'abord une variante reproductible. Lorsque tu contrôles facilement le départ, le rapprochement de la poitrine et le retour, tu peux placer progressivement le corps dans une position plus horizontale ou utiliser des anneaux pour ajuster finement la hauteur.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de passage</div>
        <h2>Quand aller vers la traction assistée ?</h2>
        <p>Passe à l'étape suivante lorsque ton rowing reste propre sur un angle devenu réellement exigeant : corps stable, amplitude cohérente, pas d'élan volontaire et descente contrôlée. Ce n'est pas un test magique garantissant une traction ; c'est le signe que ton tirage horizontal est assez construit pour pratiquer davantage le geste vertical.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape suivante</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-assistee"><strong>Passer au tirage vertical</strong><span>Traction assistée →</span></Link>
          <Link className="nextCard" href="/bibliotheque/premiere-traction"><strong>Revoir le chemin complet</strong><span>Première traction →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/tractions">← Retour au parcours traction</Link>
    </article>
  );
}
