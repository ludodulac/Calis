import type { Metadata } from "next";
import { AdminBlogWorkspace } from "@/components/admin-blog-workspace";

export const metadata: Metadata = {
  title: "Atelier blog",
  description: "Atelier éditorial privé de Calisthenics Atlas pour préparer les futurs contenus du blog.",
  robots: { index: false, follow: false },
};

export default function AdminBlogPage() {
  return <AdminBlogWorkspace />;
}
