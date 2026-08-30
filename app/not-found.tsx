import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero shell narrow">
      <div className="eyebrow">Page introuvable</div>
      <h1>Cette page n'existe pas, mais ton prochain exercice est toujours là.</h1>
      <p className="lead">
        Le lien est peut-être ancien ou incomplet. Repars simplement de ton niveau actuel, d'un objectif ou de la bibliothèque.
      </p>
      <div className="actions">
        <Link className="button primary" href="/commencer">Je débute</Link>
        <Link className="button secondary" href="/#objectifs">Choisir un objectif</Link>
        <Link className="button secondary" href="/bibliotheque">Explorer la bibliothèque</Link>
      </div>
    </section>
  );
}
