import { notFound } from "next/navigation";
import Link from "next/link";
import { v1Resources } from "@/lib/content/v1";

export function generateStaticParams() {
  return v1Resources.map((resource) => ({ slug: resource.slug }));
}

function FirstPullUpPage() {
  const steps = [
    ["1", "Teste ta suspension", "Accroche-toi à une barre avec une prise confortable. Ton premier objectif n'est pas de tirer, mais de pouvoir rester suspendu sans perdre immédiatement la prise ni paniquer dans les épaules."],
    ["2", "Apprends à contrôler tes omoplates", "Depuis la suspension, entraîne-toi à abaisser légèrement les épaules et à initier le mouvement avec les omoplates, sans transformer l'exercice en demi-traction."],
    ["3", "Construis ton tirage horizontal", "Le rowing incliné permet de renforcer le dos et les bras avec une difficulté ajustable. Plus ton corps est vertical, plus l'exercice est accessible."],
    ["4", "Utilise l'assistance intelligemment", "Une bande ou une machine peut aider, mais l'assistance doit rester assez faible pour que tu apprennes encore à contrôler la trajectoire."],
    ["5", "Travaille la descente", "Monte avec une aide puis redescends lentement. Les négatives servent à apprendre à produire et contrôler de la force sur toute l'amplitude."],
    ["6", "Tente une répétition stricte", "Quand les étapes précédentes deviennent stables, teste une traction complète sans élan. Une répétition propre vaut mieux que plusieurs répétitions dégradées."],
  ];

  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Progression · partir de zéro</div>
      <h1>Réussir sa première traction</h1>
      <p className="lead">Tu n'as pas besoin d'être déjà fort pour commencer. Le but est d'identifier ce qui te manque aujourd'hui — prise, suspension, contrôle des épaules ou force de tirage — puis de construire ces capacités une par une.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>1 traction stricte</strong></div>
        <div><span>Matériel</span><strong>Une barre</strong></div>
        <div><span>Niveau</span><strong>Départ zéro</strong></div>
      </div>

      <section className="articleSection">
        <h2>Avant de chercher à tirer</h2>
        <p>Une traction est un mouvement complet : tu dois tenir ton poids, stabiliser les épaules, produire de la force avec le dos et les bras, puis conserver une trajectoire contrôlée. Si une de ces briques manque, ce n'est pas un échec : c'est simplement la prochaine chose à entraîner.</p>
      </section>

      <section className="articleSection">
        <div className="sectionHeading">
          <div className="eyebrow">Test de départ</div>
          <h2>Où en es-tu aujourd'hui ?</h2>
        </div>
        <div className="testGrid">
          <div className="testCard"><strong>Je ne tiens presque pas à la barre</strong><p>Commence par la suspension et la prise.</p><Link className="textLink" href="/bibliotheque/suspension-barre">Voir la suspension →</Link></div>
          <div className="testCard"><strong>Je tiens à la barre mais je ne monte pas</strong><p>Travaille contrôle scapulaire, rowing et assistance.</p><Link className="textLink" href="/bibliotheque/controle-scapulaire">Voir le contrôle scapulaire →</Link></div>
          <div className="testCard"><strong>Je monte un peu puis je bloque</strong><p>Renforce le tirage sur toute l'amplitude et utilise les négatives.</p><Link className="textLink" href="/bibliotheque/traction-negative">Voir les négatives →</Link></div>
        </div>
      </section>

      <section className="articleSection">
        <div className="sectionHeading"><div className="eyebrow">Parcours</div><h2>La progression en 6 étapes</h2></div>
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
          <h2>Des repères utiles</h2>
          <ul>
            <li>Une prise ferme mais pas crispée au point de te fatiguer inutilement.</li>
            <li>Le haut du dos qui participe au mouvement, pas uniquement les avant-bras.</li>
            <li>Un mouvement contrôlé du départ jusqu'au retour en suspension.</li>
            <li>Une difficulté musculaire progressive, sans douleur aiguë.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Ce que tu ne devrais pas ignorer</div>
          <h2>Quand ralentir</h2>
          <ul>
            <li>Une douleur vive ou inhabituelle à l'épaule, au coude ou au poignet.</li>
            <li>Une perte complète de contrôle suivie d'une chute brutale en bas.</li>
            <li>Une douleur qui augmente d'une séance à l'autre.</li>
            <li>Le besoin permanent de balancer les jambes pour démarrer.</li>
          </ul>
          <p>Si une douleur nette apparaît, arrête ou modifie l'exercice. Une fiche d'entraînement ne remplace pas l'avis d'un professionnel de santé lorsqu'une douleur persiste.</p>
        </div>
      </section>

      <section className="articleSection">
        <h2>Les erreurs fréquentes</h2>
        <div className="mistakeList">
          <div><strong>Vouloir tester sa traction à chaque séance</strong><p>Tester n'est pas entraîner. Passe l'essentiel de ton temps sur des exercices que tu peux répéter proprement.</p></div>
          <div><strong>Choisir une assistance trop forte</strong><p>Si l'élastique fait presque tout le travail, la progression devient difficile à mesurer.</p></div>
          <div><strong>Négliger la descente</strong><p>Le retour contrôlé fait partie de la répétition et fournit un excellent travail de force.</p></div>
          <div><strong>Ajouter du volume malgré une technique qui se dégrade</strong><p>Arrête la série quand tu n'arrives plus à conserver une répétition proche de la précédente.</p></div>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Quand passer à l'étape suivante ?</div>
        <h2>Utilise la qualité comme critère</h2>
        <p>Ne cherche pas un chiffre magique identique pour tout le monde. Avance lorsque l'étape actuelle est reproductible, contrôlée et ne te demande plus un effort maximal à chaque répétition. L'objectif est de réduire progressivement l'aide nécessaire.</p>
      </section>

      <section className="articleSection equipmentCallout">
        <div>
          <div className="eyebrow">Matériel</div>
          <h2>Ce dont tu as réellement besoin</h2>
          <p><strong>Indispensable :</strong> une barre suffisamment stable et adaptée à ton environnement.</p>
          <p><strong>Facultatif :</strong> un élastique d'assistance. Il peut être utile, mais tu peux progresser avec suspension, rowing et négatives sans acheter plusieurs accessoires.</p>
        </div>
        <div className="manifesto"><span>Principe Calis</span><strong>N'achète pas une solution à un problème que tu peux déjà entraîner.</strong></div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Suite logique</div>
        <h2>Continue ton parcours</h2>
        <div className="nextGrid">
          <Link className="nextCard" href="/bibliotheque/traction-technique"><strong>Technique de traction</strong><span>Comprendre amplitude et trajectoire →</span></Link>
          <Link className="nextCard" href="/bibliotheque/10-tractions"><strong>De 1 à 10 tractions</strong><span>Construire volume et régularité →</span></Link>
          <Link className="nextCard" href="/tractions"><strong>Hub Tractions</strong><span>Voir tout le parcours →</span></Link>
        </div>
      </section>
    </article>
  );
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  if (slug === "premiere-traction") return <FirstPullUpPage />;

  return (
    <article className="section shell narrow">
      <div className="eyebrow">{resource.kind} · {resource.level}</div>
      <h1>{resource.title}</h1>
      <p className="lead">{resource.summary}</p>

      <div className="infoPanel">
        <p><strong>Capacité :</strong> {resource.capability}</p>
        <p><strong>Matériel :</strong> {resource.equipment.length ? resource.equipment.join(", ") : "aucun matériel obligatoire"}</p>
      </div>

      <section className="articleSection">
        <h2>Ce que cette fiche doit t'apprendre</h2>
        <p>Cette page est une première structure fonctionnelle. Son contenu éditorial détaillé sera rédigé à partir du brief V1 correspondant : prérequis, test de départ, technique, sensations, erreurs, régressions, progressions, critères de passage, matériel et sources.</p>
      </section>

      <section className="articleSection">
        <h2>Principe Calis</h2>
        <p>Le but n'est pas de réussir une répétition à tout prix, mais de comprendre ce qui manque aujourd'hui et quelle étape permet de progresser proprement.</p>
      </section>

      <Link className="textLink" href={resource.hub === "tractions" ? "/tractions" : "/bibliotheque"}>← Retour au parcours</Link>
    </article>
  );
}
