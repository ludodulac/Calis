import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis ton point de départ : pousser, tirer, jambes, mobilité ou équilibre. Calis te guide vers une première étape réaliste.",
  alternates: { canonical: "/commencer/" },
};

const starts = [
  ["Je n'arrive pas encore à faire une pompe", "Commencer par une version adaptée à ta force actuelle.", "/bibliotheque/premiere-pompe"],
  ["Je n'arrive pas encore à faire une traction", "Construire prise, suspension et tirage étape par étape.", "/bibliotheque/premiere-traction"],
  ["Je veux renforcer mes jambes", "Apprendre d'abord un squat au poids du corps contrôlé et adapté à ta mobilité.", "/bibliotheque/squat-poids-du-corps"],
  ["Je manque de mobilité", "Explorer les amplitudes réellement utiles sans attendre d'être souple pour commencer.", "/bibliotheque/mobilite-debutant"],
  ["J'aimerais apprendre à tenir sur les mains", "Préparer les poignets, apprendre le mur puis construire l'équilibre.", "/bibliotheque/poignets-handstand"],
  ["Je ne sais pas quoi travailler en premier", "Faire le tri entre force, contrôle, mobilité et habitudes.", "/bibliotheque/par-ou-commencer-calisthenie"],
] as const;

export default function StartPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Je pars de zéro</div>
        <h1>Ton point de départ n'est pas ton niveau final.</h1>
        <p className="lead">Tu n'as pas besoin d'être sportif, souple ou déjà fort pour commencer. Choisis ce qui ressemble le plus à ta situation aujourd'hui ; Calis te donnera une prochaine étape réaliste.</p>
      </section>
      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Choisir sans se comparer</div><h2>Qu'est-ce qui te bloque ou t'attire aujourd'hui ?</h2></div><div className="choiceList">{starts.map(([label, description, href]) => <Link className="choice startChoice" href={href} key={href}><span><strong>{label}</strong><small>{description}</small></span><span>→</span></Link>)}</div></div></section>
      <section className="section shell narrow"><div className="eyebrow">Ce qui compte au début</div><h2>Construire un corps capable, pas collectionner les exercices.</h2><div className="mistakeList"><div><strong>Pousser et tirer</strong><p>Pompes, tirages et leurs régressions construisent deux grandes familles de force du haut du corps.</p></div><div><strong>Utiliser ses jambes</strong><p>S'accroupir, se relever et contrôler son poids sur les jambes font partie des bases au même titre que les tractions.</p></div><div><strong>Explorer ses amplitudes</strong><p>La mobilité se développe autour des mouvements que tu veux apprendre ; elle n'a pas besoin d'être parfaite avant de commencer.</p></div><div><strong>Choisir une difficulté répétable</strong><p>Une variante accessible n'est pas une version inférieure : c'est celle qui te permet réellement d'apprendre aujourd'hui.</p></div><div><strong>Observer les sensations</strong><p>Apprends à distinguer effort musculaire, fatigue, perte de contrôle et douleur inhabituelle.</p></div><div><strong>Progresser sans acheter inutilement</strong><p>Une grande partie des bases se construit avec très peu de matériel. L'équipement vient lorsqu'il répond à un besoin réel.</p></div></div></section>
    </>
  );
}
