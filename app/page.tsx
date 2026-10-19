import type { Metadata } from "next";
import { CalisJourney } from "@/components/calis-journey";
export const metadata:Metadata={
 title:"CALIS — Choisir mes objectifs",
 description:"Choisis tes objectifs et découvre des programmes progressifs au poids du corps.",
 alternates:{canonical:"/"}
};
export default function HomePage(){ return <CalisJourney />; }
