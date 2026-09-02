import Link from "next/link";
import { Icon } from "@/components/icon";

const nav = [
  ["Je débute", "/commencer"],
  ["Choisir un objectif", "/#objectifs"],
  ["Tout explorer", "/bibliotheque"],
  ["À propos", "/a-propos"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="brand" aria-label="Calisthenics Atlas - Accueil">CALISTHENICS ATLAS</Link>
        <nav className="desktopNav" aria-label="Navigation principale">
          <ul className="mainNav">
            {nav.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="mobileHeaderActions">
          <Link className="mobileUtility" href="/confidentialite" aria-label="Vie privée"><Icon name="privacy" size={18} /></Link>
          <Link className="mobileStart" href="/commencer">Je débute</Link>
        </div>
      </div>
    </header>
  );
}
