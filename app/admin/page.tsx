import type { Metadata } from "next";
import Link from "next/link";
import { AdminBusinessCockpit } from "@/components/admin-business-cockpit";
import { AdminBusinessRoadmap } from "@/components/admin-business-roadmap";

export const metadata: Metadata = {
  title: "Admin propriétaire",
  description: "Cockpit de pilotage du propriétaire de Calisthenics Atlas.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <AdminBusinessCockpit />
      <section className="section">
        <div className="shell">
          <p className="eyebrow">Atelier disponible</p>
          <h2>Préparer les futurs guides du blog</h2>
          <p className="lead">L’atelier éditorial te permet de travailler un sujet, garder ta matière humaine, préparer les sources et me transmettre le dossier avant toute publication.</p>
          <p><Link className="button" href="/admin/blog">Ouvrir l’atelier blog</Link></p>
        </div>
      </section>
      <AdminBusinessRoadmap />
    </>
  );
}
