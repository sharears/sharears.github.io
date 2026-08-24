import type { Metadata } from "next";
import { QuizDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "General Chemistry I Quiz Answer Key | Sharear Saon",
  description: "Answers and explanations for Sharear Saon's General Chemistry I sample quiz.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function QuizAnswerKeyPage() {
  return <QuizDocument answerKey />;
}
