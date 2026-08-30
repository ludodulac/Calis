import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Squat poids du corps : technique et progression débutant",
  description: "Apprends le squat au poids du corps avec une amplitude adaptée : appuis, descente, sensations, erreurs fréquentes et façons de simplifier le mouvement.",
  alternates: { canonical: "/bibliotheque/squat-poids-du-corps/" },
  openGraph: { title: "Squat au poids du corps : construire une base solide", description: "Une progression simple pour apprendre à s'accroupir avec contrôle sans imposer une profondeur identique à tout le monde.", type: "article", url: "/bibliotheque/squat-poids-du-corps/" },
};

export default function BodyweightSquatPage() {
  return <article className="section shell narrow learningCard">
    <div className="eyebrow">Jambes · débutant</div>
    <h1>Comment faire un squat au poids du corps quand on débute ?</h1>
    <p className="lead">Le but n'est pas de forcer immédiatement le squat le plus profond possible. Construis d'abord une descente que tu contrôles, avec des pieds stables et une remontée où tu peux réellement pousser dans le sol.</p>

    <div className="learningMeta"><div><span>Objectif</span><strong>S'accroupir et se relever avec contrôle</strong></div><div><span>Capacité</span><strong>Jambes</strong></div><div><span>Matériel</span><strong>Aucun · support possible</strong></div></div>

    <section className="articleSection"><div className="eyebrow">Réponse rapide</div><h2>Commence par l'amplitude que tu possèdes aujourd'hui.</h2><p>Place les pieds dans une position naturelle et stable, descends progressivement en laissant genoux et hanches participer au mouvement, puis remonte en poussant le sol. Arrête la descente avant que tu doives perdre franchement l'équilibre, décoller les pieds ou forcer une position douloureuse.</p><p>Si tu te sens aspiré vers l'arrière ou si tu n'arrives pas à remonter, utilise temporairement une chaise, un montant ou un autre support stable. Simplifier le mouvement permet de l'apprendre au lieu de répéter une lutte.</p></section>

    <section className="articleSection"><div className="eyebrow">Les quatre moments</div><h2>Observe le mouvement plutôt que de chercher une posture figée.</h2><ol className="contentList numberedList"><li><strong>Départ :</strong> pieds entièrement en contact avec le sol, position suffisamment confortable pour respirer et bouger.</li><li><strong>Descente :</strong> hanches et genoux se plient ensemble pendant que le tronc s'adapte pour garder l'équilibre.</li><li><strong>Bas du mouvement :</strong> utilise une profondeur que tu peux encore contrôler aujourd'hui ; elle pourra évoluer avec la pratique.</li><li><strong>Remontée :</strong> pousse le sol et retrouve une position debout stable sans transformer la fin du mouvement en perte d'équilibre.</li></ol></section>

    <section className="articleSection sensationGrid"><div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu dois ressentir</div><h2>Des jambes qui travaillent et des appuis présents.</h2><ul><li>Les cuisses et les hanches participent clairement à la remontée.</li><li>Le pied reste en contact stable avec le sol.</li><li>La descente peut être ralentie volontairement.</li><li>Tu peux reconnaître et répéter une amplitude similaire.</li></ul></div><div className="signalCard cautionSignal"><div className="eyebrow">À surveiller</div><h2>Ne poursuis pas une profondeur au prix du contrôle.</h2><ul><li>Tu tombes systématiquement vers l'arrière ou dois rebondir pour remonter.</li><li>Une partie du pied se décolle parce que tu forces une position.</li><li>La profondeur change énormément d'une répétition à l'autre.</li><li>Une douleur vive ou persistante apparaît au genou, à la hanche, à la cheville ou au dos.</li></ul></div></section>

    <section className="articleSection"><div className="eyebrow">Amplitude et morphologie</div><h2>Un squat utile n'a pas une profondeur universelle.</h2><p>La morphologie, les proportions des segments, la mobilité disponible et la position des pieds influencent naturellement la forme du squat. Calis utilise donc la profondeur comme une variable de progression, pas comme un test moral de « bonne » ou « mauvaise » mobilité.</p><p>Si une amplitude te limite, explore ensuite la <Link className="textLink" href="/bibliotheque/mobilite-debutant">mobilité réellement utile à tes mouvements</Link> plutôt que de chercher à devenir souple partout.</p></section>

    <section className="articleSection"><div className="eyebrow">Simplifier</div><h2>Trois façons de rendre le squat apprenable.</h2><div className="mistakeList"><div><strong>Réduire la profondeur</strong><p>Descends seulement jusqu'au point où tu peux encore ralentir et repartir proprement.</p></div><div><strong>Utiliser un support</strong><p>Une chaise ou un appui stable peut donner un repère et diminuer la peur de tomber.</p></div><div><strong>Ralentir</strong><p>Une descente calme révèle mieux où l'équilibre ou la mobilité commencent à se dégrader.</p></div></div></section>

    <section className="articleSection"><div className="eyebrow">Critère de progression</div><h2>Gagne du contrôle avant de chercher plus bas ou plus difficile.</h2><p>Tu peux progressivement augmenter l'amplitude quand plusieurs répétitions restent stables, que tu peux ralentir la descente et que la remontée ne dépend pas d'un rebond ou d'une compensation brusque. Le progrès peut être une amplitude légèrement plus grande, mais aussi un même squat devenu plus calme.</p></section>

    <div className="nextGrid compactNextGrid"><Link className="nextCard" href="/bibliotheque/mobilite-debutant"><strong>Une amplitude me bloque</strong><span>Explorer ma mobilité utile →</span></Link><Link className="nextCard" href="/bibliotheque/par-ou-commencer-calisthenie"><strong>Je construis toutes mes bases</strong><span>Revenir au parcours débutant →</span></Link></div>
    <Link className="textLink" href="/commencer">← Revenir à « Commencer »</Link>
  </article>;
}
