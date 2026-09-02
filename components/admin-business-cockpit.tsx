"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./admin-business-cockpit.module.css";

type PublisherForm = {
  publisherType: string;
  legalName: string;
  publicName: string;
  companyName: string;
  registrationNumber: string;
  address: string;
  publicEmail: string;
  publicationDirector: string;
  phoneTestDone: boolean;
  affiliationPlanned: boolean;
  publisherNotes: string;
  contactNotes: string;
  phoneNotes: string;
  businessNotes: string;
  generalNotes: string;
};

const STORAGE_KEY = "calis-owner-publisher-v1";

const emptyForm: PublisherForm = {
  publisherType: "unknown",
  legalName: "",
  publicName: "Calisthenics Atlas",
  companyName: "",
  registrationNumber: "",
  address: "",
  publicEmail: "",
  publicationDirector: "",
  phoneTestDone: false,
  affiliationPlanned: true,
  publisherNotes: "",
  contactNotes: "",
  phoneNotes: "",
  businessNotes: "",
  generalNotes: "",
};

const requiredKeys: Array<keyof PublisherForm> = [
  "publisherType",
  "legalName",
  "address",
  "publicEmail",
  "publicationDirector",
];

const publisherLabels: Record<string, string> = {
  unknown: "Je ne sais pas encore",
  individual: "Je publie en mon nom, sans entreprise pour l’instant",
  micro: "Micro-entreprise / entreprise individuelle",
  company: "Société",
  association: "Association",
};

function isFilled(key: keyof PublisherForm, value: PublisherForm[keyof PublisherForm]) {
  if (key === "publisherType") return value !== "unknown";
  return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
}

function printable(value: string) {
  return value.trim() || "NON RENSEIGNÉ";
}

export function AdminBusinessCockpit() {
  const [form, setForm] = useState<PublisherForm>(emptyForm);
  const [loaded, setLoaded] = useState(false);
  const [savedAt, setSavedAt] = useState<string>("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<PublisherForm>;
        setForm({
          ...emptyForm,
          ...parsed,
          publicName: parsed.publicName === "Calis" ? "Calisthenics Atlas" : parsed.publicName || emptyForm.publicName,
        });
      }
    } catch {
      // Keep the empty form if local storage is unavailable or corrupted.
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    setSavedAt(new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
    setCopyState("idle");
  }, [form, loaded]);

  const completed = useMemo(
    () => requiredKeys.filter((key) => isFilled(key, form[key])).length,
    [form],
  );

  const update = <K extends keyof PublisherForm>(key: K, value: PublisherForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const nextMission = !form.phoneTestDone
    ? "Teste le parcours complet sur ton téléphone. Note tout problème ou doute dans le bloc « Test téléphone » ci-dessous."
    : completed < requiredKeys.length
      ? "Complète les informations éditeur que tu connais. Quand tu hésites, écris simplement ta question dans la zone de notes du bloc concerné."
      : "Les informations de base sont remplies. Copie maintenant le bilan pour ChatGPT afin que je puisse vérifier, te répondre et préparer la suite de l’admin.";

  const buildReport = () => [
    "CALISTHENICS ATLAS — ÉTAT DE L’ADMIN",
    "",
    "Je viens de remplir l’admin. Analyse cet état, réponds à mes notes/questions et mets à jour l’admin avec les prochaines choses dont tu as besoin.",
    "",
    "[ÉDITEUR]",
    `Situation : ${publisherLabels[form.publisherType] || form.publisherType}`,
    `Nom/prénom légal : ${printable(form.legalName)}`,
    `Nom public : ${printable(form.publicName)}`,
    `Structure : ${printable(form.companyName)}`,
    `Immatriculation : ${printable(form.registrationNumber)}`,
    `Mes notes/questions : ${printable(form.publisherNotes)}`,
    "",
    "[CONTACT / PUBLICATION]",
    `Adresse : ${printable(form.address)}`,
    `Email public : ${printable(form.publicEmail)}`,
    `Responsable de publication : ${printable(form.publicationDirector)}`,
    `Mes notes/questions : ${printable(form.contactNotes)}`,
    "",
    "[TEST TÉLÉPHONE]",
    `Test complet effectué : ${form.phoneTestDone ? "OUI" : "NON"}`,
    `Mes observations : ${printable(form.phoneNotes)}`,
    "",
    "[BUSINESS]",
    `Affiliation envisagée : ${form.affiliationPlanned ? "OUI" : "NON"}`,
    `Mes notes/questions : ${printable(form.businessNotes)}`,
    "",
    "[AUTRES NOTES]",
    printable(form.generalNotes),
  ].join("\n");

  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(buildReport());
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <div className={styles.adminPage}>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Espace de travail propriétaire · temporaire</p>
          <h1>L’admin est notre interface de travail pour construire Calisthenics Atlas.</h1>
          <p className="lead">
            Je prépare ici ce dont j’ai besoin de ta part. Tu remplis ce que tu sais, tu écris tes questions directement sous les blocs concernés, puis tu me transmets le bilan dans notre conversation. Je peux alors analyser tes réponses et faire évoluer cette page avec l’étape suivante.
          </p>
          <div className={styles.progressRow}>
            <strong>{completed}/{requiredKeys.length} informations éditeur essentielles renseignées</strong>
            <span>{savedAt ? `Sauvegardé localement à ${savedAt}` : "Sauvegarde locale automatique"}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`shell ${styles.grid}`}>
          <aside className={styles.roadmap}>
            <p className="eyebrow">Notre fonctionnement</p>
            <ol>
              <li><strong>Je prépare l’admin</strong><span>J’y mets les informations, décisions ou tests dont j’ai réellement besoin.</span></li>
              <li><strong>Tu la remplis</strong><span>Tu peux écrire « je ne sais pas » et utiliser les zones de notes dès qu’un point n’est pas clair.</span></li>
              <li><strong>Tu copies le bilan</strong><span>Le bouton en bas prépare un texte structuré à coller dans notre conversation.</span></li>
              <li><strong>Je reprends la main</strong><span>Je lis ton bilan, réponds à tes questions et mets l’admin à jour avec la prochaine étape.</span></li>
            </ol>
            <div className={styles.missionBox}>
              <span>Ce que j’attends de toi maintenant</span>
              <strong>{nextMission}</strong>
            </div>
          </aside>

          <div className={styles.formColumn}>
            <section className={styles.panel}>
              <div className={styles.panelHeading}>
                <div><p className="eyebrow">Bloc 1 · nécessaire maintenant</p><h2>Qui publie Calisthenics Atlas ?</h2></div>
                <span className={styles.status}>{completed}/{requiredKeys.length}</span>
              </div>
              <p>Remplis seulement ce qui correspond à ta situation réelle aujourd’hui. Si tu ne comprends pas une question ou si tu hésites, ne devine pas : écris-le dans la zone de notes en bas du bloc.</p>

              <label className={styles.field}>
                <span>Ta situation actuelle</span>
                <select value={form.publisherType} onChange={(event) => update("publisherType", event.target.value)}>
                  <option value="unknown">Je ne sais pas encore</option>
                  <option value="individual">Je publie en mon nom, sans entreprise pour l’instant</option>
                  <option value="micro">Micro-entreprise / entreprise individuelle</option>
                  <option value="company">Société</option>
                  <option value="association">Association</option>
                </select>
                <small>Cette réponse me permettra de vérifier ensuite quelles mentions sont réellement nécessaires.</small>
              </label>

              <label className={styles.field}>
                <span>Ton nom et prénom réels</span>
                <input value={form.legalName} onChange={(event) => update("legalName", event.target.value)} placeholder="Ex. Jean Dupont" autoComplete="name" />
                <small>Information potentiellement sensible : ne la remplis que si tu acceptes de l’utiliser pour les obligations liées à l’éditeur.</small>
              </label>

              <label className={styles.field}>
                <span>Nom public du projet</span>
                <input value={form.publicName} onChange={(event) => update("publicName", event.target.value)} placeholder="Calisthenics Atlas" />
              </label>

              <label className={styles.field}>
                <span>Nom de l’entreprise ou structure, si tu en as une</span>
                <input value={form.companyName} onChange={(event) => update("companyName", event.target.value)} placeholder="Laisse vide si tu n’en as pas" />
              </label>

              <label className={styles.field}>
                <span>SIREN / SIRET ou autre numéro d’immatriculation, si applicable</span>
                <input value={form.registrationNumber} onChange={(event) => update("registrationNumber", event.target.value)} placeholder="Laisse vide si tu n’en as pas" inputMode="numeric" />
              </label>

              <label className={`${styles.field} ${styles.noteField}`}>
                <span>Mes questions / incompréhensions sur ce bloc</span>
                <textarea value={form.publisherNotes} onChange={(event) => update("publisherNotes", event.target.value)} rows={4} placeholder="Ex. Je ne sais pas si je dois publier en mon nom ou créer une micro-entreprise. Explique-moi quoi faire." />
                <small>Écris ici comme tu me parlerais dans la conversation. Je traiterai ces notes quand tu m’enverras le bilan.</small>
              </label>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeading}><div><p className="eyebrow">Bloc 2 · nécessaire maintenant</p><h2>Contact et publication</h2></div></div>

              <label className={styles.field}>
                <span>Adresse à utiliser pour les mentions légales</span>
                <textarea value={form.address} onChange={(event) => update("address", event.target.value)} rows={3} placeholder="Adresse postale ou « je ne sais pas encore »" />
                <small>Une adresse personnelle peut être sensible. Si tu ne sais pas quelle solution utiliser, écris-le plutôt que de choisir au hasard.</small>
              </label>

              <label className={styles.field}>
                <span>Email public de contact</span>
                <input type="email" value={form.publicEmail} onChange={(event) => update("publicEmail", event.target.value)} placeholder="Ex. contact@ton-domaine.fr" autoComplete="email" />
                <small>Une adresse dédiée au projet sera préférable à ton adresse personnelle principale.</small>
              </label>

              <label className={styles.field}>
                <span>Directeur ou responsable de publication</span>
                <input value={form.publicationDirector} onChange={(event) => update("publicationDirector", event.target.value)} placeholder="Si tu ne sais pas, laisse vide et note ta question dessous" />
                <small>Je vérifierai la formulation adaptée à ta situation avant toute publication.</small>
              </label>

              <label className={`${styles.field} ${styles.noteField}`}>
                <span>Mes questions / incompréhensions sur ce bloc</span>
                <textarea value={form.contactNotes} onChange={(event) => update("contactNotes", event.target.value)} rows={4} placeholder="Ex. Je ne veux pas afficher mon adresse personnelle : quelles sont mes options ?" />
              </label>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeading}><div><p className="eyebrow">Bloc 3 · gate V1</p><h2>Test réel sur téléphone</h2></div></div>
              <p>Je ne peux pas faire ce test physique à ta place. Parcours réellement le site sur ton téléphone comme un nouvel utilisateur et raconte-moi ce qui te gêne, même si tu n’es pas sûr que ce soit un bug.</p>

              <label className={styles.checkRow}>
                <input type="checkbox" checked={form.phoneTestDone} onChange={(event) => update("phoneTestDone", event.target.checked)} />
                <span><strong>J’ai réellement testé le parcours complet de Calisthenics Atlas sur mon téléphone.</strong><small>Ne coche ceci qu’après le test. Les observations vont juste dessous.</small></span>
              </label>

              <label className={`${styles.field} ${styles.noteField}`}>
                <span>Mes observations / problèmes / incompréhensions</span>
                <textarea value={form.phoneNotes} onChange={(event) => update("phoneNotes", event.target.value)} rows={5} placeholder="Ex. Sur la page Aujourd’hui le bouton est trop bas ; je ne comprends pas ce que signifie “contrôle scapulaire” ; rien à signaler sur le reste." />
              </label>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeading}><div><p className="eyebrow">Bloc 4 · direction business</p><h2>Ce que tu veux construire</h2></div></div>

              <label className={styles.checkRow}>
                <input type="checkbox" checked={form.affiliationPlanned} onChange={(event) => update("affiliationPlanned", event.target.checked)} />
                <span><strong>Je souhaite monétiser Calisthenics Atlas avec de l’affiliation à terme.</strong><small>Le produit, la confiance et le trafic passent avant l’ajout massif de liens commerciaux.</small></span>
              </label>

              <label className={`${styles.field} ${styles.noteField}`}>
                <span>Mes idées, envies ou questions business</span>
                <textarea value={form.businessNotes} onChange={(event) => update("businessNotes", event.target.value)} rows={4} placeholder="Ex. J’aimerais que le site demande peu de maintenance. Je ne sais pas encore quels produits recommander." />
              </label>
            </section>

            <section className={`${styles.panel} ${styles.handoffPanel}`}>
              <p className="eyebrow">Quand tu as fini pour cette fois</p>
              <h2>Transmets-moi l’état de l’admin</h2>
              <p>
                Je ne peux pas lire directement les données enregistrées dans le navigateur de ton téléphone ou de ton ordinateur. Ce bouton prépare donc un bilan structuré de tes réponses et de tes notes. Copie-le puis colle-le simplement dans notre conversation.
              </p>

              <label className={`${styles.field} ${styles.noteField}`}>
                <span>Autre chose que tu veux me dire avant de reprendre</span>
                <textarea value={form.generalNotes} onChange={(event) => update("generalNotes", event.target.value)} rows={4} placeholder="Une idée, un doute, une priorité, quelque chose que tu trouves bizarre sur le site…" />
              </label>

              <div className={styles.handoffActions}>
                <button type="button" className={styles.copyButton} onClick={copyReport}>Copier le bilan pour ChatGPT</button>
                <span aria-live="polite">
                  {copyState === "copied" && "Bilan copié. Reviens dans la conversation et colle-le."}
                  {copyState === "error" && "La copie automatique a échoué. Réessaie depuis un navigateur autorisant le presse-papiers."}
                </span>
              </div>
              <p className={styles.notice}>Le bilan peut contenir les informations personnelles que tu as saisies. Relis-le avant de le coller si tu souhaites retirer une donnée sensible.</p>
            </section>

            <section className={`${styles.panel} ${styles.knownPanel}`}>
              <p className="eyebrow">Déjà connu techniquement</p>
              <h2>Ce que tu n’as pas besoin de rechercher maintenant</h2>
              <div className={styles.knownGrid}>
                <div><span>Projet</span><strong>Calisthenics Atlas</strong></div>
                <div><span>Publication actuelle</span><strong>GitHub Pages</strong></div>
                <div><span>Architecture</span><strong>Site statique, sans compte</strong></div>
                <div><span>Priorité</span><strong>V1 fiable avant croissance</strong></div>
              </div>
              <p className={styles.notice}>Ce cockpit n’est pas protégé par un mot de passe et ses données restent locales à ton appareil. Il sert à travailler ensemble, pas à stocker des mots de passe, clés API ou autres secrets.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
