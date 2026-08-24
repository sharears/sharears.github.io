import type { Metadata } from "next";
import { TeachingStatementDocument } from "../teaching-documents";

export const metadata: Metadata = {
  title: "Teaching Philosophy | Sharear Saon",
  description: "Sharear Saon's complete teaching philosophy on active learning, inclusive chemistry instruction, and student development.",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function TeachingStatementPage() {
  return <TeachingStatementDocument />;
}
