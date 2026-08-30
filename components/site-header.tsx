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
