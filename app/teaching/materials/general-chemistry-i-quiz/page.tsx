import type { Metadata } from "next";
import { QuizDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "General Chemistry I Sample Quiz | Sharear Saon",
  description: "A complete General Chemistry I sample quiz on gas laws and quantitative reasoning.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function QuizPage() {
  return <QuizDocument />;
}
