"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/resource-card";
import type { Resource, ResourceLevel, Capability } from "@/lib/content/types";

type LevelFilter = "all" | ResourceLevel;
type CapabilityFilter = "all" | Capability;
type HubFilter = "all" | Resource["hub"];
type EquipmentFilter = "all" | "none" | "with";

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

const hubs: { value: HubFilter; label: string }[] = [
  { value: "all", label: "Tous les parcours" },
  { value: "commencer", label: "Commencer" },
  { value: "tractions", label: "Tractions" },
  { value: "pompes", label: "Pompes" },
  { value: "dips", label: "Dips" },
  { value: "handstand", label: "Handstand" },
];

const equipmentOptions: { value: EquipmentFilter; label: string }[] = [
  { value: "all", label: "Tout le matériel" },
  { value: "none", label: "Sans matériel" },
  { value: "with", label: "Avec matériel" },
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function LibraryBrowser({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [capability, setCapability] = useState<CapabilityFilter>("all");
  const [hub, setHub] = useState<HubFilter>("all");
  const [equipment, setEquipment] = useState<EquipmentFilter>("all");

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return resources.filter((resource) => {
      const searchable = normalize(`${resource.title} ${resource.summary} ${resource.hub} ${resource.capability} ${resource.kind} ${resource.equipment.join(" ")}`);
      const equipmentMatches = equipment === "all" || (equipment === "none" ? resource.equipment.length === 0 : resource.equipment.length > 0);
      return (!needle || searchable.includes(needle))
        && (level === "all" || resource.level === level)
        && (capability === "all" || resource.capability === capability)
        && (hub === "all" || resource.hub === hub)
        && equipmentMatches;
    });
  }, [resources, query, level, capability, hub, equipment]);

  const hasFilters = Boolean(query) || level !== "all" || capability !== "all" || hub !== "all" || equipment !== "all";
  const reset = () => { setQuery(""); setLevel("all"); setCapability("all"); setHub("all"); setEquipment("all"); };

  return (
    <div className="libraryBrowser">
      <div className="libraryControls">
        <label className="searchField">
          <span>Rechercher une ressource</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="traction, poignets, mobilité, élastique…" type="search" />
        </label>
        <label className="filterField">
          <span>Niveau</span>
          <select value={level} onChange={(event) => setLevel(event.target.value as LevelFilter)}>{levels.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
        <label className="filterField">
          <span>Capacité</span>
          <select value={capability} onChange={(event) => setCapability(event.target.value as CapabilityFilter)}>{capabilities.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
        <label className="filterField">
          <span>Parcours</span>
          <select value={hub} onChange={(event) => setHub(event.target.value as HubFilter)}>{hubs.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
        <label className="filterField">
          <span>Matériel</span>
          <select value={equipment} onChange={(event) => setEquipment(event.target.value as EquipmentFilter)}>{equipmentOptions.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select>
        </label>
      </div>
      <div className="browserStatus" aria-live="polite">
        <span><strong>{filtered.length}</strong> {filtered.length > 1 ? "ressources trouvées" : "ressource trouvée"} sur {resources.length}</span>
        {hasFilters && <button type="button" onClick={reset}>Réinitialiser tous les filtres</button>}
      </div>
      {filtered.length ? <div className="resourceGrid">{filtered.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div> : <div className="emptyState"><strong>Aucune fiche ne correspond encore.</strong><p>Essaie un terme plus large ou enlève un filtre. La bibliothèque continuera à s'enrichir.</p><button type="button" onClick={reset}>Afficher toute la bibliothèque</button></div>}
    </div>
  );
}
