import type { Metadata } from "next";
import InternalNav from "../internal-nav";
import InternalPageHeader from "../internal-page-header";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: "Research | Sharear Saon",
  description: "Sharear Saon's research on RNA motifs, structural chemistry, and predictive insight.",
};

export default function ResearchPage() {
  return (
    <>
      <InternalNav current="Research" />
      <InternalPageHeader title="Research" />
      <PortfolioPage view="research" />
    </>
  );
}
