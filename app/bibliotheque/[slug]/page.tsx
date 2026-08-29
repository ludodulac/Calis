import { notFound } from "next/navigation";
import Link from "next/link";
import { v1Resources } from "@/lib/content/v1";

export function generateStaticParams() {
  return v1Resources.map((resource) => ({ slug: resource.slug }));
}

type LearningCard = {
  intro: string;
  objective: string;
  test: string;
  technique: string[];
  feel: string[];
  avoid: string[];
  advance: string;
  next?: { slug: string; label: string };
  secondaryNext?: { slug: string; label: string };
};

const pullUpCards: Record<string, LearningCard> = {
  "suspension-barre": {
    intro: "Avant de tirer ton corps vers la barre, apprends à y rester. La suspension construit la prise, l'habitude de supporter ton poids et les premiers repères autour des épaules.",
    objective: "Une suspension calme, stable et reproductible.",
    test: "Accroche-toi à la barre avec une prise confortable. Si tes mains lâchent immédiatement, si tu te crispes fortement ou si la position est inconfortable, travaille d'abord des expositions courtes et contrôlées.",
    technique: [
      "Utilise une prise complète et confortable, avec les poignets proches d'une position neutre.",
      "Laisse les bras s'allonger sans transformer la position en relâchement douloureux.",
      "Garde le tronc relativement stable et évite de chercher de l'élan.",
      "Descends de la barre avant que la prise ou les épaules ne perdent complètement leur contrôle.",
    ],
    feel: ["Les mains et avant-bras travaillent.", "Le corps devient plus calme sous la barre.", "La position devient progressivement plus familière."],
    avoid: ["Douleur vive à l'épaule, au coude ou au poignet.", "Glissement incontrôlé des mains.", "Balancer volontairement les jambes pour simplement tenir."],
    advance: "Passe au contrôle scapulaire quand tu peux te suspendre plusieurs fois avec une prise stable et suffisamment de marge pour penser à la position de tes épaules, pas seulement à survivre à la suspension.",
    next: { slug: "controle-scapulaire", label: "Apprendre le contrôle scapulaire" },
  },
  "controle-scapulaire": {
    intro: "La traction ne commence pas uniquement en pliant les coudes. Cette étape t'apprend à reconnaître et contrôler le mouvement des omoplates avant de demander davantage aux bras.",
    objective: "Initier un petit mouvement contrôlé sans transformer l'exercice en traction partielle.",
    test: "Depuis une suspension stable, essaie de modifier légèrement la position de tes épaules tout en gardant les coudes presque tendus. Si les bras se plient immédiatement ou si tu ne distingues aucun mouvement, réduis l'amplitude et apprends d'abord le geste.",
    technique: [
      "Pars d'une suspension stable et garde les coudes presque tendus.",
      "Déplace les épaules et les omoplates avec une faible amplitude plutôt que de chercher à monter haut.",
      "Évite de verrouiller artificiellement les omoplates pendant tout le mouvement : cherche du contrôle, pas une posture figée.",
      "Reviens lentement à la position de départ au lieu de retomber dans la suspension.",
    ],
    feel: ["Le haut du dos participe davantage.", "Le corps monte légèrement sans gros mouvement des coudes.", "Le retour vers la suspension reste contrôlé."],
    avoid: ["Hausser brutalement les épaules vers les oreilles.", "Transformer chaque répétition en demi-traction.", "Forcer une amplitude qui provoque une douleur."],
    advance: "Passe au rowing quand tu arrives à répéter ce petit mouvement sans élan et sans que les bras prennent immédiatement le dessus.",
    next: { slug: "rowing-incline", label: "Construire le tirage avec le rowing" },
  },
  "rowing-incline": {
    intro: "Le rowing incliné te permet d'apprendre à tirer ton corps avec une difficulté ajustable. C'est une excellente transition entre le travail de contrôle et la traction verticale complète.",
    objective: "Développer un tirage propre que tu peux rendre progressivement plus difficile.",
    test: "Place-toi sous une barre basse ou des anneaux et choisis un angle où tu peux tirer sans perdre l'alignement. Si chaque répétition devient immédiatement chaotique, rends ton corps plus vertical.",
    technique: [
      "Garde le corps organisé de la tête aux pieds plutôt que de laisser le bassin tomber.",
      "Tire la poitrine vers le support avec les épaules et les coudes qui se déplacent naturellement.",
      "Contrôle aussi le retour : ne te laisse pas simplement tomber vers l'arrière.",
      "Ajuste l'inclinaison pour modifier la difficulté sans changer l'exercice.",
    ],
    feel: ["Le dos et les bras produisent le tirage ensemble.", "Le tronc travaille pour garder le corps stable.", "La difficulté augmente progressivement quand le corps devient plus horizontal."],
    avoid: ["Donner un coup de bassin pour finir la répétition.", "Raccourcir de plus en plus l'amplitude au fil de la série.", "Choisir un angle si difficile que chaque répétition est différente."],
    advance: "Passe à une traction assistée lorsque ton rowing est reproductible à une inclinaison exigeante et que tu peux conserver une trajectoire cohérente sans élan.",
    next: { slug: "traction-assistee", label: "Passer à la traction assistée" },
  },
  "traction-assistee": {
    intro: "L'assistance sert à pratiquer le vrai mouvement de traction avant d'être capable de déplacer seul tout ton poids. Elle doit t'aider juste assez pour conserver une répétition propre.",
    objective: "Répéter une traction complète avec une aide mesurable et progressivement réduite.",
    test: "Choisis une assistance qui te permet de parcourir l'amplitude sans te faire rebondir vers le haut. Si l'aide t'accélère fortement ou masque totalement le point difficile, elle est probablement trop importante.",
    technique: [
      "Pars d'une position stable et initie le mouvement sans balancement volontaire.",
      "Laisse l'assistance aider sans modifier complètement ta trajectoire.",
      "Monte et redescends avec contrôle, notamment dans la partie basse.",
      "Réduis l'aide progressivement quand les répétitions deviennent régulières.",
    ],
    feel: ["Tu produis encore un effort important malgré l'assistance.", "La trajectoire ressemble à celle d'une traction non assistée.", "Le point difficile devient identifiable plutôt que masqué."],
    avoid: ["Une bande tellement forte qu'elle te projette hors du bas du mouvement.", "Changer d'amplitude selon la tension de l'élastique.", "Accumuler des répétitions rapides uniquement parce que l'aide est importante."],
    advance: "Passe davantage de temps sur les négatives lorsque tu peux réaliser des répétitions assistées cohérentes avec une aide modérée et que tu contrôles déjà bien le retour vers le bas.",
    next: { slug: "traction-negative", label: "Renforcer la descente avec les négatives" },
  },
  "traction-negative": {
    intro: "La négative consiste à commencer en haut puis à contrôler la descente. Elle te permet de travailler la phase excentrique du mouvement avant de pouvoir produire suffisamment de force pour monter seul.",
    objective: "Contrôler la descente sur toute l'amplitude sans chute brutale.",
    test: "Utilise un support stable ou une assistance pour placer le menton au niveau de la barre, puis retire progressivement l'aide. Si tu tombes immédiatement, ajoute de l'assistance ou raccourcis la descente contrôlée.",
    technique: [
      "Commence réellement en position haute plutôt qu'en sautant de façon incontrôlée vers la barre.",
      "Descends aussi régulièrement que possible au lieu de bloquer en haut puis de tomber.",
      "Garde les épaules, les bras et le tronc organisés pendant la descente.",
      "Arrête la série lorsque tu ne peux plus contrôler nettement le retour.",
    ],
    feel: ["Une forte tension dans le dos et les bras pendant la descente.", "Un effort qui augmente à certains angles sans perte totale de contrôle.", "Une fatigue musculaire importante même avec peu de répétitions."],
    avoid: ["Tomber brutalement dans la position basse.", "Faire énormément de négatives malgré une forte fatigue.", "Ignorer une douleur articulaire sous prétexte que la descente est lente."],
    advance: "Teste une traction stricte lorsque tu peux répéter des descentes contrôlées et que l'assistance utilisée sur les tractions complètes a nettement diminué. Les négatives peuvent générer beaucoup de courbatures : augmente leur volume progressivement.",
    next: { slug: "premiere-traction", label: "Tenter ta première traction stricte" },
  },
  "traction-technique": {
    intro: "Une traction stricte n'est pas une pose figée : c'est un mouvement contrôlé entre une position basse stable et une position haute nette. L'objectif est de construire une répétition que tu peux reconnaître et reproduire.",
    objective: "Une répétition complète, contrôlée et reproductible.",
    test: "Filme-toi de profil ou de trois-quarts sur une répétition confortable. Vérifie si le départ, la montée et la descente se ressemblent d'une répétition à l'autre et si tu as besoin d'un balancement marqué pour passer le point difficile.",
    technique: [
      "Pars d'une suspension que tu peux contrôler plutôt que d'un balancement déjà lancé.",
      "Initie le tirage en gardant le corps organisé ; les coudes se plient pendant que le haut du dos participe au mouvement.",
      "Monte jusqu'à une position haute claire sans projeter brutalement la tête ou le menton vers la barre.",
      "Redescends avec le même contrôle que pendant la montée et retrouve une position basse stable avant la répétition suivante.",
    ],
    feel: ["Le dos et les bras travaillent ensemble.", "Le tronc limite les oscillations inutiles.", "La dernière répétition ressemble encore à la première."],
    avoid: ["Transformer chaque répétition en kipping involontaire.", "Réduire l'amplitude au fur et à mesure de la fatigue.", "Forcer une prise ou une trajectoire qui provoque une douleur articulaire."],
    advance: "Quand tu possèdes une traction que tu peux reproduire sans devoir la réinventer à chaque tentative, commence à construire du volume. La technique peut encore évoluer, mais elle doit déjà être suffisamment stable pour servir de référence.",
    next: { slug: "10-tractions", label: "Construire de 1 à 10 tractions" },
  },
  "10-tractions": {
    intro: "Passer d'une traction à plusieurs ne consiste pas à tester son maximum tous les jours. Le socle se construit avec des répétitions de qualité, assez faciles pour être accumulées sans transformer chaque séance en épreuve.",
    objective: "Augmenter le volume de tractions propres sans sacrifier la forme.",
    test: "Fais une série confortable sans aller volontairement à l'échec. Si les dernières répétitions changent fortement de trajectoire ou d'amplitude, considère que ton volume de travail utile se situe avant cette dégradation.",
    technique: [
      "Garde une marge sur la majorité des séries au lieu de poursuivre systématiquement jusqu'à l'échec.",
      "Accumule le volume avec plusieurs petites séries propres si une longue série détruit rapidement ta technique.",
      "Conserve les exercices de base qui corrigent ton maillon faible : rowing, assistance ou négatives peuvent rester utiles après la première traction.",
      "Augmente une variable à la fois : davantage de répétitions totales, davantage de séries ou une assistance moindre, plutôt que tout simultanément.",
    ],
    feel: ["Une fatigue musculaire progressive mais contrôlable.", "Des répétitions encore reconnaissables en fin de séance.", "Une récupération suffisante pour retrouver une bonne qualité lors de la séance suivante."],
    avoid: ["Tester son maximum à chaque séance.", "Ajouter du volume alors que l'amplitude se raccourcit nettement.", "Ignorer une baisse durable de performance ou une douleur qui augmente."],
    advance: "Quand dix tractions propres deviennent un repère réaliste et non un exploit exceptionnel, choisis une branche selon ton objectif : produire plus de hauteur et de vitesse, ou développer davantage de force avec du lest.",
    next: { slug: "traction-explosive", label: "Développer la traction explosive" },
    secondaryNext: { slug: "tractions-lestees", label: "Commencer les tractions lestées" },
  },
  "traction-explosive": {
    intro: "La traction explosive cherche à produire beaucoup de force rapidement pour monter plus haut que sur une traction classique. Elle prépare notamment les objectifs où la hauteur de tirage devient déterminante.",
    objective: "Monter plus haut sans perdre le contrôle du corps ni transformer l'exercice en balancement.",
    test: "Sur une traction fraîche, observe jusqu'où monte naturellement ta poitrine lorsque tu tires vite. Si accélérer détruit complètement ta trajectoire, consolide d'abord ta force et ta technique stricte.",
    technique: [
      "Travaille lorsque tu es suffisamment frais pour produire de la vitesse ; l'explosivité chute vite avec la fatigue.",
      "Cherche une accélération nette dès le début du tirage plutôt qu'un mouvement lent terminé par un coup de bassin.",
      "Garde un nombre de répétitions assez faible pour que chaque tentative reste réellement rapide.",
      "Conserve parallèlement des tractions strictes pour que la vitesse ne remplace pas la qualité du mouvement.",
    ],
    feel: ["Une accélération franche du corps vers la barre.", "Un tirage plus haut sans besoin d'un grand élan des jambes.", "Une forte intention de vitesse même si la hauteur progresse graduellement."],
    avoid: ["Confondre explosivité et balancement.", "Multiplier les répétitions lorsque la vitesse s'effondre.", "Chercher une hauteur maximale avec une épaule ou un coude douloureux."],
    advance: "Lorsque la hauteur de tirage augmente tout en gardant une trajectoire contrôlée, tu peux commencer à connecter cette capacité à des objectifs comme le muscle-up. Ce futur parcours aura ses propres prérequis et ne se résumera pas à tirer plus fort.",
  },
  "tractions-lestees": {
    intro: "Le lest transforme la traction en travail de force plus facilement mesurable. Il n'est utile que lorsque ta traction au poids du corps est déjà suffisamment stable pour que le poids ajouté ne masque pas les défauts de base.",
    objective: "Ajouter progressivement de la charge sans perdre la répétition de référence.",
    test: "Avant d'ajouter du poids, vérifie que tes tractions au poids du corps restent propres sur plusieurs séries et que tu peux distinguer clairement une bonne répétition d'une répétition dégradée.",
    technique: [
      "Commence par une charge légère qui change peu ta mécanique habituelle.",
      "Utilise un système de lest stable qui ne te force pas à modifier exagérément la position du bassin ou des jambes.",
      "Garde une amplitude et une qualité comparables à tes tractions sans lest.",
      "Augmente la charge progressivement et seulement lorsque la répétition actuelle reste contrôlée.",
    ],
    feel: ["Le mouvement est plus exigeant mais reste familier.", "La vitesse ralentit sans que la trajectoire s'effondre.", "Le dos, les bras et le tronc continuent à travailler comme un ensemble."],
    avoid: ["Ajouter du poids pour compenser un manque de contrôle technique.", "Sauter brutalement de charge en charge.", "Laisser le lest se balancer fortement ou tirer sur une zone inconfortable."],
    advance: "Le prochain niveau n'est pas une charge universelle. Utilise plutôt une progression régulière, une technique stable et un objectif clair : force maximale, streetlifting ou simple renforcement complémentaire.",
  },
};

function LearningCardPage({ slug }: { slug: string }) {
  const resource = v1Resources.find((item) => item.slug === slug)!;
  const card = pullUpCards[slug];
  const equipment = resource.equipment.length ? resource.equipment.join(", ") : "aucun matériel obligatoire";

  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">{resource.kind} · parcours tractions</div>
      <h1>{resource.title}</h1>
      <p className="lead">{card.intro}</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>{card.objective}</strong></div>
        <div><span>Capacité</span><strong>{resource.capability}</strong></div>
        <div><span>Matériel</span><strong>{equipment}</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Test de départ</div>
        <h2>Vérifie ton point de départ</h2>
        <p>{card.test}</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Technique</div>
        <h2>Les repères à garder</h2>
        <ol className="contentList numberedList">
          {card.technique.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Des signaux utiles</h2>
          <ul>{card.feel.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Ce que tu ne devrais pas ignorer</div>
          <h2>Quand réduire la difficulté</h2>
          <ul>{card.avoid.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Une douleur vive ou persistante n'est pas un critère de progression. Arrête ou adapte l'exercice et demande un avis professionnel si nécessaire.</p>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de passage</div>
        <h2>Quand continuer vers l'étape suivante ?</h2>
        <p>{card.advance}</p>
      </section>

      {(card.next || card.secondaryNext) && (
        <section className="articleSection">
          <div className="eyebrow">Étape suivante</div>
          <div className="nextGrid compactNextGrid">
            {card.next && <Link className="nextCard" href={`/bibliotheque/${card.next.slug}`}><strong>{card.next.label}</strong><span>Continuer →</span></Link>}
            {card.secondaryNext && <Link className="nextCard" href={`/bibliotheque/${card.secondaryNext.slug}`}><strong>{card.secondaryNext.label}</strong><span>Choisir cette branche →</span></Link>}
          </div>
        </section>
      )}

      <Link className="textLink" href="/tractions">← Retour au parcours Tractions</Link>
    </article>
  );
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
        <div className="sectionHeading"><div className="eyebrow">Test de départ</div><h2>Où en es-tu aujourd'hui ?</h2></div>
        <div className="testGrid">
          <div className="testCard"><strong>Je ne tiens presque pas à la barre</strong><p>Commence par la suspension et la prise.</p><Link className="textLink" href="/bibliotheque/suspension-barre">Voir la suspension →</Link></div>
          <div className="testCard"><strong>Je tiens à la barre mais je ne monte pas</strong><p>Travaille contrôle scapulaire, rowing et assistance.</p><Link className="textLink" href="/bibliotheque/controle-scapulaire">Voir le contrôle scapulaire →</Link></div>
          <div className="testCard"><strong>Je monte un peu puis je bloque</strong><p>Renforce le tirage sur toute l'amplitude et utilise les négatives.</p><Link className="textLink" href="/bibliotheque/traction-negative">Voir les négatives →</Link></div>
        </div>
      </section>

      <section className="articleSection">
        <div className="sectionHeading"><div className="eyebrow">Parcours</div><h2>La progression en 6 étapes</h2></div>
        <ol className="progression detailedProgression">
          {steps.map(([number, title, text]) => <li className="progressionStep" key={number}><div className="stepNumber">{number.padStart(2, "0")}</div><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu dois ressentir</div><h2>Des repères utiles</h2><ul><li>Une prise ferme mais pas crispée au point de te fatiguer inutilement.</li><li>Le haut du dos qui participe au mouvement, pas uniquement les avant-bras.</li><li>Un mouvement contrôlé du départ jusqu'au retour en suspension.</li><li>Une difficulté musculaire progressive, sans douleur aiguë.</li></ul></div>
        <div className="signalCard cautionSignal"><div className="eyebrow">Ce que tu ne devrais pas ignorer</div><h2>Quand ralentir</h2><ul><li>Une douleur vive ou inhabituelle à l'épaule, au coude ou au poignet.</li><li>Une perte complète de contrôle suivie d'une chute brutale en bas.</li><li>Une douleur qui augmente d'une séance à l'autre.</li><li>Le besoin permanent de balancer les jambes pour démarrer.</li></ul><p>Si une douleur nette apparaît, arrête ou modifie l'exercice. Une fiche d'entraînement ne remplace pas l'avis d'un professionnel de santé lorsqu'une douleur persiste.</p></div>
      </section>

      <section className="articleSection"><h2>Les erreurs fréquentes</h2><div className="mistakeList"><div><strong>Vouloir tester sa traction à chaque séance</strong><p>Tester n'est pas entraîner. Passe l'essentiel de ton temps sur des exercices que tu peux répéter proprement.</p></div><div><strong>Choisir une assistance trop forte</strong><p>Si l'élastique fait presque tout le travail, la progression devient difficile à mesurer.</p></div><div><strong>Négliger la descente</strong><p>Le retour contrôlé fait partie de la répétition et fournit un excellent travail de force.</p></div><div><strong>Ajouter du volume malgré une technique qui se dégrade</strong><p>Arrête la série quand tu n'arrives plus à conserver une répétition proche de la précédente.</p></div></div></section>

      <section className="articleSection"><div className="eyebrow">Quand passer à l'étape suivante ?</div><h2>Utilise la qualité comme critère</h2><p>Ne cherche pas un chiffre magique identique pour tout le monde. Avance lorsque l'étape actuelle est reproductible, contrôlée et ne te demande plus un effort maximal à chaque répétition. L'objectif est de réduire progressivement l'aide nécessaire.</p></section>

      <section className="articleSection equipmentCallout"><div><div className="eyebrow">Matériel</div><h2>Ce dont tu as réellement besoin</h2><p><strong>Indispensable :</strong> une barre suffisamment stable et adaptée à ton environnement.</p><p><strong>Facultatif :</strong> un élastique d'assistance. Il peut être utile, mais tu peux progresser avec suspension, rowing et négatives sans acheter plusieurs accessoires.</p></div><div className="manifesto"><span>Principe Calis</span><strong>N'achète pas une solution à un problème que tu peux déjà entraîner.</strong></div></section>

      <section className="articleSection"><div className="eyebrow">Suite logique</div><h2>Continue ton parcours</h2><div className="nextGrid"><Link className="nextCard" href="/bibliotheque/traction-technique"><strong>Technique de traction</strong><span>Comprendre amplitude et trajectoire →</span></Link><Link className="nextCard" href="/bibliotheque/10-tractions"><strong>De 1 à 10 tractions</strong><span>Construire volume et régularité →</span></Link><Link className="nextCard" href="/tractions"><strong>Hub Tractions</strong><span>Voir tout le parcours →</span></Link></div></section>
    </article>
  );
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = v1Resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  if (slug === "premiere-traction") return <FirstPullUpPage />;
  if (pullUpCards[slug]) return <LearningCardPage slug={slug} />;

  return (
    <article className="section shell narrow">
      <div className="eyebrow">{resource.kind} · {resource.level}</div>
      <h1>{resource.title}</h1>
      <p className="lead">{resource.summary}</p>
      <div className="infoPanel"><p><strong>Capacité :</strong> {resource.capability}</p><p><strong>Matériel :</strong> {resource.equipment.length ? resource.equipment.join(", ") : "aucun matériel obligatoire"}</p></div>
      <section className="articleSection"><h2>Ce que cette fiche doit t'apprendre</h2><p>Cette page est une première structure fonctionnelle. Son contenu éditorial détaillé sera rédigé à partir du brief V1 correspondant : prérequis, test de départ, technique, sensations, erreurs, régressions, progressions, critères de passage, matériel et sources.</p></section>
      <section className="articleSection"><h2>Principe Calis</h2><p>Le but n'est pas de réussir une répétition à tout prix, mais de comprendre ce qui manque aujourd'hui et quelle étape permet de progresser proprement.</p></section>
      <Link className="textLink" href={resource.hub === "tractions" ? "/tractions" : "/bibliotheque"}>← Retour au parcours</Link>
    </article>
  );
}
