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
};

const STORAGE_KEY = "calis-owner-publisher-v1";

const emptyForm: PublisherForm = {
  publisherType: "unknown",
  legalName: "",
  publicName: "Calis",
  companyName: "",
  registrationNumber: "",
  address: "",
  publicEmail: "",
  publicationDirector: "",
  phoneTestDone: false,
  affiliationPlanned: true,
};

const requiredKeys: Array<keyof PublisherForm> = [
  "publisherType",
  "legalName",
  "address",
  "publicEmail",
  "publicationDirector",
];

function isFilled(key: keyof PublisherForm, value: PublisherForm[keyof PublisherForm]) {
  if (key === "publisherType") return value !== "unknown";
  return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
}

export function AdminBusinessCockpit() {
  const [form, setForm] = useState<PublisherForm>(emptyForm);
  const [loaded, setLoaded] = useState(false);
  const [savedAt, setSavedAt] = useState<string>("");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setForm({ ...emptyForm, ...JSON.parse(stored) });
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
  }, [form, loaded]);

  const completed = useMemo(
    () => requiredKeys.filter((key) => isFilled(key, form[key])).length,
    [form],
  );

  const update = <K extends keyof PublisherForm>(key: K, value: PublisherForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className={styles.adminPage}>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Cockpit propriétaire · temporaire</p>
          <h1>Construire le business Calis sans devoir tout connaître aujourd’hui.</h1>
          <p className="lead">
            Cette page te guide sur les informations et validations dont le projet a besoin. Tes réponses sont enregistrées uniquement dans ce navigateur pour l’instant : elles ne sont pas publiées automatiquement.
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
            <p className="eyebrow">Ton ordre de marche</p>
            <ol>
              <li className={form.phoneTestDone ? styles.done : ""}><strong>Tester la V1 sur ton téléphone</strong><span>Vérifier que le parcours fonctionne vraiment.</span></li>
              <li className={completed === requiredKeys.length ? styles.done : ""}><strong>Compléter l’identité de l’éditeur</strong><span>Pour préparer les mentions légales réelles.</span></li>
              <li><strong>Stabiliser et lancer</strong><span>Seulement une fois les deux gates précédents validés.</span></li>
              <li><strong>Développer le SEO utile</strong><span>Publier des contenus qui répondent à de vraies questions de débutants.</span></li>
              <li><strong>Monétiser proprement</strong><span>Affiliation pertinente après avoir créé de la confiance et du trafic.</span></li>
            </ol>
          </aside>

          <div className={styles.formColumn}>
            <section className={styles.panel}>
              <div className={styles.panelHeading}>
                <div><p className="eyebrow">Étape 1</p><h2>Qui publie Calis ?</h2></div>
                <span className={styles.status}>{completed}/{requiredKeys.length}</span>
              </div>
              <p>Pas besoin de connaître le jargon. Choisis simplement la situation la plus proche de la tienne aujourd’hui. On pourra la corriger plus tard si ton activité évolue.</p>

              <label className={styles.field}>
                <span>Ta situation actuelle</span>
                <select value={form.publisherType} onChange={(event) => update("publisherType", event.target.value)}>
                  <option value="unknown">Je ne sais pas encore</option>
                  <option value="individual">Je publie en mon nom, sans entreprise pour l’instant</option>
                  <option value="micro">Micro-entreprise / entreprise individuelle</option>
                  <option value="company">Société</option>
                  <option value="association">Association</option>
                </select>
                <small>Ça nous permet de savoir quelles informations devront réellement apparaître sur le site.</small>
              </label>

              <label className={styles.field}>
                <span>Ton nom et prénom réels</span>
                <input value={form.legalName} onChange={(event) => update("legalName", event.target.value)} placeholder="Ex. Jean Dupont" autoComplete="name" />
                <small>Ne mets ici que ce que tu accepteras d’utiliser pour les obligations de l’éditeur.</small>
              </label>

              <label className={styles.field}>
                <span>Nom public du projet</span>
                <input value={form.publicName} onChange={(event) => update("publicName", event.target.value)} placeholder="Calis" />
              </label>

              <label className={styles.field}>
                <span>Nom de l’entreprise ou structure, si tu en as une</span>
                <input value={form.companyName} onChange={(event) => update("companyName", event.target.value)} placeholder="Laisse vide si tu n’en as pas" />
              </label>

              <label className={styles.field}>
                <span>SIREN / SIRET ou autre numéro d’immatriculation, si applicable</span>
                <input value={form.registrationNumber} onChange={(event) => update("registrationNumber", event.target.value)} placeholder="Laisse vide si tu n’en as pas" inputMode="numeric" />
              </label>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeading}><div><p className="eyebrow">Étape 2</p><h2>Comment l’éditeur peut être contacté ?</h2></div></div>

              <label className={styles.field}>
                <span>Adresse à utiliser pour les mentions légales</span>
                <textarea value={form.address} onChange={(event) => update("address", event.target.value)} rows={3} placeholder="Adresse postale à déterminer" />
                <small>Une adresse personnelle peut être sensible. Si tu ne sais pas encore laquelle utiliser légalement, écris simplement « à déterminer » et on traitera ce point avant publication.</small>
              </label>

              <label className={styles.field}>
                <span>Email public de contact</span>
                <input type="email" value={form.publicEmail} onChange={(event) => update("publicEmail", event.target.value)} placeholder="Ex. contact@ton-domaine.fr" autoComplete="email" />
                <small>Idéalement une adresse dédiée au projet plutôt que ton adresse personnelle principale.</small>
              </label>

              <label className={styles.field}>
                <span>Directeur ou responsable de publication</span>
                <input value={form.publicationDirector} onChange={(event) => update("publicationDirector", event.target.value)} placeholder="Souvent toi si tu publies le site" />
                <small>On validera la formulation exacte selon ta situation juridique avant de la publier.</small>
              </label>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeading}><div><p className="eyebrow">Étape 3</p><h2>Validations du propriétaire</h2></div></div>

              <label className={styles.checkRow}>
                <input type="checkbox" checked={form.phoneTestDone} onChange={(event) => update("phoneTestDone", event.target.checked)} />
                <span><strong>J’ai réellement testé le parcours Calis sur mon téléphone.</strong><small>Ne coche ceci qu’après avoir fait le parcours complet et signalé les problèmes éventuels.</small></span>
              </label>

              <label className={styles.checkRow}>
                <input type="checkbox" checked={form.affiliationPlanned} onChange={(event) => update("affiliationPlanned", event.target.checked)} />
                <span><strong>Je souhaite monétiser Calis avec de l’affiliation à terme.</strong><small>Ça ne veut pas dire remplir le site de liens maintenant. Le produit et la confiance passent avant la monétisation.</small></span>
              </label>
            </section>

            <section className={`${styles.panel} ${styles.knownPanel}`}>
              <p className="eyebrow">Déjà connu techniquement</p>
              <h2>Ce que tu n’as pas besoin de rechercher maintenant</h2>
              <div className={styles.knownGrid}>
                <div><span>Projet</span><strong>Calis</strong></div>
                <div><span>Publication actuelle</span><strong>GitHub Pages</strong></div>
                <div><span>Architecture</span><strong>Site statique, sans compte</strong></div>
                <div><span>Priorité</span><strong>V1 fiable avant croissance</strong></div>
              </div>
              <p className={styles.notice}>Important : ce cockpit n’est pas protégé par un mot de passe et ses données restent locales à ton appareil. Il sert à préparer le lancement, pas à stocker des secrets.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
