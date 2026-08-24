import type { Metadata } from "next";
import InternalNav from "../../internal-nav";
import InternalPageHeader from "../../internal-page-header";
import { PortfolioPage } from "../../page";

export const metadata: Metadata = {
  title: "Sample Teaching Materials | Sharear Saon",
  description: "Sample General Chemistry I and Biochemistry I syllabi, assignments, quizzes, and answer keys from Sharear Saon.",
};

export default function TeachingMaterialsPage() {
  return (
    <>
      <InternalNav current="Teaching" />
      <InternalPageHeader title="Sample materials" />
      <PortfolioPage view="teaching-materials" />
    </>
  );
}
