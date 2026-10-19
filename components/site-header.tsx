import Link from "next/link";
export function SiteHeader(){
 return <header className="siteHeader"><div className="shell headerInner">
  <Link href="/" className="brand" aria-label="CALIS — Accueil">CALIS</Link>
  <nav className="desktopNav" aria-label="Navigation principale"><ul className="mainNav">
   <li><Link href="/">Mes objectifs</Link></li>
   <li><Link href="/#niveaux">Programmes</Link></li>
   <li><Link href="/conseils-importants">Conseils importants</Link></li>
  </ul></nav>
  <div className="mobileHeaderActions"><Link className="mobileStart" href="/">Mes objectifs</Link></div>
 </div></header>;
}
