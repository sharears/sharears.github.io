import type { Metadata } from "next";
import InternalNav from "../internal-nav";
import InternalPageHeader from "../internal-page-header";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: "Teaching | Sharear Saon",
  description: "Sharear Saon's teaching philosophy, chemistry instruction, PLTL approach, and mentoring experience.",
};

export default function TeachingPage() {
  return (
    <>
      <InternalNav current="Teaching" />
      <InternalPageHeader title="Teaching" />
      <PortfolioPage view="teaching" />
    </>
  );
}
