import type { SessionLog, TrainingPrescription } from "./types";

export type TrainingDecision = {
  state: "start" | "continue" | "ease" | "progress" | "review";
  label: string;
  detail: string;
};

function matchingResults(logs: SessionLog[], slug: string) {
  return logs
    .flatMap((log) => log.exercises)
    .filter((exercise) => exercise.prescriptionSlug === slug && exercise.completed)
    .map((exercise) => exercise.values)
    .filter((values) => values.length > 0);
}

function reaches(values: number[], prescription: TrainingPrescription, target: number) {
  return values.length >= prescription.sets && values.slice(0, prescription.sets).every((value) => value >= target);
}

function score(values: number[], prescription: TrainingPrescription) {
  return values.slice(0, prescription.sets).reduce((total, value) => total + Math.min(value, prescription.max), 0);
}

function looksStalled(results: number[][], prescription: TrainingPrescription) {
  if (results.length < 4) return false;
  const recent = results.slice(-4);
  if (!recent.every((values) => reaches(values, prescription, prescription.min))) return false;

  const scores = recent.map((values) => score(values, prescription));
  const bestBeforeLatest = Math.max(...scores.slice(0, -1));
  return scores.at(-1)! <= bestBeforeLatest && scores.at(-1)! <= scores[0];
}

export function getTrainingDecision(logs: SessionLog[], prescription: TrainingPrescription): TrainingDecision {
  const results = matchingResults(logs, prescription.resourceSlug);
  const latest = results.at(-1);

  if (!latest) {
    return { state: "start", label: "À découvrir", detail: "Fais la variante prévue et note simplement tes résultats." };
  }

  const previous = results.at(-2);
  if (previous && reaches(previous, prescription, prescription.max) && reaches(latest, prescription, prescription.max)) {
    return {
      state: "progress",
      label: "Prêt à progresser",
      detail: "La borne haute a été atteinte sur deux passages. Si la technique reste propre, augmente légèrement la difficulté.",
    };
  }

  if (!reaches(latest, prescription, prescription.min)) {
    return {
      state: "ease",
      label: "Facilite un peu",
      detail: "Le dernier résultat est sous la zone prévue. Réduis légèrement la difficulté plutôt que de forcer les répétitions.",
    };
  }

  if (looksStalled(results, prescription)) {
    return {
      state: "review",
      label: "À revoir",
      detail: "Les quatre derniers passages restent dans une zone très proche sans amélioration nette des nombres. Ne rajoute pas automatiquement du volume : vérifie d'abord si la variante est bien réglée et si les répétitions restent propres.",
    };
  }

  return {
    state: "continue",
    label: "Continue",
    detail: "Tes nombres sont dans la zone prévue. Garde cette difficulté et cherche à rendre le résultat reproductible.",
  };
}
