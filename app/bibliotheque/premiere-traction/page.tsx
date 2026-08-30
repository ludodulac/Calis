import type { Metadata } from "next";
import Link from "next/link";
import { LearningIllustration } from "../../../components/learning-illustration";

export const metadata: Metadata = {
  title: "Réussir sa première traction",
  description: "Un parcours progressif pour identifier ton point de départ, construire les capacités utiles et réussir une première traction stricte.",
  alternates: { canonical: "/bibliotheque/premiere-traction/" },
};

const steps = [
  ["1", "Teste ta suspension", "Accroche-toi à une barre avec une prise confortable."],
  ["2", "Contrôle tes omoplates", "Apprends à initier le mouvement sans tout demander aux bras."],
  ["3", "Construis ton tirage horizontal", "Le rowing permet d'ajuster facilement la difficulté."],
  ["4", "Utilise l'assistance", "Aide-toi juste assez pour pratiquer le mouvement complet."],
  ["5", "Travaille la descente", "Les négatives développent le contrôle sur toute l'amplitude."],
  ["6", "Tente une répétition stricte", "Une répétition propre vaut mieux que plusieurs répétitions dégradées."],
] as const;

const startingPoints = [
  ["Je ne tiens presque pas à la barre", "Commence par la suspension et construis une prise calme et reproductible.", "/bibliotheque/suspension-barre"],
  ["Je tiens à la barre mais je ne monte pas", "Travaille d'abord le contrôle scapulaire puis le tirage horizontal.", "/bibliotheque/controle-scapulaire"],
  ["Je monte un peu puis je bloque", "Les négatives et une assistance modérée peuvent renforcer la zone qui te limite.", "/bibliotheque/traction-negative"],
] as const;

const usefulFeelings = [
  "Une prise ferme sans tension excessive dans tout le haut du corps.",
  "La participation du haut du dos pendant le tirage.",
  "Un mouvement qui reste contrôlé à la montée comme à la descente.",
  "Une difficulté musculaire progressive sans douleur aiguë.",
];

const cautionSignals = [
  "Douleur vive à l'épaule, au coude ou au poignet.",
  "Chute incontrôlée pendant une négative ou en quittant la barre.",
  "Douleur qui augmente séance après séance.",
  "Balancement permanent des jambes qui remplace le contrôle du tirage.",
];

const commonErrors = [
  ["Tester sa traction à chaque séance", "Un test maximal répété donne peu de volume utile et transforme l'apprentissage en examen permanent."],
  ["Choisir une assistance trop forte", "L'aide doit rendre le mouvement praticable, pas effacer presque tout l'effort."],
  ["Négliger la descente", "Le contrôle du retour fait partie de la compétence et constitue une étape de progression à part entière."],
  ["Ajouter du volume quand la technique se dégrade", "Plus de répétitions n'aident pas si le mouvement devient de moins en moins reproductible."],
] as const;

export default function FirstPullUpPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Progression · partir de zéro</div>
      <h1>Réussir sa première traction</h1>
      <p className="lead">Identifie ce qui te manque aujourd'hui — prise, suspension, contrôle des épaules ou force de tirage — puis construis ces capacités une par une.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>1 traction stricte</strong></div>
        <div><span>Matériel</span><strong>Une barre stable</strong></div>
        <div><span>Niveau</span><strong>Départ zéro</strong></div>
      </div>

      <LearningIllustration
        label="Suspension calme"
        caption="Première idée à observer : rester sous la barre avec les bras tendus et un corps calme. La suspension sert ici de point de départ, pas de test de bravoure."
        src="/illustrations/calis/tractions/suspension-barre.svg"
        alt="Personne suspendue à une barre, bras tendus, corps vertical et jambes calmes."
      />

      <section className="articleSection">
        <div className="eyebrow">Auto-test</div>
        <h2>Commence à l'étape qui correspond à aujourd'hui</h2>
        <div className="nextGrid compactNextGrid">
          {startingPoints.map(([title, text, href]) => (
            <Link className="nextCard" href={href} key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
              <span>Voir cette étape →</span>
            </Link>
          ))}
        </div>
        <p>Ces repères servent à choisir une porte d'entrée, pas à te coller une étiquette. Si plusieurs descriptions te correspondent, commence par l'étape la plus facile à pratiquer proprement.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Progression</div>
        <h2>La progression en 6 étapes</h2>
        <ol className="progression detailedProgression">
          {steps.map(([number, title, text]) => (
            <li className="progressionStep" key={number}>
              <div className="stepNumber">{number.padStart(2, "0")}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Des signaux utiles</h2>
          <ul>{usefulFeelings.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Ce que tu ne devrais pas ignorer</div>
          <h2>Quand réduire ou arrêter</h2>
          <ul>{cautionSignals.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Une douleur vive ou persistante n'est pas un critère de progression. Adapte ou arrête l'exercice et demande un avis professionnel si nécessaire.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Erreurs fréquentes</div>
        <h2>Ce qui ralentit souvent la première traction</h2>
        <div className="mistakeList">
          {commonErrors.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Pas de nombre magique universel</h2>
        <p>Avance lorsque l'étape actuelle devient reproductible, contrôlée et ne demande pas un effort maximal à chaque répétition. Le bon moment dépend de ton point de départ, de ta technique et de la difficulté de la variante utilisée.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Matériel</div>
        <h2>Achète seulement ce qui débloque réellement l'étape</h2>
        <div className="infoPanel">
          <p><strong>Nécessaire :</strong> une barre stable et adaptée à la suspension.</p>
          <p><strong>Facultatif :</strong> un élastique peut aider à pratiquer le mouvement complet avec assistance.</p>
          <p><strong>Principe :</strong> ne pas acheter une solution à un problème que tu peux déjà entraîner avec ce que tu as.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Suite logique</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-technique"><strong>Technique de traction</strong><span>Affiner le mouvement →</span></Link>
          <Link className="nextCard" href="/bibliotheque/10-tractions"><strong>De 1 à 10 tractions</strong><span>Construire le volume →</span></Link>
          <Link className="nextCard" href="/tractions"><strong>Parcours traction</strong><span>Revoir tout le graphe →</span></Link>
        </div>
      </section>
    </article>
  );
}
