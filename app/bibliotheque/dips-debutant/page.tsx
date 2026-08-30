import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dips débutant : progression pour réussir ses premiers dips",
  description: "Une progression simple pour apprendre les dips : appui, difficulté adaptée, descente contrôlée, remontée et critères pour progresser.",
  alternates: { canonical: "/bibliotheque/dips-debutant/" },
  openGraph: { title: "Dips débutant : réussir ses premiers dips", description: "Construis l'appui, la descente et la poussée étape par étape.", url: "/bibliotheque/dips-debutant/" },
};

export default function DipsDebutantPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Progression · pousser · débutant</div>
        <h1>Réussir ses premiers dips : construis d'abord le mouvement que tu peux contrôler.</h1>
        <p className="lead">Si un dip complet est trop difficile, ce n'est pas une raison pour répéter des échecs. Sépare le mouvement : stabilise l'appui, choisis une difficulté adaptée, contrôle une petite descente puis construis progressivement la remontée.</p>
        <div className="actions"><Link className="button primary" href="#depart">Trouver mon point de départ</Link><Link className="button secondary" href="/bibliotheque/dips-technique">Voir la technique des dips</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Réponse rapide</div><h2>Tu n'as pas besoin de savoir faire un dip pour commencer à travailler les dips.</h2></div><p>Le bon exercice est celui qui conserve l'idée du mouvement tout en te laissant assez de contrôle pour apprendre. Selon ton niveau, cela peut simplement être l'appui haut, une amplitude réduite ou une variante assistée avec les pieds sur un support stable.</p></div></section>

      <section id="depart" className="section shell"><div className="sectionHeading"><div className="eyebrow">Diagnostic</div><h2>Commence à l'étape qui ressemble à ta situation</h2></div><div className="journeyGrid">
        <div className="journeyCard"><span>Étape 1</span><strong>L'appui est déjà difficile</strong><p>Ne cherche pas encore à descendre. Apprends à supporter ton poids entre les barres avec une position stable et une sortie facile.</p></div>
        <div className="journeyCard"><span>Étape 2</span><strong>L'appui est stable, mais la descente t'emporte</strong><p>Réduis l'amplitude. Descends seulement jusqu'au point où tu peux encore ralentir et revenir proprement.</p></div>
        <div className="journeyCard"><span>Étape 3</span><strong>Tu contrôles la descente mais pas la remontée complète</strong><p>Utilise une assistance stable ou une amplitude plus courte pour pratiquer une vraie poussée plutôt que des tentatives maximales.</p></div>
        <div className="journeyCard"><span>Étape 4</span><strong>Tu fais déjà un dip</strong><p>Rends d'abord cette répétition reproductible. La profondeur et le nombre de répétitions viennent ensuite.</p></div>
      </div></section>

      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Technique</div><h2>Une répétition simple à comprendre</h2></div><div className="mistakeList"><div><strong>1. Installe l'appui</strong><p>Prends les barres fermement et assure-toi que ton support ne bouge pas. Commence dans une position haute que tu contrôles.</p></div><div><strong>2. Descends sans te laisser tomber</strong><p>Plie progressivement les coudes. Garde une trajectoire que tu peux ralentir à tout moment.</p></div><div><strong>3. Arrête l'amplitude là où ton contrôle s'arrête</strong><p>Il n'existe pas une profondeur unique à imposer à tous les corps et à tous les niveaux.</p></div><div><strong>4. Repousse</strong><p>Pousse sur les barres et retrouve une position haute stable sans utiliser un rebond pour sortir du bas.</p></div></div></div></section>

      <section className="section shell narrow"><div className="sectionHeading"><div className="eyebrow">Signature Calis</div><h2>Ce que tu dois ressentir</h2></div><p>Une pression solide dans les mains, un effort de poussée qui augmente à mesure que la difficulté augmente et surtout la sensation que tu peux encore contrôler la trajectoire. Une répétition difficile peut demander beaucoup d'effort ; elle ne doit pas devenir une chute entre les barres.</p><div className="callout"><strong>Ce que tu n'as pas à accepter comme normal</strong><p>Douleur vive, sensation inquiétante dans l'épaule ou perte de contrôle brutale. Réduis la difficulté ou arrête le mouvement ; si une douleur persiste ou t'inquiète, demande un avis professionnel.</p></div></section>

      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Progression</div><h2>Comment rendre l'exercice plus facile ou plus difficile</h2></div><div className="mistakeList"><div><strong>Plus facile</strong><p>Réduis l'amplitude, utilise une assistance stable avec les pieds ou travaille seulement l'appui si c'est déjà ton maillon limitant.</p></div><div><strong>Plus difficile</strong><p>Réduis progressivement l'aide, augmente l'amplitude seulement si elle reste contrôlée, puis construis davantage de répétitions propres.</p></div><div><strong>Pas de chiffre magique</strong><p>Un nombre universel de répétitions ne décide pas à lui seul que tu es prêt. Observe surtout stabilité, contrôle et reproductibilité.</p></div></div></div></section>

      <section className="section shell narrow"><div className="sectionHeading"><div className="eyebrow">Critère pour avancer</div><h2>Tu progresses quand le mouvement devient prévisible.</h2></div><p>Tu peux envisager une étape plus difficile lorsque tu contrôles l'appui, la descente et le retour sur plusieurs tentatives sans que chaque répétition change complètement. Si la technique reste le problème principal, travaille les repères avant d'ajouter de la difficulté.</p><div className="actions"><Link className="button primary" href="/bibliotheque/dips-technique">Affiner ma technique de dips</Link><Link className="button secondary" href="/dips">Retour au guide des dips</Link></div></section>
    </>
  );
}
