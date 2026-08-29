import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Calis — Apprendre son corps et progresser en callisthénie",
    template: "%s | Calis",
  },
  description: "Une bibliothèque francophone pour comprendre la callisthénie, apprendre les mouvements et progresser à son rythme.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="siteFooter">
          <div className="shell footerInner">
            <strong>Calis</strong>
            <span>Comprendre → essayer → ressentir → maîtriser → progresser.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
