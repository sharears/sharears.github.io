import type { Metadata } from "next";
import InternalNav from "../../internal-nav";
import InternalPageHeader from "../../internal-page-header";
import { PortfolioPage } from "../../page";

export const metadata: Metadata = {
  title: "Teaching Evidence | Sharear Saon",
  description: "Faculty-observed teaching, CUTS evaluation, mentoring recognition, and documented student-development outcomes from Sharear Saon.",
};

export default function TeachingEvidencePage() {
  return (
    <>
      <InternalNav current="Teaching" />
      <InternalPageHeader title="Teaching Evidence" />
      <PortfolioPage view="teaching-evidence" />
    </>
  );
}
