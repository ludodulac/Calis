import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment faire une traction : technique, amplitude et erreurs",
  description: "Apprends une technique de traction contrôlée : départ, montée, position haute, descente, sensations, erreurs fréquentes et adaptations utiles.",
  alternates: { canonical: "/bibliotheque/traction-technique/" },
  openGraph: { title: "Comment faire une traction propre ?", description: "Des repères simples pour construire une traction contrôlée et reproductible, sans chercher une forme unique pour tous.", type: "article", url: "/bibliotheque/traction-technique/" },
};

export default function PullUpTechniquePage() {
  return (
    <article className="section shell narrow learningCard">
      <div className="eyebrow">Tractions · technique</div>
      <h1>Comment faire une traction propre ? Construis un mouvement que tu peux reproduire.</h1>
      <p className="lead">Une bonne traction n'est pas une pose parfaite copiée sur une photo. Cherche surtout un départ stable, une montée volontaire, une position haute claire et une descente contrôlée — avec une prise et une amplitude que tu tolères bien.</p>

      <div className="learningMeta">
        <div><span>Objectif</span><strong>Une traction contrôlée</strong></div>
        <div><span>Capacité</span><strong>Tirer</strong></div>
        <div><span>Après</span><strong>Construire du volume</strong></div>
      </div>

      <section className="articleSection">
        <div className="eyebrow">Réponse rapide</div>
        <h2>À quoi ressemble une traction utile pour progresser ?</h2>
        <p>Tu pars d'une suspension que tu contrôles, tu tires sans transformer volontairement le mouvement en balancement, tu atteins une position haute identifiable puis tu redescends volontairement. Le meilleur repère est la répétabilité : la dernière répétition devrait encore ressembler à la première.</p>
        <p>Si tu ne peux pas encore réaliser cette répétition libre, ne force pas la forme finale. Reviens à la <Link className="textLink" href="/bibliotheque/premiere-traction">progression vers la première traction</Link>.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Les quatre moments</div>
        <h2>Lis la traction comme un mouvement, pas comme une liste de règles.</h2>
        <ol className="contentList numberedList">
          <li><strong>Départ :</strong> prends la barre confortablement et stabilise ta suspension avant de tirer.</li>
          <li><strong>Montée :</strong> produis le tirage avec le dos et les bras tout en gardant le corps suffisamment organisé pour éviter un élan parasite.</li>
          <li><strong>Position haute :</strong> cherche une fin de répétition claire sans projeter la tête ou le cou pour donner l'illusion de quelques centimètres supplémentaires.</li>
          <li><strong>Descente :</strong> reviens volontairement vers la position basse au lieu de simplement tomber sous la barre.</li>
        </ol>
      </section>

      <section className="articleSection sensationGrid">
        <div className="signalCard positiveSignal">
          <div className="eyebrow">Ce que tu dois ressentir</div>
          <h2>Un effort de tirage qui reste organisé.</h2>
          <ul>
            <li>Dos et bras participent ensemble.</li>
            <li>La prise est sollicitée mais ne monopolise pas toute ton attention.</li>
            <li>Le tronc limite les oscillations inutiles.</li>
            <li>Tu peux reconnaître les mêmes positions d'une répétition à l'autre.</li>
          </ul>
        </div>
        <div className="signalCard cautionSignal">
          <div className="eyebrow">À surveiller</div>
          <h2>Le chiffre ne doit pas masquer la qualité.</h2>
          <ul>
            <li>L'amplitude raccourcit à chaque répétition.</li>
            <li>Les jambes créent de plus en plus d'élan sans que ce soit ton objectif.</li>
            <li>Tu avances fortement la tête pour « passer » la barre.</li>
            <li>Une prise ou une trajectoire provoque une douleur vive ou persistante.</li>
          </ul>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Prise et amplitude</div>
        <h2>Il n'existe pas une largeur de prise magique pour tout le monde.</h2>
        <p>Ta morphologie, ta mobilité, ton objectif et ta tolérance influencent la position qui te convient. Commence avec une prise confortable qui te permet de produire un mouvement contrôlé. Une prise pronation, supination ou neutre peut changer les sensations et la contribution relative des articulations ; aucune ne mérite d'être imposée comme solution universelle hors contexte.</p>
        <p>Pour comparer tes progrès, garde surtout des repères cohérents d'une séance à l'autre. Changer constamment de prise, d'amplitude et de style rend ton évolution beaucoup plus difficile à lire.</p>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Si quelque chose bloque</div>
        <h2>Corrige le maillon faible au lieu de répéter la même tentative.</h2>
        <div className="nextGrid compactNextGrid">
          <Link className="nextCard" href="/bibliotheque/controle-scapulaire"><strong>Départ difficile</strong><span>Travailler le contrôle des épaules →</span></Link>
          <Link className="nextCard" href="/bibliotheque/rowing-incline"><strong>Manque de tirage</strong><span>Construire la force sur un angle plus facile →</span></Link>
          <Link className="nextCard" href="/bibliotheque/traction-assistee"><strong>Mouvement trop difficile</strong><span>Réduire la difficulté avec une assistance →</span></Link>
          <Link className="nextCard" href="/bibliotheque/traction-negative"><strong>Descente incontrôlée</strong><span>Apprendre à résister au retour →</span></Link>
        </div>
      </section>

      <section className="articleSection">
        <div className="eyebrow">Étape suivante</div>
        <h2>Quand la répétition devient stable, arrête de seulement la tester.</h2>
        <p>Une traction reproductible ouvre un nouveau problème : construire plusieurs répétitions sans dégrader progressivement le mouvement. Le travail devient alors davantage une question de volume de qualité que de réussite d'une répétition isolée.</p>
        <Link className="nextCard" href="/bibliotheque/10-tractions"><strong>Après la première traction</strong><span>Passer de 1 à plusieurs tractions →</span></Link>
      </section>

      <Link className="textLink" href="/tractions">← Revenir au parcours complet des tractions</Link>
    </article>
  );
}
