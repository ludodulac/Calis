import type { ExerciseLog, SessionLog, TrainingPrescription } from "./types";

export type TrainingDecision = {
  state: "start" | "continue" | "ease" | "progress" | "review";
  label: string;
  detail: string;
};

function samePrescription(exercise: ExerciseLog, prescription: TrainingPrescription) {
  const snapshot = exercise.prescription;
  if (!snapshot) return false;
  return snapshot.sets === prescription.sets
    && snapshot.min === prescription.min
    && snapshot.max === prescription.max
    && snapshot.unit === prescription.unit;
}

function matchingExercises(logs: SessionLog[], prescription: TrainingPrescription, requireSnapshot: boolean) {
  return logs
    .flatMap((log) => log.exercises)
    .filter((exercise) => exercise.prescriptionSlug === prescription.resourceSlug && exercise.completed)
    .filter((exercise) => requireSnapshot ? samePrescription(exercise, prescription) : !exercise.prescription || samePrescription(exercise, prescription));
}

function resultsFrom(exercises: ExerciseLog[]) {
  return exercises.map((exercise) => exercise.values).filter((values) => values.length > 0);
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
  const latest = scores.at(-1)!;
  return latest <= Math.max(...scores.slice(0, -1)) && latest <= scores[0];
}

export function getTrainingDecision(
  logs: SessionLog[],
  prescription: TrainingPrescription,
  hasDocumentedProgression = true,
): TrainingDecision {
  const compatibleResults = resultsFrom(matchingExercises(logs, prescription, false));
  const comparableResults = resultsFrom(matchingExercises(logs, prescription, true));
  const latest = compatibleResults.at(-1);

  if (!latest) {
    return { state: "start", label: "À découvrir", detail: "Fais la variante prévue et note simplement tes résultats." };
  }

  const comparableLatest = comparableResults.at(-1);
  const comparablePrevious = comparableResults.at(-2);
  if (comparableLatest && comparablePrevious && reaches(comparablePrevious, prescription, prescription.max) && reaches(comparableLatest, prescription, prescription.max)) {
    if (hasDocumentedProgression) {
      return {
        state: "progress",
        label: "Prêt à progresser",
        detail: "La borne haute a été atteinte sur deux passages avec la même prescription. Si la technique reste propre, la prochaine étape documentée peut être utilisée.",
      };
    }

    return {
      state: "continue",
      label: "Base validée",
      detail: "La borne haute a été reproduite sur deux passages avec la même prescription. Cette base est disponible ; Calis n'invente pas une difficulté suivante tant qu'une progression fiable n'est pas documentée.",
    };
  }

  if (!reaches(latest, prescription, prescription.min)) {
    return {
      state: "ease",
      label: "Facilite un peu",
      detail: "Le dernier résultat est sous la zone prévue. Réduis légèrement la difficulté plutôt que de forcer les répétitions.",
    };
  }

  if (looksStalled(comparableResults, prescription)) {
    return {
      state: "review",
      label: "À revoir",
      detail: "Les quatre derniers passages avec la même prescription restent proches sans amélioration nette des nombres. Ne rajoute pas automatiquement du volume : vérifie d'abord si la variante est bien réglée et si les répétitions restent propres.",
    };
  }

  return {
    state: "continue",
    label: "Continue",
    detail: "Tes nombres sont dans la zone prévue. Garde cette difficulté et cherche à rendre le résultat reproductible.",
  };
}
