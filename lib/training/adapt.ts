import type { TrainingAssessment, TrainingGoal, TrainingPrescription, TrainingProgram } from "./types";

function pushPrescription(assessment: TrainingAssessment): TrainingPrescription {
  if (assessment.push === "floor") {
    return {
      resourceSlug: "pompe-technique",
      label: "Pompes au sol",
      sets: 2,
      min: 3,
      max: 8,
      unit: "reps",
      restSeconds: 120,
      effortCue: "Arrête la série avant que le tronc ou les épaules ne perdent clairement leur position.",
      progressionCue: "Quand 2 × 8 reste propre sur deux séances, augmente progressivement les répétitions ou la difficulté.",
    };
  }

  return {
    resourceSlug: "pompes-inclinees",
    label: "Pompes inclinées",
    sets: 2,
    min: 8,
    max: 12,
    unit: "reps",
    restSeconds: 120,
    effortCue: "Choisis une hauteur qui laisse la dernière répétition contrôlée.",
    progressionCue: "Quand 2 × 12 est propre sur deux séances, baisse légèrement le support.",
  };
}

function pullPrescription(assessment: TrainingAssessment): TrainingPrescription {
  if (assessment.pull === "pullup") {
    return {
      resourceSlug: "traction-technique",
      label: "Tractions",
      sets: 3,
      min: 1,
      max: 3,
      unit: "reps",
      restSeconds: 150,
      effortCue: "Garde des répétitions propres et évite de transformer chaque série en test maximal.",
      progressionCue: "Quand 3 × 3 devient reproductible, construis progressivement plus de volume.",
    };
  }

  if (assessment.pull === "row") {
    return {
      resourceSlug: "rowing-incline",
      label: "Rowing incliné",
      sets: 2,
      min: 8,
      max: 12,
      unit: "reps",
      restSeconds: 120,
      effortCue: "Termine la série avant que l'amplitude se raccourcisse nettement.",
      progressionCue: "Quand 2 × 12 est propre sur deux séances, rends l'angle légèrement plus difficile.",
    };
  }

  if (assessment.pull === "scapula") {
    return {
      resourceSlug: "controle-scapulaire",
      label: "Contrôle scapulaire",
      sets: 2,
      min: 6,
      max: 10,
      unit: "reps",
      restSeconds: 90,
      effortCue: "Le mouvement vient des omoplates, sans transformer l'exercice en petite traction.",
      progressionCue: "Quand 2 × 10 est propre et calme, introduis davantage de rowing.",
    };
  }

  return {
    resourceSlug: "suspension-barre",
    label: "Suspension",
    sets: 2,
    min: 15,
    max: 30,
    unit: "seconds",
    restSeconds: 90,
    effortCue: "Arrête avant que la prise ou les épaules ne se désorganisent.",
    progressionCue: "Quand 2 × 30 s est confortable et reproductible, passe au contrôle scapulaire.",
  };
}

function legsPrescription(assessment: TrainingAssessment): TrainingPrescription {
  return {
    resourceSlug: "squat-poids-du-corps",
    label: "Squat",
    sets: 2,
    min: assessment.legs === "short" ? 5 : 8,
    max: assessment.legs === "short" ? 8 : 12,
    unit: "reps",
    restSeconds: 90,
    effortCue: "Utilise une amplitude que tu contrôles sans forcer une position douloureuse.",
    progressionCue: "Quand la borne haute est stable sur deux séances, augmente progressivement l'amplitude ou la difficulté.",
  };
}

const corePrescription: TrainingPrescription = {
  resourceSlug: "gainage-debutant",
  label: "Gainage",
  sets: 2,
  min: 15,
  max: 30,
  unit: "seconds",
  restSeconds: 60,
  effortCue: "Garde une position que tu peux encore contrôler en respirant ; arrête avant de survivre au chrono.",
  progressionCue: "Quand 2 × 30 s reste calme sur deux séances, considère cette base comme disponible plutôt que d'allonger automatiquement le chrono.",
};

const posteriorChainPrescription: TrainingPrescription = {
  resourceSlug: "pont-fessier-debutant",
  label: "Pont fessier",
  sets: 2,
  min: 8,
  max: 12,
  unit: "reps",
  restSeconds: 90,
  effortCue: "Monte et redescends avec la même amplitude sans chercher de hauteur en cambrant le bas du dos.",
  progressionCue: "Quand 2 × 12 reste contrôlé sur deux séances, garde cette base ; Calis n'invente pas encore de variante suivante.",
};

function orderedExercises(goal: TrainingGoal, sessionIndex: number, pull: TrainingPrescription, push: TrainingPrescription, legs: TrainingPrescription) {
  const foundation = sessionIndex === 0 ? corePrescription : posteriorChainPrescription;
  if (goal === "pullup") return [pull, push, legs, foundation];
  if (goal === "pushup") return [push, pull, legs, foundation];
  if (goal === "legs") return sessionIndex === 0 ? [legs, pull, push, foundation] : [legs, posteriorChainPrescription, push, pull];
  return sessionIndex === 0 ? [pull, push, legs, corePrescription] : [push, pull, legs, posteriorChainPrescription];
}

function goalLabel(goal: TrainingGoal) {
  if (goal === "pullup") return "traction";
  if (goal === "pushup") return "pompes";
  if (goal === "legs") return "jambes";
  return "fondations générales";
}

export function adaptFoundationProgram(base: TrainingProgram, assessment: TrainingAssessment, goal: TrainingGoal = "general"): TrainingProgram {
  const push = pushPrescription(assessment);
  const pull = pullPrescription(assessment);
  const legs = legsPrescription(assessment);
  const focus = goalLabel(goal);

  return {
    ...base,
    id: `${base.id}-adapte-${goal}`,
    audience: goal === "general"
      ? "Débutant, avec point de départ choisi à partir de capacités simples."
      : `Débutant avec priorité ${focus}, sans supprimer le travail des autres capacités déjà couvertes.`,
    sessions: base.sessions.map((session, sessionIndex) => ({
      ...session,
      goal: goal === "general" ? session.goal : `Priorité ${focus}, puis maintien des autres fondations.`,
      exercises: orderedExercises(goal, sessionIndex, pull, push, legs),
    })),
    scopeNote: "Cette version couvre poussée, tirage, squat, stabilité du tronc et une première base de chaîne postérieure avec des prescriptions explicites. L'objectif principal change la priorité de la séance, pas la présence des autres fondations. Poussée verticale, mobilité structurée, équilibre et autres capacités seront ajoutés seulement avec des progressions assez précises.",
  };
}
