"use client";

import { useState } from "react";
import type { LegsStartingPoint, PullStartingPoint, PushStartingPoint, TrainingAssessment, TrainingGoal } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

type PartialAssessment = {
  push?: PushStartingPoint;
  pull?: PullStartingPoint;
  legs?: LegsStartingPoint;
};

type Dimension = "push" | "pull" | "legs";

function requestedGoal(): TrainingGoal {
  if (typeof window === "undefined") return "general";
  const value = new URLSearchParams(window.location.search).get("goal");
  if (value === "traction") return "pullup";
  if (value === "pompes") return "pushup";
  if (value === "jambes") return "legs";
  return "general";
}

function assessmentOrder(goal: TrainingGoal): Dimension[] {
  if (goal === "pullup") return ["pull", "push", "legs"];
  if (goal === "pushup") return ["push", "pull", "legs"];
  if (goal === "legs") return ["legs", "push", "pull"];
  return ["push", "pull", "legs"];
}

export function TrainingAssessmentFlow({ onComplete, goal }: { onComplete: (assessment: TrainingAssessment) => void; goal?: TrainingGoal }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PartialAssessment>({});
  const order = assessmentOrder(goal ?? requestedGoal());
  const dimension = order[step];

  function choose(next: PartialAssessment) {
    const merged = { ...answers, ...next };
    if (step < order.length - 1) {
      setAnswers(merged);
      setStep((current) => current + 1);
      return;
    }

    const assessment: TrainingAssessment = {
      push: merged.push ?? "incline",
      pull: merged.pull ?? "hang",
      legs: merged.legs ?? "short",
      completedAt: new Date().toISOString(),
    };
    onComplete(assessment);
  }

  return (
    <div className={styles.assessmentScreen}>
      <div className={styles.assessmentTop}>
        <span>On trouve ton point de départ</span>
        <div className={styles.assessmentDots} aria-label={`Étape ${step + 1} sur 3`}>
          {[0, 1, 2].map((index) => <i key={index} className={index <= step ? styles.dotActive : ""} />)}
        </div>
      </div>

      {dimension === "push" && (
        <section className={styles.assessmentQuestion}>
          <h1>Tu arrives à faire une pompe au sol ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => choose({ push: "incline" })}>Pas encore</button>
            <button type="button" onClick={() => choose({ push: "floor" })}>Oui</button>
          </div>
        </section>
      )}

      {dimension === "pull" && (
        <section className={styles.assessmentQuestion}>
          <h1>Qu'est-ce que tu arrives déjà à faire à la barre ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => choose({ pull: "hang" })}>Je tiens la barre</button>
            <button type="button" onClick={() => choose({ pull: "scapula" })}>Je bouge mes épaules bras tendus</button>
            <button type="button" onClick={() => choose({ pull: "row" })}>Je fais du rowing</button>
            <button type="button" onClick={() => choose({ pull: "pullup" })}>Je fais une traction</button>
          </div>
        </section>
      )}

      {dimension === "legs" && (
        <section className={styles.assessmentQuestion}>
          <h1>Tu arrives à faire 10 squats tranquilles ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => choose({ legs: "short" })}>Pas encore</button>
            <button type="button" onClick={() => choose({ legs: "regular" })}>Oui</button>
          </div>
        </section>
      )}

      {step > 0 && <button className={styles.assessmentBack} type="button" onClick={() => setStep((current) => current - 1)}>← Retour</button>}
    </div>
  );
}
