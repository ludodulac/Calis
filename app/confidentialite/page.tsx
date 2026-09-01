import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Comment Calis utilise le stockage local et quelles données quittent ou non ton navigateur dans la V1.",
  alternates: { canonical: "/confidentialite/" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero shell narrow">
        <div className="eyebrow">Confidentialité · V1</div>
        <h1>Ton entraînement reste dans ton navigateur.</h1>
        <p className="lead">Calis fonctionne actuellement sans compte et sans synchronisation serveur. Les informations utilisées par <strong>Aujourd'hui</strong> servent à retrouver ton point de départ, tes séances et ton objectif sur cet appareil.</p>
      </section>

      <section className="section sectionSoft">
        <div className="shell narrow">
          <div className="sectionHeading">
            <div className="eyebrow">Stockage local</div>
            <h2>Ce que Calis mémorise sur ton appareil</h2>
          </div>
          <div className="mistakeList">
            <div><strong>Ton point de départ</strong><p>Les réponses au diagnostic court sont enregistrées localement pour adapter les Fondations.</p></div>
            <div><strong>Tes séances</strong><p>Les résultats que tu saisis sont conservés dans le stockage local du navigateur afin d'afficher l'historique et de prendre les décisions de progression prévues par la V1.</p></div>
            <div><strong>Ton objectif principal</strong><p>Calis peut mémoriser la priorité choisie — Fondations, traction, pompes ou jambes — pour garder le parcours cohérent lors d'une prochaine visite.</p></div>
          </div>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="sectionHeading">
          <div className="eyebrow">Ce que la V1 ne fait pas</div>
          <h2>Pas de compte, pas de profil serveur, pas de publicité ciblée.</h2>
        </div>
        <div className="mistakeList">
          <div><strong>Pas de synchronisation Calis</strong><p>Les données d'entraînement de la V1 ne sont pas envoyées vers une base de données Calis et ne suivent pas automatiquement l'utilisateur sur plusieurs appareils.</p></div>
          <div><strong>Pas d'analytics intégré actuellement</strong><p>Le code de la V1 n'intègre pas actuellement d'outil de mesure d'audience, de pixel publicitaire ou de suivi comportemental tiers. Si cela change, cette page et les choix de consentement devront être revus avant activation.</p></div>
          <div><strong>Pas d'affiliation active dans le moteur</strong><p>Si des liens rémunérés sont ajoutés plus tard, ils devront être identifiables et ne devront jamais modifier artificiellement une progression pour créer un besoin d'achat.</p></div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell narrow">
          <div className="sectionHeading">
            <div className="eyebrow">Contrôle</div>
            <h2>Le stockage local dépend de ton navigateur.</h2>
          </div>
          <p>Effacer les données du site dans ton navigateur peut supprimer l'historique local de Calis. Refaire simplement ton point de départ dans l'application, en revanche, conserve les séances déjà enregistrées.</p>
          <p>L'hébergement du site est assuré par GitHub Pages. Comme tout hébergeur web, GitHub peut traiter des informations techniques liées à la fourniture et à la sécurité de son service selon ses propres conditions et politiques.</p>
          <div className="actions"><Link className="button primary" href="/aujourdhui">Retour à Aujourd'hui</Link><Link className="button secondary" href="/">Accueil</Link></div>
        </div>
      </section>
    </>
  );
}
