"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/resource-card";
import type { Resource, ResourceLevel, Capability } from "@/lib/content/types";

type LevelFilter = "all" | ResourceLevel;
type CapabilityFilter = "all" | Capability;

const levels: { value: LevelFilter; label: string }[] = [
  { value: "all", label: "Tous les niveaux" },
  { value: "zero", label: "Je pars de zéro" },
  { value: "beginner", label: "Débutant" },
  { value: "intermediate", label: "Intermédiaire" },
  { value: "advanced", label: "Avancé" },
];

const capabilities: { value: CapabilityFilter; label: string }[] = [
  { value: "all", label: "Toutes les capacités" },
  { value: "pousser", label: "Pousser" },
  { value: "tirer", label: "Tirer" },
  { value: "jambes", label: "Jambes" },
  { value: "tenir", label: "Tenir" },
  { value: "equilibre", label: "S'équilibrer" },
  { value: "mouvement", label: "Se mouvoir" },
  { value: "force", label: "Devenir plus fort" },
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function LibraryBrowser({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [capability, setCapability] = useState<CapabilityFilter>("all");

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return resources.filter((resource) => {
      const searchable = normalize(`${resource.title} ${resource.summary} ${resource.hub} ${resource.capability} ${resource.equipment.join(" ")}`);
      return (!needle || searchable.includes(needle)) && (level === "all" || resource.level === level) && (capability === "all" || resource.capability === capability);
    });
  }, [resources, query, level, capability]);

  const hasFilters = query || level !== "all" || capability !== "all";

  return (
    <div className="libraryBrowser">
      <div className="libraryControls">
        <label className="searchField">
          <span>Rechercher une ressource</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="traction, poignets, mobilité…" type="search" />
        </label>
        <label className="filterField">
          <span>Niveau</span>
          <select value={level} onChange={(event) => setLevel(event.target.value as LevelFilter)}>{levels.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
        <label className="filterField">
          <span>Capacité</span>
          <select value={capability} onChange={(event) => setCapability(event.target.value as CapabilityFilter)}>{capabilities.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
      </div>
      <div className="browserStatus" aria-live="polite">
        <strong>{filtered.length}</strong> {filtered.length > 1 ? "ressources trouvées" : "ressource trouvée"}
        {hasFilters && <button type="button" onClick={() => { setQuery(""); setLevel("all"); setCapability("all"); }}>Réinitialiser</button>}
      </div>
      {filtered.length ? <div className="resourceGrid">{filtered.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div> : <div className="emptyState"><strong>Aucune fiche ne correspond encore.</strong><p>Essaie un terme plus large ou enlève un filtre. La bibliothèque continuera à s'enrichir.</p></div>}
    </div>
  );
}
