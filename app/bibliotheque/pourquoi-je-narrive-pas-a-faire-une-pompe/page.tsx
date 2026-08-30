import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi je n'arrive pas à faire une pompe ? Diagnostic débutant",
  description: "Tu n'arrives pas à faire une pompe ? Identifie si le problème vient surtout de la difficulté au sol, du contrôle du corps, des appuis ou d'une progression mal réglée.",
  alternates: { canonical: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe/" },
  openGraph: { title: "Pourquoi je n'arrive pas à faire une pompe ?", description: "Un diagnostic simple pour choisir la bonne étape au lieu de répéter des échecs au sol.", type: "article", url: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-pompe/" },
};

const blockers = [
  { title: "Je descends mais je ne remonte pas", text: "Le sol demande probablement encore trop de force pour apprendre avec de bonnes répétitions.", href: "/bibliotheque/pompes-inclinees", action: "Régler la difficulté avec une pompe inclinée" },
  { title: "Mon bassin tombe ou monte avant ma poitrine", text: "La difficulté dépasse peut-être ta capacité à garder le corps organisé pendant la poussée.", href: "/bibliotheque/pompe-technique", action: "Revoir les repères de technique" },
  { title: "Je fais une répétition, puis tout se dégrade", text: "Ta première pompe existe peut-être déjà, mais elle n'est pas encore suffisamment reproductible pour accumuler du volume.", href: "/bibliotheque/premiere-pompe", action: "Consolider ma première pompe" },
  { title: "Mes poignets me limitent", text: "Une gêne d'appui peut empêcher de pratiquer suffisamment, même si la force de poussée n'est pas le seul problème.", href: "/bibliotheque/poignets-handstand", action: "Explorer la préparation des poignets" },
];

export default function PushUpDiagnosticPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Pompes · diagnostic</div>
      <h1>Pourquoi je n'arrive pas à faire une pompe ? Trouve le maillon qui bloque.</h1>
      <p className="lead">Échouer au sol ne signifie pas que tu dois continuer à tester le sol. Une pompe complète combine suffisamment de force, une difficulté adaptée et la capacité à garder le mouvement organisé. Le plus utile est d'identifier ce qui cède en premier.</p>

      <section className="articleSection">
        <div className="eyebrow">Test rapide</div>
        <h2>Observe ton échec au lieu de compter seulement les répétitions.</h2>
        <p>Essaie une répétition sans aller jusqu'à une lutte prolongée. Demande-toi ce qui arrive en premier : tu ne peux pas quitter la position basse, ton corps se désorganise, tes appuis deviennent gênants ou tu réussis une répétition mais pas une deuxième comparable. Cette observation suffit souvent à choisir une meilleure étape de travail.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Ton blocage ressemble à quoi ?</div>
        <div className="nextGrid">
          {blockers.map((blocker) => <Link className="nextCard" href={blocker.href} key={blocker.title}><strong>{blocker.title}</strong><p>{blocker.text}</p><span>{blocker.action} →</span></Link>)}
        </div>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal"><div className="eyebrow">À rechercher</div><h2>Une version où tu peux apprendre.</h2><ul><li>Tu contrôles la descente.</li><li>Tu peux réellement repousser le support.</li><li>Poitrine et bassin restent suffisamment liés.</li><li>Plusieurs essais ressemblent au même mouvement.</li></ul></div>
        <div className="signalCard cautionSignal"><div className="eyebrow">À éviter</div><h2>Transformer chaque séance en examen.</h2><ul><li>Tester sans cesse une variante encore trop difficile.</li><li>Raccourcir de plus en plus l'amplitude pour sauver un chiffre.</li><li>Copier une position précise malgré une gêne articulaire.</li><li>Continuer à charger une douleur vive ou persistante.</li></ul></div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Le principe Calis</div>
        <h2>Tester te dit où tu en es. T'entraîner doit te donner des répétitions utiles.</h2>
        <p>Si la pompe au sol échoue, utilise l'information pour choisir une régression adaptée. Une pompe inclinée n'est pas un exercice « inférieur » : c'est un moyen de régler la charge relative et d'accumuler de la pratique de qualité avant de revenir au sol.</p>
      </section>

      <div className="actions"><Link className="button primary" href="/bibliotheque/pompes-inclinees">Commencer par les pompes inclinées</Link><Link className="button secondary" href="/pompes">Voir tout le parcours pompes</Link></div>
    </article>
  );
}
