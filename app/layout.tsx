import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./ux-polish.css";
import "./modal-disclosure.css";
import "./sport-visual-system.css";
import "./navigation-polish.css";
import { MobileAppNav } from "@/components/mobile-app-nav";
import { OwnerModeSwitch } from "@/components/owner-mode-switch";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ludodulac.github.io/Calis/"),
  title: {
    default: "Calisthenics Atlas — La plateforme française de callisthénie",
    template: "%s | Calisthenics Atlas",
  },
  description: "La plateforme française de callisthénie pour comprendre les mouvements, construire ses bases et progresser étape par étape au poids du corps.",
  applicationName: "Calisthenics Atlas",
  keywords: ["callisthénie", "calisthenics", "poids du corps", "traction", "pompe", "dips", "handstand"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Calisthenics Atlas",
    title: "Calisthenics Atlas — La plateforme française de callisthénie",
    description: "Comprendre les mouvements, construire ses bases et progresser à son rythme en callisthénie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calisthenics Atlas — La plateforme française de callisthénie",
    description: "Comprendre les mouvements, construire ses bases et progresser à son rythme en callisthénie.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skipLink" href="#contenu-principal">Aller au contenu principal</a>
        <div className="appFrame">
          <SiteHeader />
          <OwnerModeSwitch />
          <main id="contenu-principal" className="appContent" tabIndex={-1}>{children}</main>
          <MobileAppNav />
          <footer className="siteFooter">
            <div className="shell footerInner">
              <strong>Calisthenics Atlas</strong>
              <span>Comprendre → essayer → ressentir → maîtriser → progresser.</span>
              <small>Calisthenics Atlas propose des informations générales sur l'activité physique et l'apprentissage des mouvements. Le site ne remplace pas un avis, un diagnostic ou une prise en charge par un professionnel de santé qualifié.</small>
              <small><Link href="/a-propos">À propos</Link> · <Link href="/confidentialite">Confidentialité</Link></small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
