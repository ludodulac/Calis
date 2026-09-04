import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis ce que tu veux réussir, ou laisse Calis trouver ton point de départ.",
  alternates: { canonical: "/commencer/" },
};

const goals = [
  ["Réussir ma première traction", "On part de ce que tu sais déjà faire à la barre.", "/aujourdhui?goal=traction", "/tractions"],
  ["Réussir de vraies pompes", "On trouve une poussée que tu peux contrôler aujourd'hui.", "/aujourdhui?goal=pompes", "/pompes"],
  ["Renforcer mes jambes", "On construit une base simple avec ce que tu peux faire maintenant.", "/aujourdhui?goal=jambes", "/bibliotheque/squat-poids-du-corps"],
] as const;

const explore = [
  ["Je me sens raide", "/bibliotheque/mobilite-debutant"],
  ["Je veux tenir sur les mains", "/handstand"],
] as const;

export default function StartPage() {
  return (
    <div className="startScreen">
      <section className="startIntro shell narrow">
        <div className="eyebrow">Je débute</div>
        <h1>Qu'est-ce que tu aimerais réussir ?</h1>
        <p>Choisis une envie. Calis regarde ensuite où tu en es et te montre quoi faire maintenant.</p>
      </section>

      <section className="startChoices shell narrow" aria-label="Choisir ce que je veux réussir">
        <div className="startChoiceGrid startGoalGrid">
          {goals.map(([title, outcome, trainingHref, learnHref], index) => (
            <article className="startGoalTile" key={title}>
              <Link className="startGoalMain" href={trainingHref}>
                <span className="startGoalIndex" aria-hidden="true">0{index + 1}</span>
                <strong>{title}</strong>
                <small>{outcome}</small>
                <b aria-hidden="true">→</b>
              </Link>
              <Link className="startGoalTraining" href={learnHref}>Voir le chemin</Link>
            </article>
          ))}
        </div>

        <div className="startExplore" aria-label="Si je ne sais pas encore">
          <span>Tu ne sais pas encore ?</span>
          <div>
            <Link href="/aujourdhui?goal=general">Fais mon point de départ <b aria-hidden="true">→</b></Link>
            <Link href="/bibliotheque/par-ou-commencer-calisthenie">Explique-moi simplement <b aria-hidden="true">→</b></Link>
          </div>
        </div>

        <div className="startExplore" aria-label="Explorer autrement">
          <span>Une autre envie</span>
          <div>
            {explore.map(([title, href]) => <Link href={href} key={title}>{title} <b aria-hidden="true">→</b></Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}
