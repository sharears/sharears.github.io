import type { Metadata } from "next";
import Link from "next/link";
import InternalNav from "../internal-nav";
import InternalPageHeader from "../internal-page-header";

export const metadata: Metadata = {
  title: "Published Work | Sharear Saon",
  description: "Published research by Sharear Saon on RNA motifs, thermodynamics, noncanonical base pairs, and computational structure prediction.",
};

const publishedWork = [
  {
    year: "2025",
    type: "Research article",
    focus: "Rare base-pair chemistry",
    title: "Identification and characterization of shifted G•U wobble pairs resulting from alternative protonation of RNA",
    journal: "Nucleic Acids Research",
    authors: "M. S. Saon, C. A. Douds, A. J. Veenis, A. N. Pearson, N. H. Yennawar & P. C. Bevilacqua",
    href: "https://doi.org/10.1093/nar/gkaf575",
  },
  {
    year: "2025",
    type: "Research article",
    focus: "Functional RNA chemistry",
    title: "Prevalence of dual-donating amines in key regions of functional RNAs",
    journal: "RNA",
    authors: "A. J. Veenis, M. S. Saon & P. C. Bevilacqua",
    href: "https://doi.org/10.1261/rna.080624.125",
  },
  {
    year: "2024",
    type: "Conference paper · Preprint",
    focus: "RNA structure prediction",
    title: "Exploring the efficiency of deep graph neural networks for RNA secondary structure prediction",
    journal: "bioRxiv · Accepted at ICIBM 2024",
    authors: "M. S. Saon, K. Boehm, G. Fu, I. Hou, J. Yu, B. M. Znosko & J. Hou",
    href: "https://doi.org/10.1101/2024.10.11.617338",
  },
  {
    year: "2023",
    type: "Research article",
    focus: "RNA motif families",
    title: "Identification and characterization of RNA pentaloop sequence families",
    journal: "NAR Genomics and Bioinformatics",
    authors: "M. S. Saon, C. C. Kirkpatrick & B. M. Znosko",
    href: "https://doi.org/10.1093/nargab/lqac102",
  },
  {
    year: "2022",
    type: "Research article",
    focus: "RNA loop thermodynamics",
    title: "Thermodynamic characterization of naturally occurring RNA pentaloops",
    journal: "RNA",
    authors: "M. S. Saon & B. M. Znosko",
    href: "https://doi.org/10.1261/rna.078915.121",
  },
];

export default function PublicationsPage() {
  return (
    <main className="publicationsPage">
      <InternalNav current="Publications" />
      <InternalPageHeader title="Publications" />

      <section className="publicationsArchive" aria-label="Published research">
        <div className="archiveSummary"><span>{publishedWork.length} works</span><span>2022–2025</span></div>
        <div className="archiveList">
          {publishedWork.map((paper, index) => (
            <article className="archiveItem" key={paper.title}>
              <div className="archiveIndex"><span>{String(index + 1).padStart(2, "0")}</span><strong>{paper.year}</strong></div>
              <div className="archiveContent">
                <div className="archiveMeta"><span>{paper.type}</span><span>{paper.focus}</span></div>
                <p>{paper.journal}</p>
                <h2>{paper.title}</h2>
                <small>{paper.authors}</small>
              </div>
              <a className="archiveLink" href={paper.href} target="_blank" rel="noreferrer" aria-label={`Open publication: ${paper.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="publicationsFooter">
        <p className="sectionLabel light">Research & collaboration</p>
        <h2>Questions begin with <em>molecular detail.</em></h2>
        <a className="button cream" href="mailto:sharearsaon@outlook.com">Contact me <span>↗</span></a>
        <div className="footerBottom"><span>Sharear Saon</span><Link href="/" prefetch={true}>Return to portfolio</Link></div>
      </footer>
    </main>
  );
}
