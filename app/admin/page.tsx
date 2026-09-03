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
          <p className="eyebrow">Ateliers de travail</p>
          <h2>Transformer la matière en contenu utile, sans brûler les étapes.</h2>
          <p className="lead">Commence par l’atelier connaissances pour trier une source, isoler ce qui doit être vérifié et décider si cela mérite une place dans Calis. Passe ensuite à l’atelier blog uniquement quand le sujet est assez mûr pour être rédigé.</p>
          <div className="button-row">
            <Link className="button" href="/admin/connaissances">Ouvrir l’atelier connaissances</Link>
            <Link className="button button-secondary" href="/admin/blog">Ouvrir l’atelier blog</Link>
          </div>
        </div>
      </section>
      <AdminBusinessRoadmap />
    </>
  );
}
