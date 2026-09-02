import type { Metadata } from "next";
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
      <AdminBusinessRoadmap />
    </>
  );
}
