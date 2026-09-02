"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";

const items = [
  { href: "/", label: "Accueil", icon: "home" as const },
  { href: "/aujourdhui", label: "Aujourd'hui", icon: "today" as const },
  { href: "/bibliotheque", label: "Bibliothèque", icon: "library" as const },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileAppNav() {
  const pathname = usePathname();

  return (
    <nav className="mobileAppNav" aria-label="Navigation principale mobile">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link href={item.href} key={item.href} className={active ? "isActive" : undefined} aria-current={active ? "page" : undefined}>
            <span aria-hidden="true"><Icon name={item.icon} size={20} /></span>
            <b>{item.label}</b>
          </Link>
        );
      })}
    </nav>
  );
}
