import Link from "next/link";

const starts = [
  ["Je n'arrive pas encore à faire une pompe", "Commencer par une version adaptée à ta force actuelle.", "/bibliotheque/premiere-pompe"],
  ["Je n'arrive pas encore à faire une traction", "Construire prise, suspension et tirage étape par étape.", "/bibliotheque/premiere-traction"],
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

      <section className="section sectionSoft">
        <div className="shell narrow">
          <div className="sectionHeading">
            <div className="eyebrow">Choisir sans se comparer</div>
            <h2>Qu'est-ce qui te bloque aujourd'hui ?</h2>
          </div>
          <div className="choiceList">
            {starts.map(([label, description, href]) => (
              <Link className="choice startChoice" href={href} key={href}>
                <span><strong>{label}</strong><small>{description}</small></span><span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Ce qui compte au début</div>
        <h2>Comprendre avant d'accumuler.</h2>
        <div className="mistakeList">
          <div><strong>Apprendre quelques mouvements fondamentaux</strong><p>Pousser, tirer, tenir son corps et se déplacer avec contrôle donnent une base beaucoup plus utile qu'une longue liste d'exercices.</p></div>
          <div><strong>Choisir une difficulté répétable</strong><p>Une variante accessible n'est pas une version inférieure : c'est celle qui te permet réellement d'apprendre aujourd'hui.</p></div>
          <div><strong>Observer les sensations</strong><p>Apprends à distinguer effort musculaire, fatigue, perte de contrôle et douleur inhabituelle.</p></div>
          <div><strong>Progresser sans acheter inutilement</strong><p>Une grande partie des bases se construit avec très peu de matériel. L'équipement vient lorsqu'il répond à un besoin réel.</p></div>
        </div>
      </section>
    </>
  );
}
