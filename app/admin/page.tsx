import type { Metadata } from "next";
import { AdminBusinessCockpit } from "@/components/admin-business-cockpit";

export const metadata: Metadata = {
  title: "Admin propriétaire",
  description: "Cockpit temporaire du propriétaire de Calis.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminBusinessCockpit />;
}
