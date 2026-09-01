import type { ExerciseLog, SessionLog, TrainingPrescription } from "./types";

export type ProgressionChange = {
  fromSlug: string;
  to: TrainingPrescription;
  reason: string;
};

const progressions: Record<string, TrainingPrescription> = {
  "suspension-barre": {
    resourceSlug: "controle-scapulaire",
    label: "Contrôle scapulaire",
    sets: 2,
    min: 6,
    max: 10,
    unit: "reps",
    restSeconds: 90,
    effortCue: "Le mouvement vient des omoplates, sans transformer l'exercice en petite traction.",
    progressionCue: "Quand 2 × 10 est propre et calme sur deux passages, passe au rowing incliné.",
  },
  "controle-scapulaire": {
    resourceSlug: "rowing-incline",
    label: "Rowing incliné",
    sets: 2,
    min: 8,
    max: 12,
    unit: "reps",
    restSeconds: 120,
    effortCue: "Termine la série avant que l'amplitude se raccourcisse nettement.",
    progressionCue: "Quand 2 × 12 est propre sur deux passages, passe à la traction assistée.",
  },
  "rowing-incline": {
    resourceSlug: "traction-assistee",
    label: "Traction assistée",
    sets: 3,
    min: 3,
    max: 6,
    unit: "reps",
    restSeconds: 150,
    effortCue: "Utilise juste assez d'assistance pour garder une trajectoire et une amplitude propres.",
    progressionCue: "Quand 3 × 6 est reproductible sur deux passages, réduis légèrement l'assistance.",
  },
  "pompes-inclinees": {
    resourceSlug: "pompe-technique",
    label: "Pompes au sol",
    sets: 2,
    min: 3,
    max: 8,
    unit: "reps",
    restSeconds: 120,
    effortCue: "Arrête la série avant que le tronc ou les épaules ne perdent clairement leur position.",
    progressionCue: "Quand 2 × 8 reste propre sur deux passages, construis progressivement plus de répétitions.",
  },
};

function samePrescription(exercise: ExerciseLog, prescription: TrainingPrescription) {
  const snapshot = exercise.prescription;
  if (!snapshot) return false;
  return snapshot.sets === prescription.sets
    && snapshot.min === prescription.min
    && snapshot.max === prescription.max
    && snapshot.unit === prescription.unit;
}

function completedResults(logs: SessionLog[], prescription: TrainingPrescription) {
  return logs
    .flatMap((log) => log.exercises)
    .filter((exercise) => exercise.completed && exercise.prescriptionSlug === prescription.resourceSlug)
    .filter((exercise) => samePrescription(exercise, prescription))
    .map((exercise) => exercise.values);
}

function reachesMax(values: number[], prescription: TrainingPrescription) {
  return values.length >= prescription.sets
    && values.slice(0, prescription.sets).every((value) => value >= prescription.max);
}

export function getProgressionChange(
  logs: SessionLog[],
  prescription: TrainingPrescription,
): ProgressionChange | null {
  const next = progressions[prescription.resourceSlug];
  if (!next) return null;

  const results = completedResults(logs, prescription);
  const latest = results.at(-1);
  const previous = results.at(-2);

  if (!latest || !previous) return null;
  if (!reachesMax(latest, prescription) || !reachesMax(previous, prescription)) return null;

  return {
    fromSlug: prescription.resourceSlug,
    to: next,
    reason: `La borne haute de ${prescription.label} a été atteinte sur deux passages avec la même prescription.`,
  };
}

export function applyProgressions(
  program: { sessions: { exercises: TrainingPrescription[] }[] },
  logs: SessionLog[],
) {
  const changes = new Map<string, TrainingPrescription>();

  for (const session of program.sessions) {
    for (const exercise of session.exercises) {
      const change = getProgressionChange(logs, exercise);
      if (change) changes.set(change.fromSlug, change.to);
    }
  }

  if (changes.size === 0) return program;

  return {
    ...program,
    sessions: program.sessions.map((session) => ({
      ...session,
      exercises: session.exercises.map((exercise) => changes.get(exercise.resourceSlug) ?? exercise),
    })),
  };
}
