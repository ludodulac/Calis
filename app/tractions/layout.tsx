import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tractions : progression de zéro aux premières variantes",
  description: "Apprends la traction étape par étape : suspension, contrôle scapulaire, rowing, assistance, négatives, première traction, volume, explosivité et lest.",
  alternates: { canonical: "/tractions/" },
};

export default function PullUpsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
