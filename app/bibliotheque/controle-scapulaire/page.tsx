import type { Metadata } from "next";
import Link from "next/link";
import { LearningIllustration } from "@/components/learning-illustration";

export const metadata: Metadata = {
  title: "Contrôle scapulaire en suspension",
  description: "Apprendre à initier le tirage avec les épaules et les omoplates tout en gardant les bras tendus et le corps calme.",
  alternates: { canonical: "/bibliotheque/controle-scapulaire/" },
};

export default function ScapularControlPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Exercice · traction</div>
      <h1>Contrôle scapulaire en suspension</h1>
      <p className="lead">Avant de chercher à plier les bras, apprends à produire un petit mouvement depuis les épaules. L'objectif n'est pas de monter haut : c'est de sentir que tu peux organiser le début du tirage sans élan.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Contrôler le début du tirage</strong></div>
        <div><span>Capacité</span><strong>Tirer</strong></div>
        <div><span>Matériel</span><strong>Une barre stable</strong></div>
      </div>

      <LearningIllustration
        src="/illustrations/calis/tractions/controle-scapulaire.svg"
        alt="Deux suspensions à la barre : position relâchée contrôlée puis position active, avec les bras tendus dans les deux cas."
        label="Deux positions, un petit mouvement"
        caption="Compare surtout les épaules et la hauteur du corps. Les coudes restent tendus et les jambes ne créent pas d'élan."
        variant="comparison"
      />

      <section className="articleSection">
        <div className="eyebrow">Test de départ</div>
        <h2>Peux-tu bouger sans faire une demi-traction ?</h2>
        <p>Pars d'une suspension que tu contrôles. Sans balancer les jambes et sans plier volontairement les coudes, essaie de modifier légèrement la position de tes épaules. Si le mouvement disparaît dès que les bras restent tendus, travaille d'abord cette petite amplitude.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Les repères à garder</h2>
        <ol className="contentList numberedList">
          <li>Installe une prise confortable et une suspension calme.</li>
          <li>Garde les coudes tendus pendant tout le mouvement.</li>
          <li>Depuis la position basse, éloigne progressivement les épaules des oreilles : le corps ne monte que légèrement.</li>
          <li>Garde le tronc et les jambes suffisamment calmes pour que le mouvement vienne réellement de la ceinture scapulaire.</li>
          <li>Reviens lentement vers la position de départ au lieu de te laisser tomber.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Un mouvement petit mais volontaire</h2>
          <ul>
            <li>Le haut du dos et la zone autour des omoplates participent.</li>
            <li>Le corps se déplace légèrement alors que les bras restent longs.</li>
            <li>Tu peux ralentir aussi bien la montée que le retour.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Ce que tu ne devrais pas ignorer</div>
          <h2>Réduis la difficulté si nécessaire</h2>
          <ul>
            <li>Les coudes se plient à chaque répétition pour créer la montée.</li>
            <li>Les jambes se balancent pour lancer le mouvement.</li>
            <li>Tu cherches une grande amplitude en forçant les épaules.</li>
            <li>Une douleur vive apparaît à l'épaule, au coude ou au poignet.</li>
          </ul>
          <p>Une douleur vive ou persistante n'est pas un critère de progression. Arrête ou adapte l'exercice et demande un avis professionnel si nécessaire.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de passage</div>
        <h2>Quand continuer ?</h2>
        <p>Il n'y a pas de nombre magique à atteindre. Passe à la suite lorsque tu sais répéter ce petit mouvement volontairement, bras tendus, sans élan et sans transformer chaque répétition en tentative maximale.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape suivante</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/rowing-incline"><strong>Construire le tirage</strong><span>Rowing incliné →</span></Link>
          <Link className="nextCard" href="/bibliotheque/premiere-traction"><strong>Revoir le chemin complet</strong><span>Première traction →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/tractions">← Retour au parcours traction</Link>
    </article>
  );
}
