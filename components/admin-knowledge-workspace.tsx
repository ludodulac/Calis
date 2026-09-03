"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./admin-knowledge-workspace.module.css";

type KnowledgeItem = {
  id: string;
  title: string;
  source: string;
  sourceType: "document" | "video" | "note" | "feedback" | "other";
  theme: string;
  rawMaterial: string;
  claim: string;
  practicalValue: string;
  destination: "library" | "progression" | "training" | "blog" | "admin" | "discard" | "undecided";
  risk: "low" | "medium" | "high";
  evidenceState: "unreviewed" | "experience" | "plausible" | "supported" | "uncertain" | "rejected";
  verificationNotes: string;
  productDecision: string;
  nextAction: string;
  verified: boolean;
  preserveSource: boolean;
  readyForHandoff: boolean;
};

const STORAGE_KEY = "calis.admin.knowledge.v1";

const emptyItem = (): KnowledgeItem => ({
  id: crypto.randomUUID(),
  title: "",
  source: "",
  sourceType: "document",
  theme: "",
  rawMaterial: "",
  claim: "",
  practicalValue: "",
  destination: "undecided",
  risk: "medium",
  evidenceState: "unreviewed",
  verificationNotes: "",
  productDecision: "",
  nextAction: "",
  verified: false,
  preserveSource: true,
  readyForHandoff: false,
});

function valueOrEmpty(value: string) {
  return value.trim() || "NON RENSEIGNÉ";
}

export function AdminKnowledgeWorkspace() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as KnowledgeItem[];
        if (Array.isArray(parsed) && parsed.length) {
          setItems(parsed);
          setActiveId(parsed[0].id);
          setLoaded(true);
          return;
        }
      }
    } catch {
      // A broken local workspace must never block the admin.
    }
    const first = emptyItem();
    setItems([first]);
    setActiveId(first.id);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setCopyState("idle");
  }, [items, loaded]);

  const active = useMemo(() => items.find((item) => item.id === activeId) || items[0], [items, activeId]);

  const update = <K extends keyof KnowledgeItem>(key: K, value: KnowledgeItem[K]) => {
    if (!active) return;
    setItems((current) => current.map((item) => item.id === active.id ? { ...item, [key]: value } : item));
  };

  const addItem = () => {
    const item = emptyItem();
    setItems((current) => [item, ...current]);
    setActiveId(item.id);
  };

  const removeItem = () => {
    if (!active || items.length === 1) return;
    const remaining = items.filter((item) => item.id !== active.id);
    setItems(remaining);
    setActiveId(remaining[0].id);
  };

  if (!active) return null;

  const buildHandoff = () => [
    "CALIS — FICHE CONNAISSANCE À TRAITER",
    "",
    "Analyse cette matière sans la transformer automatiquement en vérité Calis. Vérifie les affirmations qui le nécessitent, conserve la source et propose la destination produit la plus utile.",
    "",
    `[TITRE] ${valueOrEmpty(active.title)}`,
    `[SOURCE] ${valueOrEmpty(active.source)}`,
    `[TYPE] ${active.sourceType}`,
    `[THÈME] ${valueOrEmpty(active.theme)}`,
    "",
    "[MATIÈRE BRUTE]",
    valueOrEmpty(active.rawMaterial),
    "",
    "[AFFIRMATION / IDÉE À ÉVALUER]",
    valueOrEmpty(active.claim),
    "",
    "[VALEUR PRATIQUE POSSIBLE]",
    valueOrEmpty(active.practicalValue),
    "",
    `[DESTINATION ENVISAGÉE] ${active.destination}`,
    `[RISQUE] ${active.risk}`,
    `[ÉTAT DE PREUVE] ${active.evidenceState}`,
    `[VÉRIFIÉ] ${active.verified ? "OUI" : "NON"}`,
    "",
    "[NOTES DE VÉRIFICATION]",
    valueOrEmpty(active.verificationNotes),
    "",
    "[DÉCISION PRODUIT]",
    valueOrEmpty(active.productDecision),
    "",
    "[PROCHAINE ACTION]",
    valueOrEmpty(active.nextAction),
  ].join("\n");

  const copyHandoff = async () => {
    try {
      await navigator.clipboard.writeText(buildHandoff());
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Admin · Atelier connaissances</p>
          <h1>Trier la matière avant qu’elle devienne une règle Calis.</h1>
          <p className="lead">Dépose ici un chapitre, une vidéo, une note, un retour ou une idée. L’objectif est de séparer la matière brute, l’affirmation à vérifier et la décision produit. Rien n’est publié automatiquement.</p>
          <div className={styles.actions}>
            <button type="button" onClick={addItem}>+ Nouvelle fiche</button>
            <Link href="/admin/blog">Atelier blog</Link>
            <Link href="/admin">Retour au cockpit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`shell ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <p className="eyebrow">Fiches locales</p>
            <div className={styles.itemList}>
              {items.map((item, index) => (
                <button key={item.id} type="button" className={item.id === active.id ? styles.activeItem : ""} onClick={() => setActiveId(item.id)}>
                  <strong>{item.title || `Matière ${items.length - index}`}</strong>
                  <span>{item.theme || "Thème à classer"}</span>
                </button>
              ))}
            </div>
            <div className={styles.guardrail}>
              <strong>{active.verified ? "Vérification faite" : "À vérifier"}</strong>
              <span>{active.destination === "undecided" ? "Destination non décidée" : `Destination : ${active.destination}`}</span>
              <small>Une idée utile peut rester en attente. Une idée sourcée peut aussi être rejetée si elle n’aide pas le produit.</small>
            </div>
            {items.length > 1 && <button type="button" className={styles.deleteButton} onClick={removeItem}>Supprimer cette fiche locale</button>}
          </aside>

          <main className={styles.editor}>
            <Panel step="1" title="Identifier la matière">
              <label><span>Titre de travail</span><input value={active.title} onChange={(e) => update("title", e.target.value)} placeholder="Ex. Régression en cours de série" /></label>
              <div className={styles.twoColumns}>
                <label><span>Type de source</span><select value={active.sourceType} onChange={(e) => update("sourceType", e.target.value as KnowledgeItem["sourceType"])}><option value="document">Document</option><option value="video">Vidéo</option><option value="note">Note personnelle</option><option value="feedback">Retour utilisateur</option><option value="other">Autre</option></select></label>
                <label><span>Thème</span><input value={active.theme} onChange={(e) => update("theme", e.target.value)} placeholder="Traction, core, récupération…" /></label>
              </div>
              <label><span>Source / provenance</span><input value={active.source} onChange={(e) => update("source", e.target.value)} placeholder="Titre, auteur, URL, fichier ou contexte" /></label>
              <label><span>Matière brute à conserver</span><textarea value={active.rawMaterial} onChange={(e) => update("rawMaterial", e.target.value)} rows={8} placeholder="Colle ici l’extrait, le résumé fidèle ou tes notes. Ne reformule pas au point de perdre la provenance." /></label>
              <Check checked={active.preserveSource} onChange={(value) => update("preserveSource", value)} label="La provenance reste attachée à cette matière." />
            </Panel>

            <Panel step="2" title="Isoler ce qui doit être évalué">
              <label><span>Affirmation, principe ou idée</span><textarea value={active.claim} onChange={(e) => update("claim", e.target.value)} rows={5} placeholder="Ex. Quand une variante devient trop difficile en cours de série, terminer le volume sur une régression peut préserver la qualité." /></label>
              <label><span>Valeur pratique possible</span><textarea value={active.practicalValue} onChange={(e) => update("practicalValue", e.target.value)} rows={4} placeholder="Qu’est-ce que cela pourrait améliorer pour l’utilisateur ?" /></label>
              <div className={styles.threeColumns}>
                <label><span>Risque</span><select value={active.risk} onChange={(e) => update("risk", e.target.value as KnowledgeItem["risk"])}><option value="low">Faible</option><option value="medium">Moyen</option><option value="high">Élevé</option></select></label>
                <label><span>État de preuve</span><select value={active.evidenceState} onChange={(e) => update("evidenceState", e.target.value as KnowledgeItem["evidenceState"])}><option value="unreviewed">Non relu</option><option value="experience">Expérience / témoignage</option><option value="plausible">Plausible à vérifier</option><option value="supported">Étayer / soutenu</option><option value="uncertain">Incertain</option><option value="rejected">Rejeté</option></select></label>
                <label><span>Destination</span><select value={active.destination} onChange={(e) => update("destination", e.target.value as KnowledgeItem["destination"])}><option value="undecided">À décider</option><option value="library">Bibliothèque</option><option value="progression">Progression</option><option value="training">Moteur / séance</option><option value="blog">Blog / guide</option><option value="admin">Backlog admin</option><option value="discard">À écarter</option></select></label>
              </div>
            </Panel>

            <Panel step="3" title="Vérifier avant d’intégrer">
              <p>Plus le sujet touche à la santé, la sécurité, la physiologie, la nutrition ou une prescription précise, plus la barre de preuve doit monter.</p>
              <label><span>Notes de vérification</span><textarea value={active.verificationNotes} onChange={(e) => update("verificationNotes", e.target.value)} rows={7} placeholder="Sources consultées, limites, consensus, contradiction éventuelle, ce que l’on peut dire honnêtement." /></label>
              <Check checked={active.verified} onChange={(value) => update("verified", value)} label="J’ai vérifié ce qui devait l’être ou explicitement conservé l’incertitude." />
            </Panel>

            <Panel step="4" title="Décider pour le produit">
              <label><span>Décision produit</span><textarea value={active.productDecision} onChange={(e) => update("productDecision", e.target.value)} rows={5} placeholder="Ex. À garder comme principe pédagogique, mais pas comme règle automatique tant que Calis ne stocke pas la difficulté de la variante." /></label>
              <label><span>Prochaine action concrète</span><textarea value={active.nextAction} onChange={(e) => update("nextAction", e.target.value)} rows={4} placeholder="Créer une fiche, compléter une progression, rechercher davantage, ne rien faire avant V1 stable…" /></label>
              <Check checked={active.readyForHandoff} onChange={(value) => update("readyForHandoff", value)} label="Cette fiche est assez claire pour être reprise dans une conversation ou une PR." />
            </Panel>

            <section className={`${styles.panel} ${styles.handoff}`}>
              <p className="eyebrow">5 · Passation</p>
              <h2>Transmettre sans perdre le contexte</h2>
              <p>Copie cette fiche dans la conversation quand tu veux que je la transforme en recherche, décision produit, contenu ou modification du dépôt.</p>
              <div className={styles.copyRow}>
                <button type="button" onClick={copyHandoff}>Copier la fiche pour ChatGPT</button>
                <span>{copyState === "copied" ? "Fiche copiée." : copyState === "error" ? "La copie a échoué." : "Les données restent uniquement dans ce navigateur tant que tu ne les transmets pas."}</span>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

function Panel({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return <section className={styles.panel}><p className="eyebrow">{step}</p><h2>{title}</h2>{children}</section>;
}

function Check({ checked, onChange, label }: { checked: boolean; onChange: (value: boolean) => void; label: string }) {
  return <label className={styles.check}><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} /><span>{label}</span></label>;
}
