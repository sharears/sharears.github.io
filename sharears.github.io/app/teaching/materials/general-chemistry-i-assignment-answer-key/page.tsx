import type { Metadata } from "next";
import { AssignmentAnswerKeyDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "General Chemistry I Assignment Answer Key | Sharear Saon",
  description: "Worked solutions for Sharear Saon's General Chemistry I sample assignment.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function AssignmentAnswerKeyPage() {
  return <AssignmentAnswerKeyDocument />;
}
