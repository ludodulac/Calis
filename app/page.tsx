import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pillars = [
  ["Apprendre", "Fondamentaux, exercices, figures et mobilité."],
  ["Progresser", "Des étapes claires plutôt qu'une liste d'exercices isolés."],
  ["Comprendre", "Technique, sensations, biomécanique et principes d'entraînement."],
  ["S'équiper", "Du matériel seulement lorsqu'il apporte une vraie utilité."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div>
            <div className="eyebrow">Bibliothèque vivante de la callisthénie</div>
            <h1>Découvre ce dont ton corps est capable.</h1>
            <p className="lead">Apprends les mouvements, comprends ce que tu fais et avance par étapes adaptées à ton niveau.</p>
            <div className="actions">
              <Link className="button primary" href="/commencer">Je pars de zéro</Link>
              <Link className="button secondary" href="/bibliotheque">Explorer la bibliothèque</Link>
            </div>
          </div>
          <aside className="manifesto">
            <span>Principe Calis</span>
            <strong>La capacité avant l'apparence.</strong>
            <p>Pas besoin d'être déjà fort pour commencer. Le point de départ est une information, pas un jugement.</p>
          </aside>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading">
          <div className="eyebrow">Un système, pas un blog</div>
          <h2>Comprendre où tu es et ce qui vient ensuite.</h2>
        </div>
        <div className="cardGrid">
          {pillars.map(([title, text]) => (
            <article className="plainCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell split">
          <div>
            <div className="eyebrow">Premier parcours</div>
            <h2>Ta première traction, étape par étape.</h2>
            <p>Suspension, contrôle scapulaire, rowing, assistance, négatives puis première répétition stricte : le parcours rend visible la logique de progression.</p>
          </div>
          <Link className="button primary" href="/tractions">Voir le parcours traction</Link>
        </div>
      </section>
    </>
  );
}
