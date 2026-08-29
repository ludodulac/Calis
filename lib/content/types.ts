export type ResourceLevel = "zero" | "beginner" | "intermediate" | "advanced";

export type ResourceKind =
  | "guide"
  | "exercise"
  | "progression"
  | "question"
  | "program"
  | "equipment";

export type Capability = "pousser" | "tirer" | "tenir" | "equilibre" | "mouvement" | "force" | "jambes";

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  level: ResourceLevel;
  kind: ResourceKind;
  capability: Capability;
  hub: "commencer" | "tractions" | "pompes" | "dips" | "handstand";
  equipment: string[];
  next?: string[];
};

export type ProgressionStep = {
  id: string;
  label: string;
  resourceSlug?: string;
  criterion?: string;
};
