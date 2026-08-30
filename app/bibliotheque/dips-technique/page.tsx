import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment faire des dips : technique, amplitude et erreurs",
  description: "Apprends les dips avec des repères simples : appui haut, descente contrôlée, amplitude adaptée, remontée, sensations et erreurs fréquentes.",
  alternates: { canonical: "/bibliotheque/dips-technique/" },
  openGraph: { title: "Comment faire des dips propres ?", description: "Des repères pour construire des dips contrôlés sans imposer une profondeur identique à tout le monde.", type: "article", url: "/bibliotheque/dips-technique/" },
};

export default function DipsTechniquePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Dips · technique</div>
      <h1>Comment faire des dips propres ? Construis d'abord un appui que tu contrôles.</h1>
      <p className="lead">Le dip n'est pas une compétition de profondeur. Cherche une position haute stable, une descente volontaire, une amplitude que tes épaules tolèrent et une remontée sans rebond.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Dips reproductibles</strong></div>
        <div><span>Capacité</span><strong>Pousser en appui</strong></div>
        <div><span>Priorité</span><strong>Stabilité avant profondeur</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>Une bonne répétition commence avant la descente.</h2>
        <p>Installe un appui haut stable entre les barres. Descends seulement aussi loin que tu peux garder le mouvement contrôlé, puis repousse les barres pour revenir clairement en haut. Une répétition utile ressemble suffisamment à la précédente pour que tu puisses comparer tes progrès.</p>
        <p>Si tenir ton poids en appui ou contrôler une petite descente est déjà difficile, commence par la <Link className="textLink" href="/bibliotheque/dips-debutant">progression pour réussir tes premiers dips</Link> plutôt que de forcer une répétition complète.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Les quatre moments</div>
        <h2>Lis le dip comme un mouvement complet.</h2>
        <ol className="contentList numberedList">
          <li><strong>Appui haut :</strong> stabilise les mains, les bras et le tronc avant de commencer.</li>
          <li><strong>Descente :</strong> plie progressivement les coudes et laisse le buste trouver une inclinaison contrôlable.</li>
          <li><strong>Point bas :</strong> utilise une amplitude que tu peux tolérer et inverser sans rebond ni perte brutale de position.</li>
          <li><strong>Remontée :</strong> pousse les barres jusqu'à retrouver un appui haut net et stable.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Une poussée forte, mais encore maîtrisée.</h2>
          <ul>
            <li>Triceps, poitrine et épaules participent à la remontée.</li>
            <li>Les mains restent stables sur les barres.</li>
            <li>Le tronc accompagne le mouvement au lieu de se balancer librement.</li>
            <li>Tu peux identifier clairement le haut, la descente et le retour.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Plus profond n'est pas automatiquement meilleur.</h2>
          <ul>
            <li>Tu tombes dans le bas puis rebondis pour remonter.</li>
            <li>La profondeur augmente au prix d'une perte complète de contrôle.</li>
            <li>Les épaules ou les poignets te donnent une douleur vive ou persistante.</li>
            <li>Chaque répétition utilise une trajectoire très différente.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Amplitude</div>
        <h2>Construis ton amplitude au lieu de la copier.</h2>
        <p>La morphologie, la mobilité, l'écartement des barres et l'expérience changent la position confortable. Calis ne fixe donc pas une profondeur universelle comme condition absolue d'un « vrai » dip. Utilise une amplitude cohérente que tu contrôles, puis développe-la progressivement si cela sert ton objectif et reste bien toléré.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Si quelque chose bloque</div>
        <h2>Identifie le maillon faible avant d'ajouter des répétitions.</h2>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/dips-debutant"><strong>L'appui est instable</strong><span>Revenir à la progression débutant →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pompe-technique"><strong>La poussée générale manque</strong><span>Consolider les pompes →</span></Link>
          <Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Les appuis gênent mes poignets</strong><span>Explorer la préparation des poignets →</span></Link>
          <Link className="nextCard" href="/dips"><strong>Je veux voir le parcours</strong><span>Revenir au hub dips →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Critère de progression</div>
        <h2>Fais grandir ce que tu peux répéter.</h2>
        <p>Avant d'ajouter beaucoup de volume, une amplitude plus exigeante ou du lest, cherche plusieurs répétitions dont le départ, la descente et le retour restent comparables. La difficulté doit augmenter sans faire disparaître le mouvement que tu essaies de développer.</p>
      </section>

      <Link className="textLink" href="/dips">← Revenir au parcours complet des dips</Link>
    </article>
  );
}
