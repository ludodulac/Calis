import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pompes inclinées : progresser vers sa première pompe au sol",
  description: "Utilise les pompes inclinées pour régler précisément la difficulté, construire une poussée contrôlée et te rapprocher progressivement de ta première pompe au sol.",
  alternates: { canonical: "/bibliotheque/pompes-inclinees/" },
  openGraph: { title: "Pompes inclinées : régler la difficulté pour progresser", description: "Une progression simple : choisir un support adapté, construire des répétitions stables puis abaisser progressivement les mains.", type: "article", url: "/bibliotheque/pompes-inclinees/" },
};

export default function InclinePushUpsPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Pompes · partir de zéro</div>
      <h1>Le sol est trop difficile ? Remonte tes mains plutôt que de forcer une mauvaise pompe.</h1>
      <p className="lead">La pompe inclinée conserve l'idée essentielle du mouvement tout en réduisant la difficulté. Plus le support est haut, plus la poussée est généralement accessible. Ton objectif n'est pas de descendre le support le plus vite possible, mais de trouver une hauteur où tu peux réellement apprendre.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Construire ta poussée</strong></div>
        <div><span>Réglage principal</span><strong>Hauteur du support</strong></div>
        <div><span>Étape suivante</span><strong>Première pompe au sol</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>Choisis une hauteur qui te permet encore de contrôler le mouvement.</h2>
        <p>Utilise un support stable : mur, barre fixe basse, plan de travail solide ou autre surface qui ne peut pas glisser ni basculer. Place les mains dessus et teste quelques répétitions. Si tu perds immédiatement ton organisation ou ne peux pas remonter, augmente la hauteur. Si le mouvement est très facile et reste propre, tu peux essayer un support un peu plus bas.</p>
        <p>La hauteur n'est donc pas une catégorie fixe. C'est simplement le bouton qui te permet de régler l'exercice à ton niveau actuel.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Progression</div>
        <h2>Descends progressivement le support, pas ta qualité.</h2>
        <ol className="contentList numberedList">
          <li><strong>Trouve ton point de départ :</strong> une hauteur où tu peux descendre et remonter sans transformer complètement le mouvement.</li>
          <li><strong>Rends les répétitions reconnaissables :</strong> même installation, amplitude comparable et poitrine et bassin qui restent suffisamment liés.</li>
          <li><strong>Réduis légèrement la hauteur :</strong> lorsque cette version devient fiable, choisis un support un peu plus bas.</li>
          <li><strong>Approche le sol :</strong> répète ce processus sans considérer chaque baisse de hauteur comme une obligation définitive.</li>
          <li><strong>Teste le sol ponctuellement :</strong> quand une faible inclinaison est maîtrisée, vérifie si une première répétition au sol devient accessible.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal"><div className="eyebrow">Ce que tu dois ressentir</div><h2>Une vraie poussée, mais encore contrôlable.</h2><ul><li>Poitrine, triceps et épaules participent.</li><li>Le tronc relie le haut et le bas du corps.</li><li>Tu peux ralentir la descente au lieu de tomber vers le support.</li><li>La dernière répétition reste identifiable comme le même exercice.</li></ul></div>
        <div className="signalCard cautionSignal"><div className="eyebrow">À surveiller</div><h2>Un support trop bas peut simplement être trop difficile.</h2><ul><li>Le bassin et la poitrine remontent en deux temps très différents.</li><li>L'amplitude disparaît dès les premières répétitions.</li><li>Tu dois prendre de l'élan pour quitter le support.</li><li>Le support bouge, glisse ou n'est pas conçu pour recevoir ta charge.</li></ul></div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère</div>
        <h2>Quand abaisser les mains ?</h2>
        <p>Pas besoin d'un nombre magique de répétitions. Abaisse légèrement le support quand tu peux reproduire plusieurs répétitions avec une amplitude et une organisation suffisamment stables, sans que chaque répétition devienne une lutte différente. Si la nouvelle hauteur casse immédiatement le mouvement, remonte simplement d'un cran.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Et ensuite ?</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/premiere-pompe"><strong>Je me rapproche du sol</strong><span>Construire ma première pompe →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pompe-technique"><strong>Je fais déjà des pompes</strong><span>Stabiliser ma technique →</span></Link>
          <Link className="nextCard" href="/pompes"><strong>Je ne sais pas ce qui me bloque</strong><span>Revenir au diagnostic pompes →</span></Link>
        </div>
      </section>

      <Link className="textLink" href="/pompes">← Revenir au parcours complet des pompes</Link>
    </article>
  );
}
