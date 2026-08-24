import type { Metadata } from "next";
import InternalNav from "../internal-nav";
import InternalPageHeader from "../internal-page-header";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: "Service & outreach | Sharear Saon",
  description: "Sharear Saon's scientific service, outreach, peer review, mentoring, and professional community work.",
};

export default function ServicePage() {
  return (
    <>
      <InternalNav current="Service & outreach" />
      <InternalPageHeader title="Service & outreach" />
      <PortfolioPage view="service" />
    </>
  );
}
