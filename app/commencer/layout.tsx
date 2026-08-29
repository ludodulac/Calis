import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commencer la callisthénie quand on part de zéro",
  description: "Choisis ton point de départ et avance vers ta première pompe, ta première traction ou ton premier handstand avec une progression claire.",
  alternates: { canonical: "/commencer/" },
};

export default function StartLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
