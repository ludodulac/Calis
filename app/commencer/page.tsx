import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis simplement ce que tu arrives ou n'arrives pas encore à faire et trouve une première étape adaptée.",
  alternates: { canonical: "/commencer/" },
};

const choices = [
  ["Je n'arrive pas encore à faire une pompe", "On rend la pompe assez facile pour pouvoir vraiment l'apprendre.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe"],
  ["Je n'arrive pas encore à faire une traction", "On cherche ce qui manque avant de retenter la traction complète.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction"],
  ["Je veux renforcer mes jambes", "On commence par une façon simple et contrôlable de s'accroupir et se relever.", "/bibliotheque/squat-poids-du-corps"],
  ["Je me sens raide", "On cherche le mouvement que tu veux rendre plus facile au lieu de travailler la souplesse au hasard.", "/bibliotheque/mobilite-debutant"],
  ["Je veux apprendre à tenir sur les mains", "On commence par les appuis, la sécurité et le mur avant l'équilibre libre.", "/handstand"],
  ["Je ne sais vraiment pas quoi choisir", "Pas grave : commence par quelques bases simples et vois ce qui te plaît.", "/bibliotheque/par-ou-commencer-calisthenie"],
] as const;

export default function StartPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Débuter</div>
        <h1>Dis simplement où tu en es aujourd'hui.</h1>
        <p className="lead">Pas de test compliqué. Pas besoin de connaître les noms des exercices. Choisis la phrase qui te ressemble le plus.</p>
      </section>

      <section className="section sectionSoft">
        <div className="shell narrow">
          <div className="choiceList">
            {choices.map(([title, text, href]) => (
              <Link className="choice startChoice" href={href} key={title}>
                <span><strong>{title}</strong><small>{text}</small></span><span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Une seule règle à retenir</div>
        <h2>Si c'est trop difficile, on simplifie. Si c'est maîtrisé, on avance.</h2>
        <p>Le but n'est pas de réussir tout de suite l'exercice final. Le but est de trouver une étape que tu peux essayer proprement aujourd'hui, puis de rendre cette étape progressivement plus difficile.</p>
        <div className="actions"><Link className="button secondary" href="/#objectifs">Voir aussi ce que je pourrais apprendre</Link></div>
      </section>
    </>
  );
}
