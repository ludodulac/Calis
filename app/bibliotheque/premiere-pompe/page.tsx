import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Première pompe : progression quand on n'arrive pas à faire de pompe",
  description: "Une progression simple pour réussir sa première pompe : trouver une hauteur adaptée, construire une poussée contrôlée et reconnaître les vrais progrès.",
  alternates: { canonical: "/bibliotheque/premiere-pompe/" },
  openGraph: { title: "Réussir sa première pompe", description: "Pars de la variante que tu contrôles aujourd'hui et rapproche-toi progressivement du sol.", type: "article", url: "/bibliotheque/premiere-pompe/" },
};

export default function FirstPushUpPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Pompes · partir de zéro</div>
      <h1>Tu n'arrives pas encore à faire une pompe ? Trouve d'abord la version que ton corps peut apprendre.</h1>
      <p className="lead">La pompe au sol n'est pas le niveau zéro. Si elle est trop difficile, remonte tes mains sur un support stable : tu gardes la même famille de mouvement tout en réglant la charge à ton niveau actuel.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Première pompe au sol</strong></div>
        <div><span>Point de départ</span><strong>Une poussée contrôlable</strong></div>
        <div><span>Matériel</span><strong>Un support stable suffit</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse immédiate</div>
        <h2>Commence assez facile pour pouvoir réellement apprendre.</h2>
        <p>Choisis un mur, un plan de travail solide, une rambarde stable ou un autre support qui ne peut ni glisser ni basculer. Plus tes mains sont hautes, plus la poussée est généralement accessible. Descends progressivement la hauteur lorsque le mouvement devient prévisible et répétable.</p>
        <p>Ce principe répond à un problème fréquent chez les vrais débutants : beaucoup de programmes dits « débutants » commencent déjà trop haut. Il existe pourtant une variante adaptée bien avant la première pompe au sol.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Ton chemin</div>
        <h2>Ne saute pas du mur directement au sol.</h2>
        <ol className="contentList numberedList">
          <li><strong>Trouve une hauteur confortable :</strong> tu peux descendre et remonter sans que le mouvement s'effondre.</li>
          <li><strong>Rends la répétition régulière :</strong> mains stables, corps organisé, descente volontaire et remontée reconnaissable.</li>
          <li><strong>Abaisse légèrement le support :</strong> seulement quand la version actuelle n'exige plus une lutte différente à chaque répétition.</li>
          <li><strong>Approche du sol :</strong> utilise plusieurs hauteurs intermédiaires plutôt que de transformer chaque séance en test de la pompe complète.</li>
          <li><strong>Teste le sol ponctuellement :</strong> quand une variante basse est solide, vérifie si la première répétition complète apparaît.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Une difficulté réelle, mais encore maîtrisable.</h2>
          <ul><li>Les mains poussent fermement le support.</li><li>Poitrine, triceps et épaules participent à l'effort.</li><li>Le tronc aide à garder le corps organisé.</li><li>Tu peux reconnaître la même trajectoire d'une répétition à l'autre.</li></ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>La difficulté ne doit pas remplacer le contrôle.</h2>
          <ul><li>Le support bouge, glisse ou semble fragile.</li><li>Le bassin et la poitrine partent dans deux mouvements complètement différents.</li><li>Tu raccourcis brutalement l'amplitude pour terminer chaque répétition.</li><li>Une douleur vive, inhabituelle ou persistante apparaît au poignet, au coude ou à l'épaule.</li></ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Reconnaître le progrès</div>
        <h2>Ta première victoire n'est pas forcément la pompe au sol.</h2>
        <p>Un support plus bas, une descente plus calme, une remontée moins désorganisée ou plusieurs répétitions qui se ressemblent sont déjà des progrès. Cette manière de mesurer évite que les semaines avant la première pompe donnent l'impression de « ne rien réussir ».</p>
        <p>Il n'existe pas de délai universel pour atteindre le sol. Morphologie, niveau initial, régularité, récupération et difficulté choisie changent le rythme. Calis préfère te donner un critère observable plutôt qu'une promesse en nombre de jours.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Si tu bloques</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe"><strong>Je ne comprends pas ce qui bloque</strong><span>Faire le diagnostic →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pompes-inclinees"><strong>Je veux régler précisément la difficulté</strong><span>Utiliser les pompes inclinées →</span></Link>
          <Link className="nextCard" href="/bibliotheque/pompe-technique"><strong>Je peux déjà faire une pompe</strong><span>Stabiliser ma technique →</span></Link>
          <Link className="nextCard" href="/pompes"><strong>Je veux voir tout le parcours</strong><span>Retourner au hub Pompes →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Santé</div>
        <h2>Calis t'aide à apprendre un mouvement, pas à diagnostiquer une douleur.</h2>
        <p>Une difficulté musculaire normale n'est pas la même chose qu'une douleur préoccupante. Si une douleur est vive, persistante, s'aggrave ou t'inquiète, arrête ou adapte l'exercice et demande l'avis d'un professionnel de santé qualifié. Le contenu de Calis est éducatif et ne remplace pas un avis médical.</p>
      </section>
    </article>
  );
}
