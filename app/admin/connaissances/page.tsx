import type { Metadata } from "next";
import { AdminKnowledgeWorkspace } from "@/components/admin-knowledge-workspace";

export const metadata: Metadata = {
  title: "Atelier connaissances",
  description: "Atelier privé pour trier, vérifier et orienter la matière éditoriale et produit de Calis.",
  robots: { index: false, follow: false },
};

export default function AdminKnowledgePage() {
  return <AdminKnowledgeWorkspace />;
}
