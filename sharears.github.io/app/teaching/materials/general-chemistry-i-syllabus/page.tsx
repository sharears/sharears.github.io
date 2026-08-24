import type { Metadata } from "next";
import { SyllabusDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "General Chemistry I Sample Syllabus | Sharear Saon",
  description: "A complete Fall 2027 General Chemistry I sample syllabus by Sharear Saon.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function GeneralChemistrySyllabusPage() {
  return <SyllabusDocument course="general-chemistry-i" />;
}
