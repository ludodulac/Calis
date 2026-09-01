import type { TrainingAssessment, TrainingPrescription } from "./types";

export type TrainingRecalibration = {
  assessment: TrainingAssessment;
  label: string;
  detail: string;
};

export function getTrainingRecalibration(
  assessment: TrainingAssessment,
  prescription: TrainingPrescription,
): TrainingRecalibration | null {
  if (prescription.resourceSlug === "pompe-technique" && assessment.push === "floor") {
    return {
      assessment: { ...assessment, push: "incline" },
      label: "Revenir aux pompes inclinées",
      detail: "Retrouve une hauteur où les répétitions restent contrôlées, puis reconstruis progressivement vers le sol.",
    };
  }

  if (prescription.resourceSlug === "rowing-incline" && assessment.pull === "row") {
    return {
      assessment: { ...assessment, pull: "scapula" },
      label: "Revenir au contrôle scapulaire",
      detail: "Reprends un tirage plus simple à contrôler avant de réintroduire le rowing incliné.",
    };
  }

  if (prescription.resourceSlug === "controle-scapulaire" && assessment.pull === "scapula") {
    return {
      assessment: { ...assessment, pull: "hang" },
      label: "Revenir à la suspension",
      detail: "Reconstruis d'abord une suspension calme et stable avant de reprendre le contrôle scapulaire.",
    };
  }

  if (prescription.resourceSlug === "squat-poids-du-corps" && assessment.legs === "regular" && prescription.min >= 8) {
    return {
      assessment: { ...assessment, legs: "short" },
      label: "Réduire la plage de squat",
      detail: "Repasse temporairement sur une plage plus courte et contrôlée, sans forcer davantage d'amplitude.",
    };
  }

  return null;
}
