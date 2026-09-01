import type { TrainingAssessment, TrainingPrescription, TrainingProgram } from "./types";

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

export function adaptFoundationProgram(base: TrainingProgram, assessment: TrainingAssessment): TrainingProgram {
  const push = pushPrescription(assessment);
  const pull = pullPrescription(assessment);
  const legs = legsPrescription(assessment);

  return {
    ...base,
    id: `${base.id}-adapte`,
    audience: "Débutant, avec point de départ choisi à partir de capacités simples.",
    sessions: base.sessions.map((session, sessionIndex) => ({
      ...session,
      exercises: sessionIndex === 0
        ? [pull, push, legs, {
            resourceSlug: "mobilite-debutant",
            label: "Mobilité",
            sets: 2,
            min: 30,
            max: 45,
            unit: "seconds",
            restSeconds: 30,
            effortCue: "Reste dans une amplitude confortable et contrôlée.",
            progressionCue: "Cherche surtout une meilleure aisance, pas une amplitude forcée.",
          }]
        : [push, pull, legs, {
            resourceSlug: "poignets-handstand",
            label: "Appuis poignets",
            sets: 2,
            min: 20,
            max: 30,
            unit: "seconds",
            restSeconds: 30,
            effortCue: "Charge progressivement les mains sans chercher une sensation agressive.",
            progressionCue: "Augmente le temps seulement si les appuis restent confortables.",
          }],
    })),
  };
}
