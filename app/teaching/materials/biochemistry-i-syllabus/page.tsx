import type { Metadata } from "next";
import { SyllabusDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "Biochemistry I Sample Syllabus | Sharear Saon",
  description: "A complete Fall 2027 Biochemistry I sample syllabus by Sharear Saon.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function BiochemistrySyllabusPage() {
  return <SyllabusDocument course="biochemistry-i" />;
}
