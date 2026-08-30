import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { v1Resources } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Handstand débutant : apprendre à tenir sur les mains progressivement",
  description: "Apprends le handstand sans multiplier les chutes : poignets, peur de tomber, travail au mur, équilibre avec les doigts et premières secondes libres.",
  alternates: { canonical: "/handstand/" },
  openGraph: {
    title: "Handstand débutant : apprendre à tenir sur les mains",
    description: "Trouve ce qui te bloque puis travaille les appuis, le mur et les corrections d'équilibre à une difficulté adaptée.",
    type: "article",
    url: "/handstand/",
  },
};

const situations = [
  ["Je ne sais pas comment commencer", "Commence par comprendre le chemin complet avant de chercher un record de secondes.", "/bibliotheque/handstand-debutant", "Voir la progression débutant"],
  ["Mes poignets me limitent", "Habitue progressivement tes mains et tes poignets à la charge avant d'augmenter le temps inversé.", "/bibliotheque/poignets-handstand", "Préparer mes appuis"],
  ["J'ai peur de tomber", "Apprends d'abord à entrer et surtout à sortir d'une position assistée sans transformer chaque essai en chute.", "/bibliotheque/handstand-mur", "Apprivoiser l'inversion au mur"],
  ["Je tiens au mur mais pas sans mur", "Le problème devient moins la force brute que la capacité à sentir et corriger de petits déplacements au-dessus des mains.", "/bibliotheque/handstand-debutant", "Passer du mur à l'équilibre"],
] as const;

export default function HandstandPage() {
  const resources = v1Resources.filter((resource) => resource.hub === "handstand");

  return (
    <>
      <section className="hero shell">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">Handstand · débutant</div>
            <h1>Apprends à tenir sur les mains sans transformer chaque tentative en chute.</h1>
            <p className="lead">Le handstand n'est pas seulement « avoir assez de force ». Tu dois pouvoir charger tes mains, entrer dans l'inversion, sortir en sécurité puis apprendre à corriger de petits déséquilibres. Calis te fait travailler le maillon qui te manque aujourd'hui.</p>
            <div className="actions"><Link className="button primary" href="/bibliotheque/handstand-debutant">Commencer le handstand</Link><Link className="button secondary" href="/bibliotheque/handstand-mur">Je travaille déjà au mur</Link></div>
          </div>
          <aside className="manifesto"><span>Réponse rapide</span><strong>Ne commence pas par essayer de tenir le plus longtemps possible.</strong><p>Construis d'abord une position dans laquelle tu peux entrer, respirer, sentir tes appuis et sortir volontairement. L'équilibre libre devient ensuite un problème de corrections de plus en plus fines.</p></aside>
        </div>
      </section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading wide"><div className="eyebrow">Qu'est-ce qui te bloque ?</div><h2>Choisis ton problème actuel, pas une catégorie technique.</h2><p>Tu n'as pas besoin de connaître le vocabulaire de la gymnastique pour savoir où commencer.</p></div><div className="cardGrid">{situations.map(([title,text,href,label]) => <Link className="plainCard" href={href} key={title}><h3>{title}</h3><p>{text}</p><span className="textLink">{label} →</span></Link>)}</div></div></section>

      <section className="section shell"><div className="sectionHeading wide"><div className="eyebrow">Chemin conseillé</div><h2>Préparer → inverser → contrôler → équilibrer</h2><p>Le record de secondes vient après la capacité à entrer, corriger et sortir proprement.</p></div><div className="journeyGrid"><Link className="journeyCard" href="/bibliotheque/poignets-handstand"><span>01 · Préparer</span><strong>Poignets et appuis</strong><p>Habitue progressivement les mains et les poignets à supporter davantage de charge.</p><b>Commencer →</b></Link><Link className="journeyCard" href="/bibliotheque/handstand-mur"><span>02 · Inverser</span><strong>Handstand au mur</strong><p>Apprends à être à l'envers avec une aide qui réduit le coût de l'équilibre.</p><b>Ouvrir →</b></Link><Link className="journeyCard" href="/bibliotheque/handstand-debutant"><span>03 · Équilibrer</span><strong>Premières corrections libres</strong><p>Passe progressivement du mur à de petits instants où tes mains gèrent réellement l'équilibre.</p><b>Voir la progression →</b></Link></div></section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading wide"><div className="eyebrow">Questions fréquentes</div><h2>Les questions qui changent ce que tu dois faire ensuite.</h2></div><div className="cardGrid"><article className="plainCard"><h3>Faut-il être très fort pour faire un handstand ?</h3><p>Il faut pouvoir supporter son poids sur les mains, mais l'équilibre ne se résume pas à la force. Une fois la position accessible, apprendre à sentir et corriger le centre de pression devient essentiel.</p><Link className="textLink" href="/bibliotheque/handstand-debutant">Comprendre la progression →</Link></article><article className="plainCard"><h3>Le mur est-il une mauvaise habitude ?</h3><p>Non s'il sert à réduire la difficulté. Le problème vient surtout de rester totalement dépendant du mur sans apprendre à réduire l'appui ni à sortir volontairement.</p><Link className="textLink" href="/bibliotheque/handstand-mur">Utiliser le mur intelligemment →</Link></article><article className="plainCard"><h3>Pourquoi je tombe toujours du même côté ?</h3><p>Ton corps dépasse probablement la zone que tes mains savent encore corriger. Réduis l'amplitude des essais et travaille des corrections plus petites plutôt que de multiplier les chutes complètes.</p><Link className="textLink" href="/bibliotheque/handstand-debutant">Apprendre les corrections →</Link></article><article className="plainCard"><h3>Les parallettes sont-elles nécessaires ?</h3><p>Non. Elles changent la prise et peuvent modifier le confort des poignets, mais elles ne sont pas obligatoires pour apprendre l'équilibre sur les mains.</p><Link className="textLink" href="/bibliotheque/parallettes-handstand">Voir quand elles sont utiles →</Link></article></div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Ressources</div><h2>Le parcours handstand actuel</h2></div><div className="resourceGrid">{resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div></section>
    </>
  );
}
