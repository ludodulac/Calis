export type TrainingUnit = "reps" | "seconds";

export type TrainingPrescription = {
  resourceSlug: string;
  label: string;
  sets: number;
  min: number;
  max: number;
  unit: TrainingUnit;
  restSeconds: number;
  effortCue: string;
  progressionCue: string;
};

export type PrescriptionSnapshot = Pick<TrainingPrescription, "sets" | "min" | "max" | "unit">;

export type TrainingSessionTemplate = {
  id: string;
  label: string;
  goal: string;
  exercises: TrainingPrescription[];
};

export type TrainingProgram = {
  id: string;
  label: string;
  audience: string;
  frequencyPerWeek: number;
  sessions: TrainingSessionTemplate[];
  adaptationRule: string;
  scopeNote: string;
};

export type ExerciseLog = {
  prescriptionSlug: string;
  prescription?: PrescriptionSnapshot;
  values: number[];
  completed: boolean;
};

export type SessionLog = {
  sessionId: string;
  completedAt: string;
  exercises: ExerciseLog[];
};

export type PushStartingPoint = "incline" | "floor";
export type PullStartingPoint = "hang" | "scapula" | "row" | "pullup";
export type LegsStartingPoint = "short" | "regular";
export type TrainingGoal = "general" | "pullup" | "pushup" | "legs";

export type TrainingAssessment = {
  push: PushStartingPoint;
  pull: PullStartingPoint;
  legs: LegsStartingPoint;
  completedAt: string;
};
