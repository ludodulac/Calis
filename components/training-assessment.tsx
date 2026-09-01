"use client";

import { useState } from "react";
import type { LegsStartingPoint, PullStartingPoint, PushStartingPoint, TrainingAssessment } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

type PartialAssessment = {
  push?: PushStartingPoint;
  pull?: PullStartingPoint;
  legs?: LegsStartingPoint;
};

export function TrainingAssessmentFlow({ onComplete }: { onComplete: (assessment: TrainingAssessment) => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PartialAssessment>({});

  function choosePush(value: PushStartingPoint) {
    setAnswers((current) => ({ ...current, push: value }));
    setStep(1);
  }

  function choosePull(value: PullStartingPoint) {
    setAnswers((current) => ({ ...current, pull: value }));
    setStep(2);
  }

  function chooseLegs(value: LegsStartingPoint) {
    const assessment: TrainingAssessment = {
      push: answers.push ?? "incline",
      pull: answers.pull ?? "hang",
      legs: value,
      completedAt: new Date().toISOString(),
    };
    onComplete(assessment);
  }

  return (
    <div className={styles.assessmentScreen}>
      <div className={styles.assessmentTop}>
        <span>Point de départ</span>
        <div className={styles.assessmentDots} aria-label={`Étape ${step + 1} sur 3`}>
          {[0, 1, 2].map((index) => <i key={index} className={index <= step ? styles.dotActive : ""} />)}
        </div>
      </div>

      {step === 0 && (
        <section className={styles.assessmentQuestion}>
          <h1>Une pompe au sol ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => choosePush("incline")}>Pas encore</button>
            <button type="button" onClick={() => choosePush("floor")}>Oui</button>
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={styles.assessmentQuestion}>
          <h1>À la barre ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => choosePull("hang")}>Je tiens peu</button>
            <button type="button" onClick={() => choosePull("scapula")}>Je tiens 15–30 s</button>
            <button type="button" onClick={() => choosePull("row")}>Je fais du rowing</button>
            <button type="button" onClick={() => choosePull("pullup")}>Je fais une traction</button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className={styles.assessmentQuestion}>
          <h1>10 squats tranquilles ?</h1>
          <div className={styles.assessmentChoices}>
            <button type="button" onClick={() => chooseLegs("short")}>Pas encore</button>
            <button type="button" onClick={() => chooseLegs("regular")}>Oui</button>
          </div>
        </section>
      )}

      {step > 0 && <button className={styles.assessmentBack} type="button" onClick={() => setStep((current) => current - 1)}>← Retour</button>}
    </div>
  );
}
