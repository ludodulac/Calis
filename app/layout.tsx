import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./ux-polish.css";
import "./modal-disclosure.css";
import "./sport-visual-system.css";
import { MobileAppNav } from "@/components/mobile-app-nav";
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
        <a className="skipLink" href="#contenu-principal">Aller au contenu principal</a>
        <div className="appFrame">
          <SiteHeader />
          <main id="contenu-principal" className="appContent" tabIndex={-1}>{children}</main>
          <MobileAppNav />
          <footer className="siteFooter">
            <div className="shell footerInner">
              <strong>Calis</strong>
              <span>Comprendre → essayer → ressentir → maîtriser → progresser.</span>
              <small>Calis propose des informations générales sur l'activité physique et l'apprentissage des mouvements. Le site ne remplace pas un avis, un diagnostic ou une prise en charge par un professionnel de santé qualifié.</small>
              <small><Link href="/confidentialite">Confidentialité</Link></small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
