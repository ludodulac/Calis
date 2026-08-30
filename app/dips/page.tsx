import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Dips débutant : apprendre ses premiers dips et progresser",
  description: "Apprends les dips progressivement : appui, amplitude adaptée, technique, erreurs fréquentes et chemin vers tes premières répétitions contrôlées.",
  alternates: { canonical: "/dips/" },
  openGraph: { title: "Dips débutant : apprendre ses premiers dips", description: "Trouve ton point de départ et progresse vers des dips contrôlés.", url: "/dips/" },
};

export default function DipsPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "dips");

  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Dips · débuter et progresser</div>
        <h1>Tu veux réussir tes premiers dips ? Commence par trouver l'étape que tu contrôles déjà.</h1>
        <p className="lead">Les dips demandent de supporter son poids, de contrôler la descente puis de repousser. Inutile de chercher tout de suite la profondeur maximale : construis d'abord une répétition que tu peux maîtriser.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/dips-debutant">Construire mes premiers dips</Link><Link className="button secondary" href="/bibliotheque/dips-technique">Comprendre la technique</Link></div>
      </section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Trouve ton problème</div><h2>À quel moment le mouvement se bloque ?</h2><p>Pars de ce que tu observes réellement plutôt que de choisir un exercice au hasard.</p></div><div className="journeyGrid">
        <Link className="journeyCard" href="/bibliotheque/dips-debutant"><span>Je débute</span><strong>Je ne suis pas stable en appui</strong><p>Construis d'abord une position haute sûre et reproductible.</p><b>Commencer par l'appui →</b></Link>
        <Link className="journeyCard" href="/bibliotheque/dips-debutant"><span>Je descends</span><strong>Je n'arrive pas à remonter</strong><p>Réduis la difficulté et développe la poussée sans transformer chaque tentative en maximum.</p><b>Adapter la progression →</b></Link>
        <Link className="journeyCard" href="/bibliotheque/dips-technique"><span>Je fais des répétitions</span><strong>Ma trajectoire devient instable</strong><p>Reviens sur les repères d'appui, de descente et de retour en position haute.</p><b>Vérifier ma technique →</b></Link>
        <Link className="journeyCard" href="/bibliotheque/dips-technique"><span>Je doute</span><strong>Je ne sais pas jusqu'où descendre</strong><p>Travaille une amplitude contrôlée et confortable plutôt qu'une profondeur imposée à tout le monde.</p><b>Comprendre l'amplitude →</b></Link>
      </div></div></section>

      <section className="section shell narrow"><div className="sectionHeading"><div className="eyebrow">Chemin simple</div><h2>Appui → descente contrôlée → remontée → répétitions propres</h2></div><div className="mistakeList"><div><strong>1. Appui haut</strong><p>Supporte ton poids avec une position que tu peux stabiliser.</p></div><div><strong>2. Descente adaptée</strong><p>Explore seulement l'amplitude que tu contrôles sans douleur.</p></div><div><strong>3. Remontée</strong><p>Repousse sans rebond et retrouve une position haute nette.</p></div><div><strong>4. Répétabilité</strong><p>Augmente progressivement le travail quand la qualité ne s'effondre plus d'une répétition à l'autre.</p></div></div></section>

      <section className="section sectionSoft"><div className="shell narrow"><div className="sectionHeading"><div className="eyebrow">Questions fréquentes</div><h2>Ce qu'un débutant se demande souvent</h2></div><div className="mistakeList"><div><strong>Pourquoi je n'arrive pas à faire de dips ?</strong><p>Le blocage peut venir de l'appui, de la force de poussée, de l'amplitude choisie ou simplement d'une difficulté trop élevée. La progression débutant sert à isoler ces étapes.</p></div><div><strong>Faut-il descendre le plus bas possible ?</strong><p>Non. Une amplitude n'est utile que si elle reste contrôlée et tolérée. Elle peut évoluer avec ta capacité.</p></div><div><strong>Les dips doivent-ils faire mal aux épaules ?</strong><p>Non. Une douleur n'est pas un critère de progression. Réduis ou arrête ce qui la provoque et demande un avis professionnel si elle persiste ou t'inquiète.</p></div></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Continue selon ton niveau</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
    </>
  );
}
