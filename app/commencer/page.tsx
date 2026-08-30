import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Pars de ce que tu veux vraiment réussir : te sentir plus fort, faire une pompe ou une traction, bouger plus librement ou tenir sur les mains.",
  alternates: { canonical: "/commencer/" },
};

const desires = [
  ["Je veux me sentir plus fort dans mon propre corps", "Pas besoin de connaître les exercices : découvre quelques capacités simples et un premier niveau adapté.", "/bibliotheque/par-ou-commencer-calisthenie"],
  ["Je veux enfin réussir une vraie pompe", "Trouve une version que tu peux contrôler aujourd'hui puis rapproche-toi progressivement du sol.", "/bibliotheque/premiere-pompe"],
  ["Je veux réussir à soulever mon propre corps", "Construis prise, suspension et tirage jusqu'à ta première traction stricte.", "/bibliotheque/premiere-traction"],
  ["Je veux des jambes fortes et un corps plus mobile", "Commence par un squat contrôlé puis travaille seulement les amplitudes qui te limitent réellement.", "/bibliotheque/squat-poids-du-corps"],
  ["Je veux me sentir moins raide et bouger plus librement", "Explore une mobilité utile sans attendre d'être souple pour avoir le droit de commencer.", "/bibliotheque/mobilite-debutant"],
  ["Je veux réussir quelque chose qui me paraît impossible : tenir sur les mains", "Prépare tes appuis, apprends le mur puis transforme peu à peu la figure en équilibre.", "/handstand"],
] as const;

const situations = [
  ["Je n'arrive pas encore à faire une pompe", "/bibliotheque/premiere-pompe"],
  ["Je n'arrive pas encore à faire une traction", "/bibliotheque/premiere-traction"],
  ["Je veux renforcer mes jambes", "/bibliotheque/squat-poids-du-corps"],
  ["Je manque de mobilité", "/bibliotheque/mobilite-debutant"],
  ["J'aimerais apprendre à tenir sur les mains", "/bibliotheque/poignets-handstand"],
  ["Je ne sais pas du tout quoi travailler", "/bibliotheque/par-ou-commencer-calisthenie"],
] as const;

export default function StartPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Je pars de zéro</div>
        <h1>Tu n'as pas besoin de connaître la callisthénie pour avoir envie de découvrir ce dont ton corps est capable.</h1>
        <p className="lead">Pars de ce que tu aimerais ressentir ou réussir. Calis transforme cette envie en une première action adaptée à ton niveau d'aujourd'hui.</p>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading">
            <div className="eyebrow">Ton vrai pourquoi</div>
            <h2>Qu'est-ce qui te donnerait envie de commencer ?</h2>
            <p>Tu peux vouloir être plus fort, plus libre dans tes mouvements, réussir une figure ou simplement te prouver que tu peux progresser. Il n'y a pas besoin d'un objectif « technique » pour entrer.</p>
          </div>
          <div className="journeyGrid">
            {desires.map(([title, description, href]) => <Link className="journeyCard" href={href} key={title}><span>J'aimerais...</span><strong>{title}</strong><p>{description}</p><b>Voir ma première étape →</b></Link>)}
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="sectionHeading"><div className="eyebrow">Ou pars simplement de ton blocage</div><h2>« Aujourd'hui, je n'y arrive pas encore. »</h2><p>Ce n'est pas un verdict sur ton niveau. C'est juste l'information dont Calis a besoin pour choisir la bonne régression.</p></div>
        <div className="choiceList">{situations.map(([label, href]) => <Link className="choice startChoice" href={href} key={href}><span><strong>{label}</strong><small>Me montrer une étape que je peux réellement essayer.</small></span><span>→</span></Link>)}</div>
      </section>

      <section className="section sectionSoft">
        <div className="shell narrow">
          <div className="eyebrow">La règle Calis</div>
          <h2>Le spectaculaire sert à donner envie. La progression sert à le rendre possible.</h2>
          <div className="mistakeList">
            <div><strong>Voir ce que tu pourrais débloquer</strong><p>Une traction, un handstand ou une nouvelle amplitude donne une direction concrète à l'entraînement.</p></div>
            <div><strong>Commencer beaucoup plus bas si nécessaire</strong><p>Une variante accessible n'est pas une version inférieure : c'est ton point d'entrée vers la capacité désirée.</p></div>
            <div><strong>Reconnaître les petits progrès</strong><p>Un support de pompe plus bas, une suspension plus calme ou un squat plus contrôlé comptent avant même la réussite finale.</p></div>
            <div><strong>Ne pas acheter pour se sentir prêt</strong><p>Une grande partie des bases se construit avec très peu de matériel. L'équipement arrive lorsqu'il débloque un besoin réel.</p></div>
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="eyebrow">Ce qui compte au début</div>
        <h2>Construire un corps capable, pas collectionner les exercices.</h2>
        <div className="mistakeList">
          <div><strong>Pousser et tirer</strong><p>Pompes, tirages et leurs régressions construisent les grandes familles de force du haut du corps.</p></div>
          <div><strong>Utiliser ses jambes</strong><p>S'accroupir, se relever et contrôler son poids sur les jambes font partie des bases.</p></div>
          <div><strong>Explorer ses amplitudes</strong><p>La mobilité se développe autour des mouvements visés et n'a pas à être parfaite avant de commencer.</p></div>
          <div><strong>Choisir une difficulté répétable</strong><p>Une variante accessible est celle qui permet d'apprendre aujourd'hui.</p></div>
          <div><strong>Observer les sensations</strong><p>Distinguer effort musculaire, fatigue, perte de contrôle et douleur inhabituelle aide à progresser avec de meilleurs repères.</p></div>
          <div><strong>Progresser sans acheter inutilement</strong><p>Beaucoup de bases nécessitent très peu de matériel.</p></div>
        </div>
      </section>
    </>
  );
}
