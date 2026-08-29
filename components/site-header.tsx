import Link from "next/link";

const nav = [
  ["Commencer", "/commencer"],
  ["Bibliothèque", "/bibliotheque"],
  ["Tractions", "/tractions"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="brand" aria-label="Calis - Accueil">CALIS</Link>
        <nav aria-label="Navigation principale">
          <ul className="mainNav">
            {nav.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
