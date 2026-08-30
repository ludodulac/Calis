import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Callisthénie débutant : par où commencer quand on part de zéro ?",
  description: "Tu veux commencer la callisthénie sans savoir quoi travailler ? Choisis un premier objectif, teste une version accessible et construis pousser, tirer, jambes, mobilité et équilibre progressivement.",
  alternates: { canonical: "/bibliotheque/par-ou-commencer-calisthenie/" },
  openGraph: { title: "Par où commencer en callisthénie ?", description: "Un point de départ concret pour débuter sans programme compliqué ni achat inutile.", type: "article", url: "/bibliotheque/par-ou-commencer-calisthenie/" },
};

const entries = [
  ["Je n'arrive pas encore à faire une pompe", "Commence par une hauteur où tu peux réellement pousser et contrôler ton corps.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe"],
  ["Je n'arrive pas encore à faire une traction", "Identifie si le premier maillon est la suspension, les épaules, le tirage ou la descente.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction"],
  ["Je veux renforcer mes jambes", "Utilise le squat comme mouvement de base et ajuste l'amplitude au contrôle disponible.", "/bibliotheque/squat-poids-du-corps"],
  ["Je me sens raide", "Travaille la mobilité qui limite un mouvement réel au lieu de chercher à être souple partout.", "/bibliotheque/mobilite-debutant"],
  ["Je veux apprendre le handstand", "Prépare les appuis, apprends à sortir de la position et utilise le mur pour réduire la difficulté.", "/bibliotheque/handstand-debutant"],
] as const;

export default function StartCalisthenicsGuidePage() {
  return <article className="section shell narrow learningCard">
    <div className="eyebrow">Débuter · orientation</div>
    <h1>Par où commencer en callisthénie quand on part de zéro ?</h1>
    <p className="lead">Ne commence pas par mémoriser cinquante exercices. Choisis une capacité qui t'attire, trouve une version que tu peux essayer aujourd'hui et utilise tes sensations et ton contrôle pour savoir quand avancer.</p>

    <div className="learningMeta"><div><span>Objectif</span><strong>Trouver une première action</strong></div><div><span>Niveau</span><strong>Départ de zéro</strong></div><div><span>Matériel</span><strong>Très peu nécessaire</strong></div></div>

    <section className="articleSection"><div className="eyebrow">Réponse rapide</div><h2>Tu peux commencer aujourd'hui avec un seul problème concret.</h2><p>Une première séance n'a pas besoin de couvrir toute la callisthénie. Choisis par exemple une poussée accessible, un tirage adapté à ton niveau, un squat contrôlé ou une exploration de mobilité liée à ton objectif. Le rôle de Calis est ensuite de relier cette première action aux suivantes.</p></section>

    <section className="articleSection"><div className="eyebrow">Choisis ta porte d'entrée</div><h2>Qu'est-ce que tu aimerais pouvoir faire ?</h2><div className="nextGrid">{entries.map(([title, description, href]) => <Link className="nextCard" href={href} key={title}><strong>{title}</strong><span>{description} →</span></Link>)}</div></section>

    <section className="articleSection"><div className="eyebrow">Les bases</div><h2>Construis des capacités, pas une liste d'exercices.</h2><div className="mistakeList"><div><strong>Pousser</strong><p>Apprendre à déplacer ton corps avec les bras, des pompes inclinées jusqu'aux variantes plus exigeantes.</p></div><div><strong>Tirer</strong><p>Développer prise, suspension et force de tirage avant de demander une traction complète.</p></div><div><strong>Utiliser tes jambes</strong><p>S'accroupir et se relever avec une difficulté et une amplitude adaptées.</p></div><div><strong>Se mouvoir</strong><p>Développer les amplitudes utiles aux mouvements que tu veux réellement pratiquer.</p></div><div><strong>S'équilibrer</strong><p>Apprendre progressivement à organiser ton corps dans des positions inhabituelles comme le handstand.</p></div></div></section>

    <section className="articleSection sensationGrid"><div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu recherches au début</div><h2>Une difficulté que tu peux apprendre.</h2><ul><li>Tu comprends ce que tu essaies de faire.</li><li>Tu peux ralentir au moins une partie du mouvement.</li><li>Tu distingues progressivement l'effort de la perte de contrôle.</li><li>Tu peux répéter une version similaire et observer un petit progrès.</li></ul></div><div className="signalCard cautionSignal"><div className="eyebrow">Ce que tu n'as pas besoin de faire</div><h2>Ne transforme pas le début en examen d'entrée.</h2><ul><li>Attendre d'être déjà fort ou souple.</li><li>Acheter beaucoup de matériel avant de connaître tes besoins.</li><li>Tester ton maximum à chaque séance.</li><li>Copier une difficulté avancée uniquement parce qu'elle est spectaculaire.</li></ul></div></section>

    <section className="articleSection"><div className="eyebrow">Ta première logique de progression</div><h2>Trop difficile → simplifie. Stable → répète. Maîtrisé → avance.</h2><p>Si une variante t'oblige à tricher ou à lutter sans comprendre le mouvement, réduis la difficulté. Si elle est exigeante mais reproductible, elle peut devenir ton exercice de travail. Quand elle devient suffisamment stable pour que tu reconnaisses clairement tes répétitions, explore l'étape suivante.</p></section>

    <section className="articleSection"><div className="eyebrow">Matériel</div><h2>Tu n'as pas besoin d'acheter pour avoir le droit de commencer.</h2><p>Le sol, un support stable et parfois une barre suffisent déjà à construire énormément de choses. Plus tard, anneaux, élastiques, parallettes ou lest peuvent devenir utiles parce qu'ils répondent à un besoin précis. Calis préfère te dire qu'il n'y a rien à acheter plutôt que d'inventer un besoin.</p></section>

    <div className="nextGrid compactNextGrid"><Link className="nextCard" href="/commencer"><strong>Je veux repartir de mon envie</strong><span>Choisir par ce que j'aimerais ressentir ou réussir →</span></Link><Link className="nextCard" href="/bibliotheque"><strong>Je veux explorer</strong><span>Ouvrir toute la bibliothèque Calis →</span></Link></div>
  </article>;
}
