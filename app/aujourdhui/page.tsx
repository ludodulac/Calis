import type { Metadata } from "next";
import { TodaySession } from "@/components/today-session";
import { beginnerFoundationProgram } from "@/lib/training/v1";

export const metadata: Metadata = {
  title: "Aujourd'hui",
  description: "Une séance simple à faire maintenant, avec un suivi local et une règle claire pour progresser.",
  alternates: { canonical: "/aujourdhui/" },
};

export default function TodayPage() {
  return <TodaySession program={beginnerFoundationProgram} />;
}
