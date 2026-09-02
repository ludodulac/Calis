"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./owner-mode-switch.module.css";

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.8 12s3.3-6 9.2-6 9.2 6 9.2 6-3.3 6-9.2 6-9.2-6-9.2-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function OwnerModeSwitch() {
  const pathname = usePathname();
  const inAdmin = pathname === "/admin" || pathname?.startsWith("/admin/");

  return (
    <Link
      className={styles.switch}
      href={inAdmin ? "/" : "/admin"}
      aria-label={inAdmin ? "Voir le site public" : "Ouvrir l'administration temporaire"}
    >
      {inAdmin ? <EyeIcon /> : <span className={styles.dot} aria-hidden="true" />}
      <span>{inAdmin ? "Voir le site" : "Admin"}</span>
    </Link>
  );
}
