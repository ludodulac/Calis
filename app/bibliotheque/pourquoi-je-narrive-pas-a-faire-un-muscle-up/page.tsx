import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi je n'arrive pas à faire un muscle-up ? Diagnostic",
  description: "Identifier ce qui bloque ton premier muscle-up : base de traction, hauteur de tirage, transition, asymétrie ou poussée au-dessus de la barre.",
  alternates: { canonical: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up/" },
  openGraph: { title: "Pourquoi je n'arrive pas à faire un muscle-up ?", description: "Un diagnostic simple pour travailler le maillon qui manque au lieu de répéter des échecs complets.", type: "article", url: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up/" },
};

const blockers = [
  ["Mes tractions ne sont pas encore vraiment fiables", "Construis d'abord des répétitions contrôlées et reproductibles. Le muscle-up ajoute de la vitesse et de la coordination à une base de tirage déjà exigeante.", "/bibliotheque/10-tractions", "Consolider mes tractions"],
  ["Je passe le menton mais je ne peux pas tirer beaucoup plus haut", "Ton endurance en traction ne dit pas toute l'histoire. Travaille spécifiquement la vitesse et la hauteur de tirage.", "/bibliotheque/traction-explosive", "Travailler le tirage haut"],
  ["J'arrive haut mais je retombe sous la barre", "La transition devient probablement une compétence à apprendre en elle-même. Utilise une situation simplifiée et contrôlable plutôt que d'espérer la découvrir uniquement à pleine vitesse.", "/muscle-up", "Comprendre le parcours"],
  ["Un coude ou un bras passe avant l'autre", "Ce passage peut permettre de réussir une tentative, mais il ne doit pas devenir automatiquement le modèle recherché. Réduis la difficulté jusqu'à pouvoir explorer un passage plus symétrique.", "/muscle-up", "Revenir au mouvement complet"],
  ["Je passe la transition mais je ne termine pas", "Le maillon limitant peut être la poussée et la stabilité au-dessus de la barre. Renforce cette famille de capacité avant de multiplier les tentatives complètes.", "/dips", "Travailler la poussée"],
] as const;

export default function MuscleUpDiagnosticPage() {
  return <article className="section shell narrow learningCard">
    <div className="eyebrow">Muscle-up · diagnostic</div>
    <h1>Pourquoi je n'arrive pas à faire un muscle-up ?</h1>
    <p className="lead">Parce que « rater un muscle-up » ne décrit pas encore ton problème. Observe plutôt l'endroit où la tentative cesse d'être contrôlable : sous la barre, pendant le tirage haut, dans le passage ou une fois au-dessus.</p>
    <div className="learningMeta"><div><span>Objectif</span><strong>Trouver le maillon limitant</strong></div><div><span>Capacités</span><strong>Tirer · coordonner · pousser</strong></div><div><span>Matériel</span><strong>Barre stable</strong></div></div>

    <section className="articleSection"><div className="eyebrow">Réponse rapide</div><h2>Ne transforme pas chaque séance en examen du mouvement complet.</h2><p>Une tentative complète peut te montrer où tu bloques. Elle n'est pas forcément la meilleure manière de corriger ce blocage. Quand le maillon faible est identifié, simplifie-le assez pour pouvoir réellement l'entraîner.</p><p>Il n'existe pas de nombre universel de tractions qui garantit un muscle-up. Les seuils fixes souvent donnés en ligne sont des repères d'entraîneurs, pas une loi biomécanique. Calis préfère regarder la qualité de tes tractions, la hauteur de ton tirage, ta transition et ta capacité d'appui.</p></section>

    <section className="articleSection"><div className="eyebrow">Ton diagnostic</div><h2>Quelle phrase ressemble le plus à ta tentative ?</h2><div className="nextGrid">{blockers.map(([title,text,href,label]) => <div className="nextCard" key={title}><strong>{title}</strong><p>{text}</p><Link className="textLink" href={href}>{label} →</Link></div>)}</div></section>

    <section className="articleSection sensationGrid"><div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu cherches</div><h2>Une tentative qui devient plus lisible.</h2><ul><li>Tu sais nommer l'étape qui limite.</li><li>Ton tirage gagne de la hauteur sans devenir chaotique.</li><li>Tu peux explorer la transition avec une difficulté réduite.</li><li>Les deux côtés participent de façon de plus en plus comparable.</li></ul></div><div className="signalCard cautionSignal"><div className="eyebrow">À ne pas banaliser</div><h2>Une réussite n'est pas utile à n'importe quel prix.</h2><ul><li>Tu dois jeter systématiquement un seul bras au-dessus de la barre.</li><li>Chaque tentative devient plus violente à mesure que tu fatigues.</li><li>Tu multiplies les essais sans savoir ce que tu cherches à modifier.</li><li>Une douleur vive, inhabituelle ou persistante apparaît à l'épaule, au coude ou au poignet.</li></ul></div></section>

    <section className="articleSection"><div className="eyebrow">Critère de progression</div><h2>Quand retenter le mouvement complet ?</h2><p>Quand le maillon que tu travaillais devient suffisamment reproductible pour que la tentative complète puisse t'apprendre quelque chose de nouveau. Le but n'est pas d'attendre la perfection : c'est d'éviter de répéter exactement le même échec en espérant un résultat différent.</p></section>

    <section className="articleSection"><div className="eyebrow">Limite santé</div><h2>Calis aide à comprendre l'entraînement, pas à diagnostiquer une douleur.</h2><p>Une gêne ou une douleur ne permet pas à cette page de déterminer une blessure ni sa cause. Réduis ou arrête le mouvement qui provoque une douleur vive ou inhabituelle et demande un avis professionnel lorsque la situation le justifie.</p></section>
    <Link className="textLink" href="/muscle-up">← Revenir au parcours muscle-up</Link>
  </article>;
}
