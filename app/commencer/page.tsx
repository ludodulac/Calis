import Link from "next/link";

const starts = [
  ["Je n'arrive pas encore à faire une pompe", "/bibliotheque/premiere-pompe"],
  ["Je n'arrive pas encore à faire une traction", "/bibliotheque/premiere-traction"],
  ["Je ne sais pas quoi travailler en premier", "/bibliotheque/par-ou-commencer-calisthenie"],
] as const;

export default function StartPage() {
  return (
    <section className="section shell narrow">
      <div className="eyebrow">Je pars de zéro</div>
      <h1>Ton point de départ n'est pas ton niveau final.</h1>
      <p className="lead">Choisis simplement ce qui correspond le mieux à ta situation actuelle. Calis te montrera ensuite une prochaine étape réaliste.</p>
      <div className="choiceList">
        {starts.map(([label, href]) => <Link className="choice" href={href} key={href}>{label}<span>→</span></Link>)}
      </div>
    </section>
  );
}
