import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobilité débutant : quoi travailler pour bouger plus librement ?",
  description: "Une approche simple de la mobilité en callisthénie : identifier l'amplitude qui te limite, la travailler progressivement et vérifier si elle améliore vraiment ton mouvement.",
  alternates: { canonical: "/bibliotheque/mobilite-debutant/" },
  openGraph: { title: "Mobilité débutant : travaille ce qui te limite vraiment", description: "Pas besoin d'être souple partout avant de commencer : relie la mobilité aux mouvements que tu veux apprendre.", type: "article", url: "/bibliotheque/mobilite-debutant/" },
};

export default function BeginnerMobilityPage() {
  return <article className="section shell narrow learningCard">
    <div className="eyebrow">Mouvement · débutant</div>
    <h1>Tu manques de mobilité ? Commence par le mouvement que tu veux rendre plus libre.</h1>
    <p className="lead">La mobilité n'est pas une collection d'étirements à terminer avant d'avoir le droit de pratiquer. Cherche d'abord quelle amplitude te limite dans un objectif réel, travaille-la progressivement, puis retourne au mouvement pour voir si quelque chose a changé.</p>

    <div className="learningMeta"><div><span>Objectif</span><strong>Bouger avec plus d'options</strong></div><div><span>Capacité</span><strong>Mouvement</strong></div><div><span>Matériel</span><strong>Souvent aucun</strong></div></div>

    <section className="articleSection"><div className="eyebrow">Réponse rapide</div><h2>Ne demande pas « suis-je assez souple ? » mais « qu'est-ce qui me limite ici ? »</h2><p>Choisis un mouvement concret : squat, appui sur les mains, position de bras au-dessus de la tête ou autre objectif. Observe l'endroit où tu perds le contrôle ou dois compenser fortement. Une exploration de mobilité devient utile quand elle répond à ce problème précis et que tu peux ensuite retester le mouvement.</p></section>

    <section className="articleSection"><div className="eyebrow">Méthode Calis</div><h2>Observer → explorer → retester.</h2><ol className="contentList numberedList"><li><strong>Observer :</strong> choisis un mouvement et repère ce qui devient difficile : amplitude, équilibre, contrôle ou simple manque de force.</li><li><strong>Explorer :</strong> travaille doucement l'articulation ou la position concernée sans forcer une douleur.</li><li><strong>Contrôler :</strong> essaie d'utiliser activement une partie de cette amplitude plutôt que de seulement la subir passivement.</li><li><strong>Retester :</strong> retourne au mouvement initial. Si rien ne change, la mobilité n'était peut-être pas le principal facteur limitant.</li></ol></section>

    <section className="articleSection sensationGrid"><div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu peux rechercher</div><h2>Une amplitude progressivement plus disponible et contrôlable.</h2><ul><li>Une tension tolérable qui ne t'oblige pas à fuir la position.</li><li>Une respiration qui reste possible.</li><li>Un mouvement légèrement plus libre après le travail.</li><li>La capacité à produire du contrôle dans l'amplitude gagnée.</li></ul></div><div className="signalCard cautionSignal"><div className="eyebrow">À surveiller</div><h2>Plus d'amplitude n'est pas automatiquement mieux.</h2><ul><li>Une douleur vive, électrique ou persistante.</li><li>Forcer une articulation uniquement pour atteindre une forme vue ailleurs.</li><li>Passer beaucoup de temps à s'étirer sans retester l'objectif réel.</li><li>Interpréter tout blocage technique comme un manque de mobilité alors qu'il peut aussi s'agir de force, d'équilibre ou de familiarité.</li></ul></div></section>

    <section className="articleSection"><div className="eyebrow">Choisis ton problème</div><h2>Relie la mobilité à une capacité.</h2><div className="nextGrid compactNextGrid"><Link className="nextCard" href="/bibliotheque/squat-poids-du-corps"><strong>Mon squat me paraît limité</strong><span>Tester une amplitude de squat contrôlée →</span></Link><Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Mes poignets limitent mes appuis</strong><span>Préparer progressivement les poignets →</span></Link><Link className="nextCard" href="/handstand"><strong>Je veux tenir sur les mains</strong><span>Voir le parcours handstand complet →</span></Link><Link className="nextCard" href="/bibliotheque/par-ou-commencer-calisthenie"><strong>Je ne sais pas ce qui me limite</strong><span>Revenir au diagnostic débutant →</span></Link></div></section>

    <section className="articleSection"><div className="eyebrow">Critère de progression</div><h2>La mobilité compte quand elle devient utilisable.</h2><p>Le meilleur signe n'est pas seulement d'aller plus loin dans un étirement. Cherche plutôt un mouvement cible devenu plus facile à organiser : squat plus stable, appui plus confortable, position moins compensée ou amplitude que tu peux atteindre et quitter volontairement.</p></section>

    <section className="articleSection"><div className="eyebrow">Si quelque chose fait mal</div><h2>Calis ne transforme pas une douleur en diagnostic.</h2><p>Une gêne inhabituelle, importante ou persistante ne permet pas de conclure à distance qu'un muscle est « trop court » ou qu'une articulation doit simplement être étirée davantage. Réduis ou arrête ce qui provoque la douleur et demande un avis professionnel approprié si nécessaire.</p></section>

    <Link className="textLink" href="/commencer">← Revenir au parcours débutant</Link>
  </article>;
}
