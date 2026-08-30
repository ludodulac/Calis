import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traction explosive : progresser vers le muscle-up",
  description: "Apprends à transformer une traction contrôlée en tirage plus haut et plus rapide, avec des repères de progression utiles avant le muscle-up.",
  alternates: { canonical: "/bibliotheque/traction-explosive/" },
  openGraph: {
    title: "Traction explosive : progresser vers le muscle-up",
    description: "Construire un tirage haut et rapide sans confondre explosivité, élan et répétition brouillonne.",
  },
};

export default function ExplosivePullUpPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Tirer · Intermédiaire</div>
        <h1>Comment rendre sa traction plus explosive pour se rapprocher du muscle-up ?</h1>
        <p className="lead">Faire beaucoup de tractions ne garantit pas à lui seul un tirage assez haut pour le muscle-up. L'objectif ici est d'apprendre à produire de la vitesse et à continuer à tirer au-delà d'une traction ordinaire, sans transformer chaque essai en grand balancement.</p>
        <div className="actions">
          <Link className="button primary" href="/bibliotheque/traction-technique">Vérifier ma traction de base</Link>
          <Link className="button secondary" href="/tractions">Revenir au parcours traction</Link>
        </div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="eyebrow">Réponse rapide</div>
        <h2>Une traction explosive n'est pas seulement une traction faite plus vite.</h2>
        <p>Tu cherches à accélérer dès le début du tirage et à conserver cette intention pour amener le haut du corps plus près de la barre. La hauteur atteinte, la trajectoire et la capacité à répéter un geste propre sont plus informatives qu'un nombre magique de répétitions.</p>
      </div></section>

      <section className="section shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Avant de chercher plus haut</div><h2>Pars d'une traction que tu contrôles déjà.</h2></div>
        <div className="mistakeList">
          <div><strong>Ta répétition ordinaire est encore instable</strong><p>Consolide d'abord départ, trajectoire et descente. L'explosivité amplifie facilement les compensations.</p></div>
          <div><strong>Tu sais faire quelques tractions propres</strong><p>Tu peux commencer à consacrer des répétitions fraîches à l'intention de tirer vite et haut, sans attendre un seuil universel de répétitions.</p></div>
          <div><strong>Tu fais beaucoup de tractions mais tu ne montes pas plus haut</strong><p>Ton endurance en traction et ta capacité à produire rapidement de la force ne sont pas exactement la même qualité. Travaille spécifiquement le tirage haut.</p></div>
        </div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Progression</div><h2>Fais monter la qualité avant la difficulté.</h2></div>
        <div className="mistakeList">
          <div><strong>1. Accélère une traction normale</strong><p>Depuis un départ stable, pense à tirer fort dès le début plutôt qu'à augmenter progressivement l'effort quand tu bloques déjà.</p></div>
          <div><strong>2. Cherche progressivement plus de hauteur</strong><p>Le menton au-dessus de la barre n'est plus la destination. Observe si le haut de la poitrine se rapproche davantage de la barre sans perte massive de contrôle.</p></div>
          <div><strong>3. Garde des essais courts et frais</strong><p>Quand la vitesse et la hauteur chutent nettement, la série ne travaille plus exactement la même qualité. Ne transforme pas systématiquement l'exercice en test d'endurance.</p></div>
          <div><strong>4. Distingue élan et puissance de tirage</strong><p>Un peu de mouvement du corps peut apparaître selon le style visé, mais un grand balancement qui produit toute la hauteur masque ce que ton tirage sait réellement faire.</p></div>
        </div>
      </div></section>

      <section className="section shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Signature Calis</div><h2>Ce que tu dois ressentir et observer.</h2></div>
        <div className="mistakeList">
          <div><strong>À rechercher</strong><p>Une intention très nette de tirer vite, une montée qui ne s'éteint pas immédiatement après le départ et une hauteur obtenue principalement par le tirage.</p></div>
          <div><strong>À surveiller</strong><p>Épaules ou coudes douloureux, prise qui devient incontrôlable, chute brutale ou besoin d'un élan toujours plus grand. Une douleur inhabituelle ou persistante mérite de réduire ou d'arrêter la charge et, si nécessaire, l'avis d'un professionnel de santé qualifié.</p></div>
        </div>
      </section>

      <section className="section sectionSoft"><div className="shell narrow">
        <div className="eyebrow">Le piège du muscle-up</div>
        <h2>Ne transforme pas un chiffre de tractions en faux prérequis universel.</h2>
        <p>Les communautés de pratiquants montrent justement que certaines personnes accumulent de nombreuses tractions strictes sans réussir le passage au-dessus de la barre. Calis utilisera donc des critères de capacité — contrôle, hauteur, explosivité et apprentissage de la transition — plutôt qu'une promesse du type « X tractions = muscle-up ».</p>
        <p>Le muscle-up aura son propre parcours : il ne sera pas présenté comme une simple récompense automatique après un compteur de répétitions.</p>
      </div></section>

      <section className="section shell narrow">
        <div className="eyebrow">Critère pour continuer</div>
        <h2>Ta traction haute devient intentionnelle, pas accidentelle.</h2>
        <p>Tu es prêt à explorer la suite lorsque tu peux produire plusieurs essais de tirage nettement plus hauts que ta traction ordinaire, avec une trajectoire que tu comprends et sans dépendre d'un balancement incontrôlé. Il n'existe pas de hauteur ou de nombre de répétitions universel garantissant un muscle-up.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/10-tractions">Construire des tractions fiables</Link><Link className="button secondary" href="/bibliotheque/dips-technique">Renforcer aussi ma poussée</Link></div>
      </section>
    </>
  );
}
