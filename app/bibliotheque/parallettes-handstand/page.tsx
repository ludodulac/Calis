import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parallettes pour le handstand : utiles ou non ?",
  description: "Comprendre ce que les parallettes changent réellement au handstand, quand elles peuvent aider et quand elles ne sont pas nécessaires.",
  alternates: { canonical: "/bibliotheque/parallettes-handstand/" },
  openGraph: {
    title: "Parallettes pour le handstand : utiles ou non ?",
    description: "Un guide simple pour décider si les parallettes répondent réellement à un besoin dans ta pratique du handstand.",
    type: "article",
    url: "/bibliotheque/parallettes-handstand/",
  },
};

export default function ParallettesHandstandPage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Équipement · handstand</div>
      <h1>Parallettes pour le handstand : utiles ou non ?</h1>
      <p className="lead">Les parallettes ne débloquent pas le handstand à ta place. Elles changent surtout la manière dont tu prends appui : la main saisit une poignée au lieu d'être posée à plat au sol. Cela peut être intéressant dans certains contextes, mais ce n'est pas un passage obligatoire.</p>

      <div className="learningMeta">
        <div><span>Question</span><strong>Est-ce que j'en ai réellement besoin ?</strong></div>
        <div><span>Capacité</span><strong>Équilibre et appui</strong></div>
        <div><span>Matériel</span><strong>Facultatif</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Ce qui change</div>
        <h2>Le poignet, la prise et la hauteur ne travaillent plus exactement pareil.</h2>
        <div className="mistakeList">
          <div><strong>Poignet</strong><p>La poignée peut réduire l'extension demandée au poignet par rapport à une main posée à plat. Le ressenti varie selon la personne et la géométrie des parallettes.</p></div>
          <div><strong>Prise</strong><p>Les doigts entourent la poignée : les corrections d'équilibre ne ressemblent donc pas exactement aux pressions des doigts sur le sol.</p></div>
          <div><strong>Hauteur</strong><p>Ton corps se trouve surélevé. Une sortie mal préparée peut devenir plus impressionnante, surtout avec des parallettes hautes.</p></div>
          <div><strong>Stabilité</strong><p>Une paire rigide, antidérapante et correctement posée est indispensable. Un matériel qui bouge crée un problème au lieu d'en résoudre un.</p></div>
        </div>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Quand elles peuvent être utiles</div>
          <h2>Un outil, pas une obligation</h2>
          <ul>
            <li>Tu préfères clairement la prise neutre à l'appui mains à plat.</li>
            <li>Tu travailles aussi des mouvements qui utilisent naturellement les parallettes.</li>
            <li>Tu veux varier les appuis tout en gardant une pratique au sol.</li>
            <li>Le matériel est stable et tu maîtrises tes entrées et sorties.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">Quand elles ne résolvent rien</div>
          <h2>N'achète pas une régression magique</h2>
          <ul>
            <li>Tu n'as pas encore appris à supporter progressivement ton poids sur les mains.</li>
            <li>Ton problème principal est la peur de tomber ou l'absence de sortie contrôlée.</li>
            <li>Tu veux apprendre spécifiquement le handstand au sol mais tu ne pratiques jamais au sol.</li>
            <li>Tu espères qu'un accessoire corrigera automatiquement la ligne ou l'équilibre.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Choix du matériel</div>
        <h2>Si tu en utilises, privilégie les propriétés utiles.</h2>
        <ol className="contentList numberedList">
          <li><strong>Stabilité :</strong> la base ne doit ni basculer ni glisser pendant une mise en charge progressive.</li>
          <li><strong>Prise confortable :</strong> le diamètre doit permettre de saisir sans crispation excessive.</li>
          <li><strong>Hauteur adaptée :</strong> commencer bas simplifie généralement la relation au sol et les sorties.</li>
          <li><strong>Construction simple :</strong> aucun besoin de fonctionnalités décoratives si la paire est rigide, cohérente et sûre.</li>
        </ol>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Décision Calis</div>
        <div className="equipmentCallout">
          <div>
            <h2>Tu peux apprendre le handstand sans parallettes.</h2>
            <p>Si ton objectif est le handstand au sol, garde une partie significative de ta pratique au sol. Ajoute les parallettes lorsqu'elles répondent à un besoin réel de confort, de variété ou de pratique — pas parce qu'elles ressemblent à une étape obligatoire.</p>
          </div>
          <div className="manifesto"><span>Principe équipement</span><strong>Le matériel doit résoudre un problème identifié.</strong><p>Sinon, continue avec ce que tu as déjà.</p></div>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Continuer</div>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/poignets-handstand"><strong>Préparer mes poignets</strong><span>Appui au sol →</span></Link>
          <Link className="nextCard" href="/bibliotheque/handstand-debutant"><strong>Construire mon handstand</strong><span>Parcours technique →</span></Link>
        </div>
      </section>
      <Link className="textLink" href="/handstand">← Retour au parcours handstand</Link>
    </article>
  );
}
