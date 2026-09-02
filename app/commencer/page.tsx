import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis simplement ce que tu arrives ou n'arrives pas encore à faire et trouve une première étape adaptée.",
  alternates: { canonical: "/commencer/" },
};

const choices = [
  ["Pas encore une traction", "Construire ma première traction", "/tractions", "/aujourdhui?goal=traction"],
  ["Pas encore une pompe", "Construire ma première pompe", "/pompes", "/aujourdhui?goal=pompes"],
  ["Renforcer mes jambes", "Construire une base solide", "/bibliotheque/squat-poids-du-corps", "/aujourdhui?goal=jambes"],
  ["Je ne sais pas", "Commencer par une base générale", "/bibliotheque/par-ou-commencer-calisthenie", "/aujourdhui?goal=general"],
] as const;

const explore = [
  ["Je me sens raide", "/bibliotheque/mobilite-debutant"],
  ["Tenir sur les mains", "/handstand"],
] as const;

export default function StartPage() {
  return (
    <div className="startScreen">
      <section className="startIntro shell narrow">
        <div className="eyebrow">Je débute</div>
        <h1>Qu'est-ce que tu veux construire en premier ?</h1>
        <p>Choisis une direction. Calis fera ensuite le point sur ton niveau réel avant de te donner la séance du jour.</p>
      </section>

      <section className="startChoices shell narrow" aria-label="Choisir mon premier objectif">
        <div className="startChoiceGrid startGoalGrid">
          {choices.map(([title, outcome, href, trainingHref], index) => (
            <article className="startGoalTile" key={title}>
              <Link className="startGoalMain" href={href}>
                <span className="startGoalIndex" aria-hidden="true">0{index + 1}</span>
                <strong>{title}</strong>
                <small>{outcome}</small>
                <b aria-hidden="true">→</b>
              </Link>
              <Link className="startGoalTraining" href={trainingHref}>Commencer ce parcours</Link>
            </article>
          ))}
        </div>

        <div className="startExplore" aria-label="Autres directions">
          <span>Explorer autrement</span>
          <div>
            {explore.map(([title, href]) => <Link href={href} key={title}>{title} <b aria-hidden="true">→</b></Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}
