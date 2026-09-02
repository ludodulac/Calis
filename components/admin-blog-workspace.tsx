"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./admin-blog-workspace.module.css";

type Draft = {
  id: string;
  topic: string;
  mainQuery: string;
  audience: string;
  promise: string;
  researchNotes: string;
  sources: string;
  humanInput: string;
  outline: string;
  draftBody: string;
  seoTitle: string;
  metaDescription: string;
  slug: string;
  internalLinks: string;
  affiliateIdeas: string;
  youtubeScript: string;
  questions: string;
  researchValidated: boolean;
  humanValueAdded: boolean;
  factsChecked: boolean;
  readyForReview: boolean;
};

const STORAGE_KEY = "calis-atlas-blog-workspace-v1";

const newDraft = (): Draft => ({
  id: crypto.randomUUID(),
  topic: "",
  mainQuery: "",
  audience: "",
  promise: "",
  researchNotes: "",
  sources: "",
  humanInput: "",
  outline: "",
  draftBody: "",
  seoTitle: "",
  metaDescription: "",
  slug: "",
  internalLinks: "",
  affiliateIdeas: "",
  youtubeScript: "",
  questions: "",
  researchValidated: false,
  humanValueAdded: false,
  factsChecked: false,
  readyForReview: false,
});

function printable(value: string) {
  return value.trim() || "NON RENSEIGNÉ";
}

export function AdminBlogWorkspace() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [activeId, setActiveId] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Draft[];
        if (Array.isArray(parsed) && parsed.length) {
          setDrafts(parsed);
          setActiveId(parsed[0].id);
          setLoaded(true);
          return;
        }
      }
    } catch {
      // Start from a clean local workspace if storage is unavailable.
    }
    const first = newDraft();
    setDrafts([first]);
    setActiveId(first.id);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
    setCopyState("idle");
  }, [drafts, loaded]);

  const active = useMemo(() => drafts.find((draft) => draft.id === activeId) || drafts[0], [drafts, activeId]);

  const update = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    if (!active) return;
    setDrafts((current) => current.map((draft) => draft.id === active.id ? { ...draft, [key]: value } : draft));
  };

  const addDraft = () => {
    const draft = newDraft();
    setDrafts((current) => [draft, ...current]);
    setActiveId(draft.id);
  };

  const removeDraft = () => {
    if (!active || drafts.length === 1) return;
    const remaining = drafts.filter((draft) => draft.id !== active.id);
    setDrafts(remaining);
    setActiveId(remaining[0].id);
  };

  if (!active) return null;

  const checks = [active.researchValidated, active.humanValueAdded, active.factsChecked, active.readyForReview].filter(Boolean).length;

  const buildReport = () => [
    "CALISTHENICS ATLAS — DOSSIER BLOG",
    "",
    "Je te transmets ce dossier éditorial. Analyse-le, réponds à mes questions, vérifie ce qui doit l’être et prépare la prochaine étape. Ne publie rien automatiquement sans revue humaine.",
    "",
    "[SUJET]",
    `Sujet : ${printable(active.topic)}`,
    `Requête principale : ${printable(active.mainQuery)}`,
    `Public visé : ${printable(active.audience)}`,
    `Promesse : ${printable(active.promise)}`,
    "",
    "[RECHERCHE]",
    `Notes : ${printable(active.researchNotes)}`,
    `Sources à vérifier : ${printable(active.sources)}`,
    `Recherche validée : ${active.researchValidated ? "OUI" : "NON"}`,
    "",
    "[APPORT HUMAIN]",
    printable(active.humanInput),
    `Apport humain ajouté : ${active.humanValueAdded ? "OUI" : "NON"}`,
    "",
    "[STRUCTURE / ARTICLE]",
    `Plan : ${printable(active.outline)}`,
    `Brouillon : ${printable(active.draftBody)}`,
    `Faits vérifiés : ${active.factsChecked ? "OUI" : "NON"}`,
    `Prêt pour revue : ${active.readyForReview ? "OUI" : "NON"}`,
    "",
    "[SEO]",
    `Title : ${printable(active.seoTitle)}`,
    `Meta : ${printable(active.metaDescription)}`,
    `Slug : ${printable(active.slug)}`,
    `Liens internes : ${printable(active.internalLinks)}`,
    "",
    "[MONÉTISATION / DÉCLINAISONS]",
    `Idées affiliation : ${printable(active.affiliateIdeas)}`,
    `Script YouTube : ${printable(active.youtubeScript)}`,
    "",
    "[MES QUESTIONS]",
    printable(active.questions),
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
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow">Admin · Atelier éditorial</p>
          <h1>Construire le blog sans produire du contenu industriel.</h1>
          <p className="lead">Ici on travaille un sujet comme un actif : recherche, brief, apport humain, rédaction, vérification, SEO et déclinaisons. Un brouillon enregistré ici reste local à ton navigateur et n’apparaît pas automatiquement sur le site.</p>
          <div className={styles.heroActions}>
            <button type="button" onClick={addDraft}>+ Nouveau dossier</button>
            <Link href="/blog">Voir le blog public</Link>
            <Link href="/admin">Retour au cockpit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`shell ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <p className="eyebrow">Tes dossiers locaux</p>
            <div className={styles.draftList}>
              {drafts.map((draft, index) => (
                <button key={draft.id} type="button" className={draft.id === active.id ? styles.activeDraft : ""} onClick={() => setActiveId(draft.id)}>
                  <strong>{draft.topic || `Sujet ${drafts.length - index}`}</strong>
                  <span>{draft.mainQuery || "Requête à définir"}</span>
                </button>
              ))}
            </div>
            <div className={styles.progressBox}>
              <span>Qualité avant publication</span>
              <strong>{checks}/4 validations</strong>
              <small>Recherche · apport humain · vérification factuelle · revue finale.</small>
            </div>
            {drafts.length > 1 && <button type="button" className={styles.deleteButton} onClick={removeDraft}>Supprimer ce dossier local</button>}
          </aside>

          <main className={styles.editor}>
            <section className={styles.panel}>
              <p className="eyebrow">1 · Choisir le bon sujet</p><h2>Intention et promesse</h2>
              <label><span>Sujet de travail</span><input value={active.topic} onChange={(e) => update("topic", e.target.value)} placeholder="Ex. Commencer la callisthénie sans savoir faire une pompe" /></label>
              <label><span>Requête principale visée</span><input value={active.mainQuery} onChange={(e) => update("mainQuery", e.target.value)} placeholder="Ex. comment commencer la callisthénie débutant" /></label>
              <label><span>À qui répond-on ?</span><textarea value={active.audience} onChange={(e) => update("audience", e.target.value)} rows={3} placeholder="Décris la personne, son niveau et son problème réel." /></label>
              <label><span>Promesse de l’article</span><textarea value={active.promise} onChange={(e) => update("promise", e.target.value)} rows={3} placeholder="Après lecture, la personne saura exactement…" /></label>
            </section>

            <section className={styles.panel}>
              <p className="eyebrow">2 · Dossier de recherche</p><h2>Comprendre avant de rédiger</h2>
              <label><span>Recherche, questions connexes, angles manquants</span><textarea value={active.researchNotes} onChange={(e) => update("researchNotes", e.target.value)} rows={7} placeholder="On mettra ici l’intention de recherche, les questions, les concurrents, les éléments à vérifier et ce qu’Atlas peut apporter de mieux." /></label>
              <label><span>Sources fiables à vérifier / citer</span><textarea value={active.sources} onChange={(e) => update("sources", e.target.value)} rows={5} placeholder="Nom de la source + URL ou référence. Pour les sujets santé/sécurité, sois particulièrement strict." /></label>
              <Check checked={active.researchValidated} onChange={(value) => update("researchValidated", value)} label="J’ai validé le dossier de recherche avant de passer à la rédaction." />
            </section>

            <section className={styles.panel}>
              <p className="eyebrow">3 · Ta matière humaine</p><h2>Ce que l’IA ne doit pas inventer</h2>
              <p>Dicte ou écris ici tes idées brutes, tes doutes, ce que tu veux absolument expliquer, ce que tu as observé ou testé. Si tu n’as pas d’expérience personnelle sur le point traité, dis-le explicitement.</p>
              <label><span>Mes remarques personnelles / consignes</span><textarea value={active.humanInput} onChange={(e) => update("humanInput", e.target.value)} rows={8} placeholder="Ex. Je veux être très clair sur le fait qu’un débutant peut commencer sans matériel…" /></label>
              <Check checked={active.humanValueAdded} onChange={(value) => update("humanValueAdded", value)} label="J’ai ajouté une vraie contribution humaine ou clairement indiqué ce que je ne sais pas." />
            </section>

            <section className={styles.panel}>
              <p className="eyebrow">4 · Construire l’article</p><h2>Plan puis brouillon</h2>
              <label><span>Plan / brief éditorial</span><textarea value={active.outline} onChange={(e) => update("outline", e.target.value)} rows={7} placeholder="H2, questions à traiter, exemples, éléments à sourcer, CTA Atlas…" /></label>
              <label><span>Brouillon de l’article</span><textarea value={active.draftBody} onChange={(e) => update("draftBody", e.target.value)} rows={18} placeholder="Le texte peut être rédigé ici progressivement. On le vérifiera avant publication." /></label>
              <Check checked={active.factsChecked} onChange={(value) => update("factsChecked", value)} label="Les affirmations factuelles importantes ont été vérifiées." />
              <Check checked={active.readyForReview} onChange={(value) => update("readyForReview", value)} label="Le brouillon est prêt à être relu ensemble avant intégration au site." />
            </section>

            <section className={styles.panel}>
              <p className="eyebrow">5 · SEO et maillage</p><h2>Préparer la page, pas bourrer des mots-clés</h2>
              <label><span>Title SEO</span><input value={active.seoTitle} onChange={(e) => update("seoTitle", e.target.value)} /></label>
              <label><span>Meta description</span><textarea value={active.metaDescription} onChange={(e) => update("metaDescription", e.target.value)} rows={3} /></label>
              <label><span>Slug souhaité</span><input value={active.slug} onChange={(e) => update("slug", e.target.value)} placeholder="commencer-callisthenie-debutant" /></label>
              <label><span>Liens internes possibles</span><textarea value={active.internalLinks} onChange={(e) => update("internalLinks", e.target.value)} rows={4} placeholder="Pages Atlas à relier, avec la raison du lien." /></label>
            </section>

            <section className={styles.panel}>
              <p className="eyebrow">6 · Déclinaisons utiles</p><h2>Un sujet peut produire plusieurs actifs</h2>
              <label><span>Produits / affiliation réellement pertinents</span><textarea value={active.affiliateIdeas} onChange={(e) => update("affiliateIdeas", e.target.value)} rows={4} placeholder="Laisse vide s’il n’y a aucune recommandation naturelle. Ne force pas une monétisation." /></label>
              <label><span>Script téléprompteur YouTube</span><textarea value={active.youtubeScript} onChange={(e) => update("youtubeScript", e.target.value)} rows={10} placeholder="Version parlée, phrases plus courtes, construite à partir de la même recherche." /></label>
            </section>

            <section className={`${styles.panel} ${styles.handoff}`}>
              <p className="eyebrow">7 · Reviens dans la conversation</p><h2>Envoie-moi ce dossier</h2>
              <p>Tu peux t’arrêter à n’importe quelle étape. Note ce qui te bloque et colle-moi le bilan : je pourrai faire la recherche, proposer le brief, corriger le brouillon ou préparer l’intégration publique selon l’état du dossier.</p>
              <label><span>Mes questions / incompréhensions</span><textarea value={active.questions} onChange={(e) => update("questions", e.target.value)} rows={5} placeholder="Ex. Je ne sais pas comment choisir la requête principale. Fais-le avec moi." /></label>
              <div className={styles.copyRow}>
                <button type="button" onClick={copyReport}>Copier le dossier pour ChatGPT</button>
                <span>{copyState === "copied" ? "Dossier copié. Colle-le dans notre conversation." : copyState === "error" ? "La copie a échoué : sélectionne le contenu manuellement." : "Les données restent dans ce navigateur jusqu’à ce que tu choisisses de me les transmettre."}</span>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

function Check({ checked, onChange, label }: { checked: boolean; onChange: (value: boolean) => void; label: string }) {
  return <label className={styles.check}><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} /><span>{label}</span></label>;
}
