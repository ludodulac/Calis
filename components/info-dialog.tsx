"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type InfoDialogProps = {
  label: string;
  title: string;
  icon: "info" | "path" | "search" | "help";
  children: ReactNode;
};

const icons = {
  info: "i",
  path: "↗",
  search: "⌕",
  help: "?",
} as const;

export function InfoDialog({ label, title, icon, children }: InfoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="infoIconButton"
        type="button"
        aria-label={label}
        title={label}
        onClick={() => dialogRef.current?.showModal()}
      >
        <span aria-hidden="true">{icons[icon]}</span>
      </button>

      <dialog
        className="infoDialog"
        ref={dialogRef}
        aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="infoDialogCard">
          <header className="infoDialogHeader">
            <h2 id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}>{title}</h2>
            <button className="infoDialogClose" type="button" aria-label="Fermer" onClick={() => dialogRef.current?.close()}>×</button>
          </header>
          <div className="infoDialogBody">{children}</div>
        </div>
      </dialog>
    </>
  );
}
