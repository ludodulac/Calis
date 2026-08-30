import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const desires = [
  ["Je veux me sentir plus fort", "Construire des capacités concrètes avec mon propre corps.", "/commencer"],
  ["Je veux réussir ma première traction", "Passer de la suspension à une vraie répétition, étape par étape.", "/tractions"],
  ["Je veux enfin faire de vraies pompes", "Trouver la bonne difficulté aujourd'hui puis descendre progressivement jusqu'au sol.", "/pompes"],
  ["Je veux tenir sur les mains", "Transformer une figure impressionnante en petites compétences que je peux apprendre.", "/handstand"],
  ["Je veux bouger plus librement", "Identifier ce qui me limite vraiment et travailler une mobilité utile.", "/bibliotheque/mobilite-debutant"],
  ["Je ne sais même pas par où commencer", "Me situer sans jugement et découvrir une première action faisable maintenant.", "/commencer"],
] as const;

const realities = [
  ["Je me sens trop faible pour les exercices débutants", "Le niveau zéro n'est pas une pompe ou une traction complète. Calis cherche une régression réellement accessible."],
  ["Je n'ai presque pas de matériel", "On commence avec ton corps et ce qui est réellement disponible. Le matériel n'arrive que lorsqu'il résout un besoin."],
  ["J'ai peur de mal faire", "Technique, sensations, erreurs et critères de progression servent à comprendre ce que tu essaies au lieu de copier un mouvement."],
  ["Je progresse lentement et ça me démotive", "Une hauteur de pompe plus basse, une suspension plus calme ou un meilleur contrôle comptent avant la réussite finale."],
];

const pillars = [
  ["Avoir envie", "Pars de ce que tu veux vraiment réussir ou ressentir, même si tu ne connais aucun nom d'exercice."],
  ["Savoir quoi faire", "Calis traduit ton objectif en une prochaine étape assez simple pour être essayée aujourd'hui."],
  ["Sentir que tu progresses", "Technique, sensations et critères concrets permettent de reconnaître les progrès avant même la figure finale."],
  ["Débloquer la suite", "Chaque capacité acquise ouvre naturellement vers une nouvelle possibilité."],
];

const foundations = [
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
            <div className="eyebrow">Découvrir · essayer · progresser</div>
            <h1>Et si ton corps savait faire bien plus que tu ne l'imagines ?</h1>
            <p className="lead">Une traction. Un handstand. Des pompes propres. Un corps plus fort, plus mobile, plus capable. Tu n'as pas besoin de savoir comment y arriver : pars de ce qui te donne envie, Calis construit le chemin.</p>
            <div className="actions">
              <Link className="button primary" href="/commencer">Découvrir mon point de départ</Link>
              <Link className="button secondary" href="/bibliotheque">Voir tout ce que je peux apprendre</Link>
            </div>
          </div>
          <aside className="manifesto">
            <span>Principe Calis</span>
            <strong>Ce qui paraît impossible devient une suite de petites capacités.</strong>
            <p>Tu n'as pas besoin d'être déjà sportif. Ton niveau actuel sert seulement à choisir la bonne première étape.</p>
            <p><strong>La capacité avant l'apparence.</strong></p>
          </aside>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading">
            <div className="eyebrow">Qu'est-ce qui te donne envie ?</div>
            <h2>Commence par ton vrai pourquoi.</h2>
            <p>Pas besoin de choisir entre « pousser », « tirer » ou « mobilité » si ces mots ne te parlent pas encore. Choisis d'abord ce que tu aimerais être capable de faire.</p>
          </div>
          <div className="journeyGrid">
            {desires.map(([title, text, href]) => <Link className="journeyCard" href={href} key={title}><span>Mon envie</span><strong>{title}</strong><p>{text}</p><b>Commencer →</b></Link>)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading">
          <div className="eyebrow">Tu n'as pas besoin d'être déjà « au niveau »</div>
          <h2>Les vrais débuts sont parfois en dessous des exercices appelés débutants.</h2>
          <p>Calis doit aussi fonctionner pour la personne qui ne peut pas encore faire une pompe, n'a pas de barre, doute de sa technique ou se décourage parce que les progrès semblent invisibles.</p>
        </div>
        <div className="cardGrid">
          {realities.map(([title, text]) => <article className="plainCard" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="actions"><Link className="button secondary" href="/commencer">Trouver une première étape adaptée</Link></div>
      </section>

      <section className="section shell">
        <div className="sectionHeading">
          <div className="eyebrow">La boucle Calis</div>
          <h2>Transformer l'envie en progrès réel.</h2>
        </div>
        <div className="cardGrid">
          {pillars.map(([title, text]) => <article className="plainCard" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading">
          <div className="eyebrow">Un système, pas un blog</div>
          <h2>Comprendre où tu es et ce qui vient ensuite.</h2>
          <p>Le désir ouvre la porte ; les capacités donnent ensuite une structure durable à l'apprentissage.</p>
        </div>
        <div className="cardGrid">
          {foundations.map(([title, text]) => <article className="plainCard" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell split">
          <div>
            <div className="eyebrow">Un premier exemple</div>
            <h2>« Je veux réussir une traction. »</h2>
            <p>Calis ne répond pas seulement avec une fiche technique. Il te situe entre suspension, contrôle scapulaire, rowing, assistance, négatives et première répétition, puis te montre ce que tu débloques ensuite.</p>
          </div>
          <Link className="button primary" href="/tractions">Voir comment le chemin fonctionne</Link>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Santé et bien-être</div>
        <h2>Bouger peut faire partie d'une vie plus active. Calis reste un outil d'apprentissage.</h2>
        <p>L'activité physique régulière est associée à de nombreux bénéfices de santé et de bien-être. Calis peut t'aider à apprendre, adapter et comprendre une pratique de renforcement au poids du corps, mais ne diagnostique pas une douleur, ne traite pas une maladie et ne remplace jamais un médecin, un kinésithérapeute ou un autre professionnel de santé qualifié.</p>
      </section>
    </>
  );
}
