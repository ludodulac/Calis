import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Pompes : apprendre à faire sa première pompe et progresser",
  description: "Tu n'arrives pas à faire une pompe ? Trouve une difficulté adaptée, apprends les pompes inclinées, réussis ta première répétition puis stabilise ta technique.",
  alternates: { canonical: "/pompes/" },
  openGraph: { title: "Pompes : de zéro à une poussée solide", description: "Pars de ton problème actuel et construis progressivement ta première pompe puis une technique reproductible.", type: "article", url: "/pompes/" },
};

const situations = [
  ["Je n'arrive pas encore à faire une pompe au sol", "Ne répète pas seulement des tentatives maximales. Commence plus haut pour trouver une poussée que tu peux réellement contrôler.", "/bibliotheque/pompes-inclinees", "Trouver une version plus facile"],
  ["Je descends mais je n'arrive pas à remonter", "Réduis la difficulté sans changer complètement le mouvement, puis rapproche progressivement ton corps du sol.", "/bibliotheque/premiere-pompe", "Construire ma première pompe"],
  ["Je fais des pompes mais ma technique change vite", "Stabilise l'alignement, la trajectoire et une amplitude reproductible avant de chercher davantage de répétitions.", "/bibliotheque/pompe-technique", "Améliorer ma technique"],
  ["Je veux devenir plus fort en poussée", "La pompe est un socle. Une fois stable, tu pourras augmenter la difficulté ou explorer une autre branche comme les dips.", "/dips", "Découvrir la suite"],
] as const;

export default function PushUpsPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "pompes");

  return (
    <>
      <section className="hero shell"><div className="heroGrid"><div><div className="eyebrow">Pompes · progression débutant</div><h1>Apprendre les pompes : pars de ce que tu peux pousser aujourd'hui.</h1><p className="lead">Si la pompe au sol est trop difficile, ce n'est pas encore le bon exercice d'entraînement. Ajuste la hauteur, construis une répétition contrôlée puis rapproche progressivement le mouvement du sol.</p><div className="actions"><Link className="button primary" href="/bibliotheque/premiere-pompe">Construire ma première pompe</Link><Link className="button secondary" href="/bibliotheque/pompe-technique">Je fais déjà des pompes</Link></div></div><aside className="manifesto"><span>Réponse rapide</span><strong>La meilleure première étape n'est pas forcément le sol.</strong><p>Une pompe inclinée conserve l'idée du mouvement tout en réduisant la difficulté. Trouve une hauteur où tu peux descendre et remonter avec contrôle, puis rends progressivement cette version plus exigeante.</p></aside></div></section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading wide"><div className="eyebrow">Où en es-tu ?</div><h2>Choisis ton problème actuel, pas une étiquette de niveau.</h2><p>Tu n'as pas besoin de connaître les variantes de callisthénie pour entrer dans le parcours.</p></div><div className="cardGrid">{situations.map(([title,text,href,label]) => <Link className="plainCard" href={href} key={title}><h3>{title}</h3><p>{text}</p><span className="textLink">{label} →</span></Link>)}</div></div></section>

      <section className="section shell"><div className="sectionHeading wide"><div className="eyebrow">Première pompe</div><h2>Incliner → rapprocher du sol → réussir → stabiliser.</h2><p>La hauteur du support sert de réglage. Quand une version devient reproductible, réduis progressivement l'inclinaison au lieu de transformer chaque séance en test au sol.</p></div><div className="journeyGrid"><Link className="journeyCard" href="/bibliotheque/pompes-inclinees"><span>01 · Ajuster</span><strong>Pompes inclinées</strong><p>Trouve une hauteur où poitrine et bassin peuvent descendre et remonter ensemble.</p><b>Choisir ma difficulté →</b></Link><Link className="journeyCard" href="/bibliotheque/premiere-pompe"><span>02 · Réussir</span><strong>Première pompe au sol</strong><p>Transforme progressivement ta poussée inclinée en première répétition contrôlée.</p><b>Suivre la progression →</b></Link><Link className="journeyCard" href="/bibliotheque/pompe-technique"><span>03 · Stabiliser</span><strong>Technique de pompe</strong><p>Rends ta répétition cohérente avant de chercher volume ou variantes plus difficiles.</p><b>Comprendre la technique →</b></Link></div></section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading wide"><div className="eyebrow">Questions fréquentes</div><h2>Les réponses doivent te permettre d'agir tout de suite.</h2></div><div className="cardGrid"><article className="plainCard"><h3>Pourquoi je n'arrive pas à faire une pompe ?</h3><p>Le mouvement au sol demande peut-être encore trop de force relative. Utilise une inclinaison qui te permet de pratiquer la même famille de poussée sans rester bloqué.</p><Link className="textLink" href="/bibliotheque/pompes-inclinees">Commencer par les pompes inclinées →</Link></article><article className="plainCard"><h3>Faut-il commencer sur les genoux ?</h3><p>Ce n'est pas obligatoire. L'inclinaison offre un réglage très progressif de la difficulté et permet de conserver un corps allongé pendant la poussée.</p><Link className="textLink" href="/bibliotheque/premiere-pompe">Voir le chemin vers la première pompe →</Link></article><article className="plainCard"><h3>Jusqu'où faut-il descendre ?</h3><p>Utilise une amplitude que tu contrôles et peux reproduire. Ne force pas une profondeur douloureuse simplement pour respecter une règle abstraite.</p><Link className="textLink" href="/bibliotheque/pompe-technique">Comprendre l'amplitude et la technique →</Link></article></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Le parcours pompe actuel</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>

      <section className="section shell"><div className="split"><div><div className="eyebrow">Une branche possible</div><h2>Quand ta poussée devient solide, les dips ouvrent un autre problème.</h2><p>Ce n'est pas une étape obligatoire. Les dips demandent une poussée et une stabilité différentes : choisis-les parce que cette capacité t'intéresse, pas parce qu'une liste te dit qu'ils viennent après les pompes.</p></div><Link className="button secondary" href="/dips">Voir le parcours dips</Link></div></section>
    </>
  );
}
