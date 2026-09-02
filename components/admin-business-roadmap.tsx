import styles from "./admin-business-roadmap.module.css";

const horizons = [
  {
    label: "Maintenant",
    tone: "now",
    title: "Rendre Atlas publiable et fiable",
    text: "On termine le test réel sur téléphone et les informations éditeur. Tant que ces bases ne sont pas validées, je ne te disperse pas avec une boutique ou une production massive de contenu.",
    items: ["Test du parcours sur un vrai téléphone", "Informations éditeur et contact", "Corriger uniquement les problèmes réellement observés"],
  },
  {
    label: "Ensuite",
    tone: "next",
    title: "Construire le moteur d’acquisition",
    text: "On développera une bibliothèque éditoriale durable autour des questions que les pratiquants cherchent réellement. Le but : attirer depuis Google puis faire entrer ces visiteurs dans les parcours Atlas.",
    items: ["Architecture SEO et sujets prioritaires", "Guides durables reliés aux parcours", "Mesure du trafic et des entrées dans Atlas"],
  },
  {
    label: "Plus tard",
    tone: "later",
    title: "Monétiser sans abîmer la confiance",
    text: "Quand Atlas aura une vraie utilité et du trafic, on testera les revenus dans le bon ordre. L’affiliation est probablement la première couche ; les produits numériques viendront seulement si un besoin réel apparaît.",
    items: ["Affiliation matériel pertinent", "Produits numériques fondés sur un besoin observé", "Éventuelle offre premium si elle apporte une vraie valeur"],
  },
  {
    label: "Idées à tester",
    tone: "ideas",
    title: "Garder les grandes idées sans perdre le cap",
    text: "Les produits physiques, une marque de matériel, des vêtements ou d’autres extensions restent possibles. On les conserve comme hypothèses au lieu de les transformer trop tôt en chantiers coûteux.",
    items: ["Matériel Atlas : anneaux, parallettes, bandes…", "Produits physiques ou textile", "Nouvelles fonctionnalités et formats éditoriaux"],
  },
] as const;

export function AdminBusinessRoadmap() {
  return (
    <section className={styles.section} aria-labelledby="business-roadmap-title">
      <div className="shell">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">Pilotage de l’entreprise</p>
            <h2 id="business-roadmap-title">Maintenant / Ensuite / Plus tard / Idées à tester</h2>
          </div>
          <p>
            Ce tableau est notre garde-fou : une bonne idée n’est pas forcément une priorité. Je ferai évoluer ces horizons au fil de tes bilans pour que tu saches toujours où concentrer ton énergie.
          </p>
        </div>

        <div className={styles.grid}>
          {horizons.map((horizon) => (
            <article className={`${styles.card} ${styles[horizon.tone]}`} key={horizon.label}>
              <span className={styles.badge}>{horizon.label}</span>
              <h3>{horizon.title}</h3>
              <p>{horizon.text}</p>
              <ul>
                {horizon.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.principle}>
          <strong>Principe de gestion</strong>
          <span>Atlas doit devenir utile → trouvable → utilisé à nouveau → monétisable. On n’inverse pas cet ordre juste parce qu’une idée semble excitante.</span>
        </div>
      </div>
    </section>
  );
}
