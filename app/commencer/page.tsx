import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis simplement ce que tu arrives ou n'arrives pas encore à faire et trouve une première étape adaptée.",
  alternates: { canonical: "/commencer/" },
};

const choices = [
  ["Pas encore une pompe", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe"],
  ["Pas encore une traction", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction"],
  ["Renforcer mes jambes", "/bibliotheque/squat-poids-du-corps"],
  ["Je me sens raide", "/bibliotheque/mobilite-debutant"],
  ["Tenir sur les mains", "/handstand"],
  ["Je ne sais pas", "/bibliotheque/par-ou-commencer-calisthenie"],
] as const;

export default function StartPage() {
  return (
    <div className="startScreen">
      <section className="startIntro shell narrow">
        <div className="eyebrow">Je débute</div>
        <h1>Où tu en es ?</h1>
      </section>

      <section className="startChoices shell narrow" aria-label="Choisir ma situation actuelle">
        <div className="startChoiceGrid">
          {choices.map(([title, href]) => (
            <Link className="startTile" href={href} key={title}>
              <strong>{title}</strong>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
