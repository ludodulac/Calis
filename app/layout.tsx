import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./ux-polish.css";
import "./modal-disclosure.css";
import "./sport-visual-system.css";
import "./navigation-polish.css";
import "./calis-programmes.css";
import { MobileAppNav } from "@/components/mobile-app-nav";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
 metadataBase: new URL("https://ludodulac.github.io/Calis/"),
 title: {default:"CALIS — Renforcement au poids du corps",template:"%s | CALIS"},
 description:"Des programmes visuels de renforcement au poids du corps, progressifs et accessibles.",
 applicationName:"CALIS",
 keywords:["callisthénie","calisthenics","poids du corps","force","mobilité","programmes"],
 openGraph:{type:"website",locale:"fr_FR",siteName:"CALIS",title:"CALIS — Programmes d'entraînement progressifs",description:"Choisis tes objectifs, puis avance à ton rythme."}
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="fr"><body><a className="skipLink" href="#contenu-principal">Aller au contenu principal</a>
 <div className="appFrame">
  <SiteHeader/>
  <main id="contenu-principal" className="appContent" tabIndex={-1}>{children}</main>
  <MobileAppNav/>
  <footer className="siteFooter"><div className="shell footerInner">
   <strong>CALIS</strong>
   <span>Progresser sans se précipiter.</span>
   <small><Link href="/conseils-importants">Conseils importants</Link> · <Link href="/blog">Articles</Link> · <Link href="/a-propos">À propos</Link> · <Link href="/confidentialite">Confidentialité</Link> · <Link href="/admin">Administration</Link></small>
   <small>Informations générales sur le sport. Ne remplace ni un diagnostic ni une prise en charge médicale.</small>
  </div></footer>
 </div></body></html>;
}
