import type { Metadata } from "next";
import { AssignmentDocument } from "../../teaching-documents";

export const metadata: Metadata = {
  title: "General Chemistry I Sample Assignment | Sharear Saon",
  description: "A complete General Chemistry I sample assignment by Sharear Saon.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function AssignmentPage() {
  return <AssignmentDocument />;
}
