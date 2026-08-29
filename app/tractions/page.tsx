import Link from "next/link";
import { pullUpProgression } from "@/lib/content/v1";

export default function PullUpsPage() {
  return (
    <>
      <section className="hero shell">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">Hub traction · tirer</div>
            <h1>Construire une traction, pas juste tenter d'en faire une.</h1>
            <p className="lead">De la première suspension aux tractions explosives ou lestées, avance en comprenant quelle capacité tu développes à chaque étape.</p>
            <div className="actions">
              <Link className="button primary" href="/bibliotheque/premiere-traction">Je pars de zéro</Link>
              <Link className="button secondary" href="/bibliotheque/traction-technique">Améliorer ma technique</Link>
            </div>
          </div>
          <div className="manifesto">
            <span>Principe Calis</span>
            <strong>Une étape n'est pas une barrière.</strong>
            <p>Les critères servent à identifier ce qui mérite d'être travaillé ensuite, pas à décider qui a le droit de progresser.</p>
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading wide">
            <div className="eyebrow">Choisis ton point d'entrée</div>
            <h2>Tu n'as pas besoin de commencer au même endroit que tout le monde.</h2>
          </div>
          <div className="cardGrid">
            <Link className="plainCard" href="/bibliotheque/suspension-barre"><h3>Je ne tiens pas encore bien à la barre</h3><p>Commence par la prise, la suspension et le contrôle des épaules.</p><span className="textLink">Commencer →</span></Link>
            <Link className="plainCard" href="/bibliotheque/traction-assistee"><h3>Je tiens, mais je ne monte pas</h3><p>Construis le tirage avec rowing, assistance et négatives.</p><span className="textLink">Construire ma force →</span></Link>
            <Link className="plainCard" href="/bibliotheque/traction-technique"><h3>Je fais déjà quelques tractions</h3><p>Travaille amplitude, trajectoire et répétabilité.</p><span className="textLink">Affiner ma technique →</span></Link>
            <Link className="plainCard" href="/bibliotheque/10-tractions"><h3>Je veux devenir plus solide</h3><p>Passe d'une répétition isolée à un vrai socle de volume.</p><span className="textLink">Construire mon volume →</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading wide">
          <div className="eyebrow">Parcours fondamental</div>
          <h2>De zéro à dix tractions contrôlées.</h2>
          <p>Chaque fiche répond à une difficulté précise et te conduit vers la suivante.</p>
        </div>
        <ol className="progression">
          {pullUpProgression.map((step, index) => (
            <li key={step.id} className="progressionStep">
              <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{step.label}</h2>
                <p>{step.criterion}</p>
                {step.resourceSlug && <Link className="textLink" href={`/bibliotheque/${step.resourceSlug}`}>Ouvrir la fiche →</Link>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section sectionSoft">
        <div className="shell split">
          <div className="sectionHeading">
            <div className="eyebrow">Après le socle</div>
            <h2>La traction devient ensuite un carrefour.</h2>
            <p>Quand ton tirage est solide, tu peux chercher davantage de hauteur, de force ou préparer des figures plus complexes.</p>
          </div>
          <div className="choiceList">
            <Link className="choice" href="/bibliotheque/traction-explosive"><span>Traction explosive</span><span>→</span></Link>
            <Link className="choice" href="/bibliotheque/tractions-lestees"><span>Tractions lestées</span><span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
