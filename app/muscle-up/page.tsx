import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muscle-up : progression vers son premier muscle-up à la barre",
  description: "Comprendre ce qui bloque ton muscle-up : hauteur de tirage, transition, appui au-dessus de la barre et progression adaptée.",
  alternates: { canonical: "/muscle-up/" },
  openGraph: { title: "Muscle-up : construire sa première répétition", description: "Un parcours pour relier tirage haut, transition et poussée au-dessus de la barre.", type: "website", url: "/muscle-up/" },
};

const situations = [
  ["Je fais des tractions mais je ne monte pas assez haut", "Travaille la capacité à produire un tirage plus haut et plus rapide, pas seulement davantage de répétitions.", "/bibliotheque/traction-explosive"],
  ["J'arrive près de la barre mais je ne passe pas au-dessus", "Le problème peut devenir celui de la transition : il faut apprendre à relier le tirage à l'appui.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up"],
  ["Un bras passe avant l'autre", "Ne transforme pas l'asymétrie en technique cible. Réduis la difficulté et reconstruis un passage que tu peux répéter des deux côtés.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up"],
  ["Je ne sais pas si j'ai les bases", "Tes tractions, ton tirage haut et ta capacité à pousser au-dessus d'une barre donnent de meilleurs indices qu'un nombre magique de répétitions.", "/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up"],
] as const;

export default function MuscleUpPage() {
  return (
    <main>
      <section className="hero"><div className="shell heroGrid"><div>
        <div className="eyebrow">Figure · tirer → passer → pousser</div>
        <h1>Tu veux réussir ton premier muscle-up ? Trouve d'abord l'endroit précis où le mouvement se casse.</h1>
        <p className="lead">Le muscle-up ne se résume pas à « être assez fort ». Il faut relier un tirage suffisamment haut, un passage au-dessus de la barre et une poussée jusqu'à l'appui. Calis te fait travailler le maillon qui manque au lieu d'accumuler des tentatives ratées.</p>
        <div className="actions"><Link className="button primary" href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up">Diagnostiquer mon blocage</Link><Link className="button secondary" href="/bibliotheque/traction-explosive">Travailler mon tirage haut</Link></div>
      </div><aside className="manifesto"><span>Principe Calis</span><strong>Une figure spectaculaire reste une suite de capacités entraînables.</strong><p>Pas de seuil universel du type « X tractions = muscle-up garanti ». Les répétitions donnent une information ; la hauteur, le contrôle et la coordination en donnent d'autres.</p></aside></div></section>

      <section className="section sectionSoft"><div className="shell"><div className="sectionHeading"><div className="eyebrow">Où ça bloque ?</div><h2>Pars de ce qui se passe réellement sur ta tentative.</h2></div><div className="journeyGrid">{situations.map(([title,text,href]) => <Link className="journeyCard" href={href} key={title}><span>Ma situation</span><strong>{title}</strong><p>{text}</p><b>Voir quoi travailler →</b></Link>)}</div></div></section>

      <section className="section shell"><div className="sectionHeading"><div className="eyebrow">Le chemin</div><h2>Trois problèmes à relier.</h2><p>Le muscle-up à la barre combine une phase de tirage, une transition et une phase d'appui/poussée. Les travailler séparément peut rendre le mouvement complet beaucoup plus lisible.</p></div><div className="cardGrid">
        <article className="plainCard"><h3>1. Monter assez haut</h3><p>Une traction classique peut être solide sans produire encore la hauteur utile à une transition.</p><Link className="textLink" href="/bibliotheque/traction-explosive">Développer le tirage explosif →</Link></article>
        <article className="plainCard"><h3>2. Passer la barre</h3><p>Arriver haut ne suffit pas toujours : il faut apprendre le moment où le tirage devient passage vers l'appui.</p><Link className="textLink" href="/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up">Identifier le blocage →</Link></article>
        <article className="plainCard"><h3>3. Finir au-dessus</h3><p>L'appui au-dessus d'une barre demande une poussée spécifique. Les dips construisent une base, mais le contexte d'une barre droite mérite aussi son apprentissage.</p><Link className="textLink" href="/dips">Construire ma poussée →</Link></article>
      </div></section>

      <section className="section sectionSoft"><div className="shell split"><div><div className="eyebrow">Sécurité et progression</div><h2>Ne laisse pas la figure te pousser à ignorer un signal inhabituel.</h2><p>Fatigue, difficulté technique et effort musculaire ne sont pas la même chose qu'une douleur vive, inhabituelle ou persistante. Calis fournit des informations générales d'entraînement et ne remplace pas un avis médical ou l'évaluation d'un professionnel de santé.</p></div><Link className="button secondary" href="/tractions">Revenir aux fondations de tirage</Link></div></section>
    </main>
  );
}
