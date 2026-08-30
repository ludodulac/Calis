import type { Metadata } from "next";
import Link from "next/link";
import { pullUpProgression } from "@/lib/content/v1";

export const metadata: Metadata = {
  title: "Tractions : progression débutant, première traction et technique",
  description: "Apprends à faire ta première traction puis à progresser : suspension, contrôle scapulaire, rowing, assistance, négatives, technique et volume.",
  alternates: { canonical: "/tractions/" },
  openGraph: {
    title: "Tractions : de zéro à une traction solide",
    description: "Un parcours progressif pour comprendre ce qui te bloque et savoir quoi travailler ensuite.",
    type: "article",
    url: "/tractions/",
  },
};

const situations = [
  ["Je n'arrive pas encore à me suspendre confortablement", "Commence par apprivoiser la barre, la prise et une suspension calme.", "/bibliotheque/suspension-barre", "Apprendre à se suspendre"],
  ["Je tiens à la barre, mais je n'arrive pas à monter", "Construis progressivement le tirage au lieu de multiplier les tentatives maximales.", "/bibliotheque/rowing-incline", "Construire ma force de tirage"],
  ["Je suis presque capable de faire ma première traction", "Utilise assistance et descentes contrôlées pour pratiquer les parties du mouvement qui te manquent encore.", "/bibliotheque/traction-assistee", "Préparer ma première traction"],
  ["Je fais déjà une ou plusieurs tractions", "Stabilise ta technique puis transforme une répétition isolée en capacité reproductible.", "/bibliotheque/traction-technique", "Améliorer mes tractions"],
] as const;

export default function PullUpsPage() {
  return (
    <>
      <section className="hero shell">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">Tractions · progression débutant</div>
            <h1>Apprendre les tractions : trouve ce qui te bloque et travaille la bonne étape.</h1>
            <p className="lead">Tu n'as pas besoin de savoir faire une traction pour commencer. Suspension, épaules, rowing, assistance et négatives permettent de construire progressivement ce qui manque jusqu'à ta première répétition, puis au-delà.</p>
            <div className="actions">
              <Link className="button primary" href="/bibliotheque/premiere-traction">Comment faire ma première traction ?</Link>
              <Link className="button secondary" href="/bibliotheque/traction-technique">Je fais déjà des tractions</Link>
            </div>
          </div>
          <div className="manifesto">
            <span>Réponse rapide</span>
            <strong>Si tu n'arrives pas à faire une traction, ne répète pas seulement des échecs.</strong>
            <p>Identifie d'abord ce qui limite le mouvement : suspension et prise, contrôle des épaules, force de tirage ou capacité à contrôler la descente. Travaille ensuite ce maillon à une difficulté adaptée.</p>
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading wide">
            <div className="eyebrow">Où en es-tu aujourd'hui ?</div>
            <h2>Choisis la phrase qui te ressemble le plus.</h2>
            <p>Tu peux entrer directement dans le parcours sans connaître le nom des exercices ni ton « niveau ».</p>
          </div>
          <div className="cardGrid">
            {situations.map(([title, text, href, link]) => (
              <Link className="plainCard" href={href} key={title}>
                <h3>{title}</h3><p>{text}</p><span className="textLink">{link} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading wide">
          <div className="eyebrow">Première traction</div>
          <h2>La progression complète, de la barre à la première répétition.</h2>
          <p>Chaque étape développe une capacité identifiable. Les critères servent à choisir ce qu'il est utile de travailler ensuite, pas à t'interdire d'essayer la suite.</p>
        </div>
        <ol className="progression">
          {pullUpProgression.map((step, index) => (
            <li key={step.id} className="progressionStep">
              <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{step.label}</h2>
                <p>{step.criterion}</p>
                {step.resourceSlug && <Link className="textLink" href={`/bibliotheque/${step.resourceSlug}`}>Apprendre : {step.label.toLowerCase()} →</Link>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading wide">
            <div className="eyebrow">Questions fréquentes</div>
            <h2>Les questions qui apparaissent quand on apprend les tractions.</h2>
          </div>
          <div className="cardGrid">
            <article className="plainCard"><h3>Pourquoi je n'arrive pas à faire une traction ?</h3><p>Parce qu'une traction combine plusieurs capacités. La prise peut lâcher, la suspension peut être instable, le début du tirage difficile ou la force insuffisante sur une partie de l'amplitude. Le parcours ci-dessus sert précisément à repérer ce maillon.</p></article>
            <article className="plainCard"><h3>Les tractions négatives sont-elles utiles ?</h3><p>Elles permettent de commencer en haut et de travailler la descente lorsque la montée complète n'est pas encore disponible. Elles ne remplacent pas tout le reste du parcours : elles complètent le rowing et les formes assistées.</p><Link className="textLink" href="/bibliotheque/traction-negative">Apprendre les tractions négatives →</Link></article>
            <article className="plainCard"><h3>Faut-il une bande élastique ?</h3><p>Non. Une bande peut rendre le mouvement complet accessible, mais elle n'est pas obligatoire. Un rowing bien réglé et des négatives adaptées permettent déjà de construire beaucoup de force utile.</p><Link className="textLink" href="/bibliotheque/traction-assistee">Comprendre la traction assistée →</Link></article>
            <article className="plainCard"><h3>Combien de tractions faut-il savoir faire ?</h3><p>Il n'existe pas un nombre universel qui définit un « bon » niveau. Une première traction propre est déjà une capacité acquise ; ensuite, le nombre pertinent dépend de ton objectif : volume, force, explosivité ou future figure.</p><Link className="textLink" href="/bibliotheque/10-tractions">Construire de 1 à 10 tractions →</Link></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading wide">
          <div className="eyebrow">Après le socle</div>
          <h2>La traction devient ensuite un carrefour.</h2>
          <p>Quand ton tirage est solide, tu peux chercher davantage de hauteur, construire plus de force ou préparer des figures plus complexes.</p>
        </div>
        <div className="choiceList">
          <Link className="choice" href="/bibliotheque/traction-explosive"><span>Développer une traction explosive</span><span>→</span></Link>
          <Link className="choice" href="/bibliotheque/tractions-lestees"><span>Commencer les tractions lestées</span><span>→</span></Link>
          <Link className="choice" href="/bibliotheque"><span>Explorer les autres capacités</span><span>→</span></Link>
        </div>
      </section>
    </>
  );
}
