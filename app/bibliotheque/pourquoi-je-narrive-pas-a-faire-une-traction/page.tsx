import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi je n'arrive pas à faire une traction ?",
  description: "Tu n'arrives pas à faire une traction ? Identifie ce qui bloque : suspension, contrôle des épaules, force de tirage, assistance ou descente, puis travaille la bonne étape.",
  alternates: { canonical: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction/" },
  openGraph: {
    title: "Pourquoi je n'arrive pas à faire une traction ?",
    description: "Un diagnostic simple pour trouver ton maillon faible et savoir quoi travailler ensuite.",
    type: "article",
    url: "/bibliotheque/pourquoi-je-narrive-pas-a-faire-une-traction/",
  },
};

const blockers = [
  {
    signal: "Mes mains lâchent ou je lutte juste pour rester suspendu",
    meaning: "La barre elle-même te coûte encore beaucoup d'énergie. Avant de chercher à monter, construis une suspension suffisamment familière pour pouvoir penser au reste du mouvement.",
    href: "/bibliotheque/suspension-barre",
    action: "Travailler ma suspension",
  },
  {
    signal: "Je tiens à la barre, mais je ne sais pas quoi faire avec mes épaules",
    meaning: "Apprendre un petit mouvement scapulaire peut t'aider à organiser le début du tirage sans immédiatement plier les coudes ou créer de l'élan.",
    href: "/bibliotheque/controle-scapulaire",
    action: "Apprendre le contrôle scapulaire",
  },
  {
    signal: "Je tire, mais mon corps ne monte presque pas",
    meaning: "Tu as probablement besoin d'accumuler davantage de force de tirage dans une variante où la charge est réglable. Le rowing incliné permet de garder les pieds au sol et d'ajuster la difficulté.",
    href: "/bibliotheque/rowing-incline",
    action: "Construire mon tirage",
  },
  {
    signal: "Je comprends le mouvement mais mon poids de corps est encore trop lourd à déplacer",
    meaning: "Une assistance bien dosée te permet de pratiquer la trajectoire complète sans attendre d'avoir toute la force nécessaire pour une répétition libre.",
    href: "/bibliotheque/traction-assistee",
    action: "Utiliser une assistance",
  },
  {
    signal: "Je peux être en haut, mais je tombe très vite",
    meaning: "La phase descendante te donne un moyen simple de mesurer et construire du contrôle. Commence depuis une position haute obtenue avec un support stable, puis apprends à freiner la descente.",
    href: "/bibliotheque/traction-negative",
    action: "Travailler la descente",
  },
  {
    signal: "Je réussis parfois une traction, mais elle change à chaque essai",
    meaning: "Ton problème n'est peut-être plus de réussir une répétition mais de la rendre reproductible : départ, trajectoire, amplitude et retour doivent devenir plus stables.",
    href: "/bibliotheque/traction-technique",
    action: "Stabiliser ma technique",
  },
] as const;

export default function PullUpBlockersPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Diagnostic · première traction</div>
      <h1>Pourquoi je n'arrive pas à faire une traction ?</h1>
      <p className="lead">Parce qu'une traction n'est pas une seule capacité. Tu dois tenir à la barre, organiser tes épaules, produire assez de force de tirage et contrôler ton corps sur toute l'amplitude. Au lieu de retenter la même traction encore et encore, trouve le maillon qui te limite aujourd'hui.</p>

      <section className="articleSection">
        <div className="eyebrow">À retenir</div>
        <h2>Ne cherche pas d'abord « l'exercice miracle » : cherche ce qui bloque</h2>
        <p>Deux personnes incapables de faire une traction peuvent avoir besoin de choses différentes. L'une lâche la barre, l'autre manque de force au début du mouvement, une troisième sait descendre mais pas remonter. Le bon exercice est celui qui rend ton problème actuel entraînable.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Trouve ton cas</div>
        <h2>Quelle phrase te ressemble le plus ?</h2>
        <div className="choiceList">
          {blockers.map((blocker) => (
            <div className="plainCard" key={blocker.signal}>
              <h3>{blocker.signal}</h3>
              <p>{blocker.meaning}</p>
              <Link className="textLink" href={blocker.href}>{blocker.action} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Erreur fréquente</div>
        <h2>Tester n'est pas la même chose que s'entraîner</h2>
        <p>Essayer une traction libre de temps en temps peut te montrer où tu en es. Mais répéter uniquement des tentatives qui échouent ne rend pas forcément le maillon faible plus facile à entraîner. Une progression utile transforme le mouvement en versions que tu peux réellement contrôler aujourd'hui, puis réduit progressivement l'aide.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Le chemin complet</div>
        <h2>Une première traction peut se construire par plusieurs portes</h2>
        <p>Le parcours Calis relie suspension, contrôle scapulaire, rowing incliné, traction assistée et négative. Ce n'est pas une checklist rigide : tu peux renforcer plusieurs étapes en parallèle et revenir tester le mouvement complet lorsque tes capacités changent.</p>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/premiere-traction"><strong>Je pars de zéro</strong><span>Voir le parcours première traction →</span></Link>
          <Link className="nextCard" href="/tractions"><strong>Je veux comprendre toutes les étapes</strong><span>Explorer le hub Tractions →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Et la douleur ?</div>
        <h2>Une douleur n'est pas un maillon à « forcer »</h2>
        <p>Si une douleur vive ou persistante à l'épaule, au coude, au poignet ou ailleurs limite le mouvement, ne l'utilise pas comme simple indicateur de faiblesse à dépasser. Adapte ou arrête l'exercice concerné et demande un avis professionnel si nécessaire.</p>
      </section>

      <Link className="textLink" href="/tractions">← Retour au parcours traction</Link>
    </article>
  );
}
