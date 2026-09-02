import type { ReactNode } from "react";

type IconName = "home" | "today" | "library" | "privacy";

const paths: Record<IconName, ReactNode> = {
  home: <><path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9.5v10h13v-10"/><path d="M9 19.5v-6h6v6"/></>,
  today: <><rect x="4" y="5.5" width="16" height="14" rx="2.5"/><path d="M8 3.5v4M16 3.5v4M4 9.5h16"/><path d="m10 13 4 2.5-4 2.5z"/></>,
  library: <><path d="M5 4.5h5.5v15H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z"/><path d="M19 4.5h-5.5v15H19a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2Z"/><path d="M10.5 7.5h3"/></>,
  privacy: <><path d="M12 3.5 19 6v5.2c0 4.4-2.8 7.7-7 9.3-4.2-1.6-7-4.9-7-9.3V6l7-2.5Z"/><path d="M9.5 11.5 11 13l3.5-3.5"/></>,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
