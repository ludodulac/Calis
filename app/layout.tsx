import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ludodulac.github.io/Calis/"),
  title: {
    default: "Calis — Apprendre son corps et progresser en callisthénie",
    template: "%s | Calis",
  },
  description: "Une bibliothèque francophone pour apprendre la callisthénie, comprendre les mouvements et progresser par capacités, du premier appui aux figures avancées.",
  applicationName: "Calis",
  keywords: ["callisthénie", "calisthenics", "poids du corps", "traction", "pompe", "dips", "handstand"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Calis",
    title: "Calis — Découvre ce dont ton corps est capable",
    description: "Apprends les mouvements, comprends ce que tu fais et progresse à ton rythme en callisthénie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calis — Découvre ce dont ton corps est capable",
    description: "Une bibliothèque francophone pour apprendre et progresser en callisthénie.",
  },
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
