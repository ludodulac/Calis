import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description: "Pourquoi Calisthenics Atlas existe : une plateforme française pour découvrir, comprendre et pratiquer la callisthénie sans avoir besoin d'être déjà expert.",
};

export default function AboutPage() {
  return (
    <div className="shell pageStack">
      <section className="heroPanel">
        <p className="eyebrow">À propos</p>
        <h1>Découvrir la callisthénie sans avoir besoin de tout connaître avant de commencer.</h1>
        <p className="heroLead">
          Calisthenics Atlas est né d'une découverte simple : la callisthénie donne envie de voir jusqu'où l'on peut aller avec son propre corps, mais quand on débute, il est difficile de savoir par où commencer et à qui faire confiance.
        </p>
      </section>

      <section className="contentPanel prose">
        <h2>Le point de départ</h2>
        <p>
          Je ne viens pas du monde de la callisthénie et je ne prétends pas être un athlète ou un coach. J'ai découvert cette discipline notamment à travers des vidéos et des personnalités comme Brieuc Le Dantec. Ce qui m'a attiré, c'est autant le spectacle des mouvements que l'idée derrière la pratique : construire progressivement de la force, du contrôle et une meilleure compréhension de son corps avec relativement peu de matériel.
        </p>
        <p>
          En découvrant cet univers, je me suis retrouvé avec les mêmes questions qu'un débutant : quel mouvement apprendre en premier ? Comment savoir si l'on possède les bases ? Quelle progression est réaliste ? Que faire aujourd'hui plutôt que de regarder une nouvelle vidéo et remettre l'entraînement à plus tard ?
        </p>
      </section>

      <section className="contentPanel prose">
        <h2>Pourquoi construire Calisthenics Atlas</h2>
        <p>
          L'ambition est de construire une plateforme française qui organise ces questions au même endroit. Pas seulement une collection d'articles ou de figures impressionnantes, mais un atlas dans lequel on peut comprendre un mouvement, retrouver les prérequis utiles, essayer une séance adaptée à son niveau et savoir quelle est la prochaine étape cohérente.
        </p>
        <p>
          Le projet est aussi construit avec une conviction importante : un débutant doit pouvoir utiliser le site sans avoir à devenir expert avant de commencer. Quand Calisthenics Atlas ne sait pas encore mesurer quelque chose de manière fiable, il doit le dire plutôt que d'inventer une progression automatique.
        </p>
      </section>

      <section className="contentPanel prose">
        <h2>Un projet qui apprend en même temps que ses utilisateurs</h2>
        <p>
          Calisthenics Atlas est encore jeune. Son contenu, ses parcours et ses outils vont évoluer à mesure que le projet confronte ses idées à la pratique, à des sources sérieuses et à l'expérience de personnes qui connaissent réellement la discipline. L'objectif n'est pas de faire passer son créateur pour un spécialiste qu'il n'est pas, mais de construire progressivement un outil utile, clair et honnête pour les pratiquants francophones.
        </p>
        <p>
          À terme, la plateforme pourra aussi recommander des ressources ou du matériel pertinent. Si certaines recommandations donnent lieu à une rémunération ou à de l'affiliation, cela devra être indiqué clairement : la monétisation ne doit pas transformer une recommandation commerciale en faux conseil indépendant.
        </p>
      </section>

      <section className="contentPanel prose">
        <h2>Commencer simplement</h2>
        <p>
          Si vous découvrez vous aussi la callisthénie, le meilleur point de départ n'est pas forcément la figure la plus spectaculaire. Calisthenics Atlas commence par vous aider à situer vos bases et à choisir un objectif compréhensible.
        </p>
        <p><Link className="button primaryButton" href="/commencer">Trouver mon point de départ</Link></p>
      </section>
    </div>
  );
}
