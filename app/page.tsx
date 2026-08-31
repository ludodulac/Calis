import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const goals = [
  ["Faire ma première traction", "Je veux réussir à me hisser au-dessus d'une barre.", "/tractions"],
  ["Faire ma première pompe", "Même si le sol est encore trop difficile aujourd'hui.", "/pompes"],
  ["Tenir sur les mains", "Apprendre progressivement sans commencer par me jeter à l'envers.", "/handstand"],
  ["Réussir un muscle-up", "Comprendre si je dois travailler le tirage, le passage ou la poussée.", "/muscle-up"],
  ["Renforcer mes jambes", "Commencer simplement avec le squat au poids du corps.", "/bibliotheque/squat-poids-du-corps"],
  ["Bouger plus facilement", "Travailler la mobilité qui me sert vraiment.", "/bibliotheque/mobilite-debutant"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div>
            <div className="eyebrow">Callisthénie · du tout premier exercice aux figures</div>
            <h1>Qu'est-ce que tu aimerais réussir avec ton corps ?</h1>
            <p className="lead">Choisis un objectif. Calis te montre par où commencer, quoi essayer maintenant et comment savoir quand tu peux passer à l'étape suivante.</p>
            <div className="actions">
              <Link className="button primary" href="/commencer">Je ne sais pas par où commencer</Link>
              <Link className="button secondary" href="#objectifs">Je choisis un objectif</Link>
            </div>
          </div>
          <aside className="manifesto pathExamplePanel">
            <span>Exemple de chemin</span>
            <strong>Tu veux réussir ta première traction.</strong>
            <div className="pathExample" aria-label="Exemple d'un chemin Calis vers une première traction">
              <div className="pathExampleStep"><small>Objectif</small><b>Première traction</b></div>
              <div className="pathExampleStep"><small>Aujourd'hui</small><b>Je tiens à la barre</b></div>
              <Link className="pathExampleStep" href="/bibliotheque/rowing-incline"><small>Maintenant</small><b>Rowing incliné</b></Link>
              <Link className="pathExampleStep" href="/bibliotheque/traction-assistee"><small>Ensuite</small><b>Traction assistée</b></Link>
            </div>
            <Link className="textLink" href="/tractions">Voir le chemin complet →</Link>
          </aside>
        </div>
      </section>

      <section className="section sectionSoft" id="objectifs">
        <div className="shell">
          <div className="sectionHeading">
            <div className="eyebrow">Choisis ce qui te donne envie</div>
            <h2>Je veux…</h2>
            <p>Tu n'as pas besoin de connaître le vocabulaire de la callisthénie. Clique simplement sur ce que tu aimerais apprendre.</p>
          </div>
          <div className="journeyGrid">
            {goals.map(([title, text, href]) => (
              <Link className="journeyCard" href={href} key={title}>
                <strong>{title}</strong><p>{text}</p><b>Voir mon chemin →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Tu pars vraiment de zéro ?</div>
        <h2>C'est prévu.</h2>
        <p>Ne pas réussir une pompe ou une traction n'est pas un problème. Une bonne première étape doit être assez facile pour que tu puisses réellement l'essayer et apprendre quelque chose.</p>
        <div className="actions"><Link className="button primary" href="/commencer">Trouver mon premier exercice</Link></div>
      </section>

      <section className="section sectionSoft">
        <div className="shell split">
          <div>
            <div className="eyebrow">Tu sais déjà ce que tu cherches ?</div>
            <h2>La bibliothèque rassemble toutes les fiches.</h2>
            <p>Exercices, technique, progressions et matériel. Elle sert à explorer ; si tu débutes, les parcours ci-dessus sont plus simples.</p>
          </div>
          <Link className="button secondary" href="/bibliotheque">Explorer la bibliothèque</Link>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Santé et sécurité</div>
        <h2>Calis t'aide à apprendre, pas à poser un diagnostic.</h2>
        <p>Les informations du site concernent l'apprentissage et l'entraînement général. Une douleur vive, inhabituelle ou persistante mérite d'être prise au sérieux ; Calis ne remplace pas un professionnel de santé qualifié.</p>
      </section>
    </>
  );
}
