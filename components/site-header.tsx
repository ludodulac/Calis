import Link from "next/link";

const nav = [
  ["Je débute", "/commencer"],
  ["Choisir un objectif", "/#objectifs"],
  ["Tout explorer", "/bibliotheque"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="brand" aria-label="Calis - Accueil">CALIS</Link>
        <nav className="desktopNav" aria-label="Navigation principale">
          <ul className="mainNav">
            {nav.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          <Link className="mobileStart" href="/confidentialite">Vie privée</Link>
          <Link className="mobileStart" href="/commencer">Je débute</Link>
        </div>
      </div>
    </header>
  );
}
