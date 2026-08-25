import type { Metadata } from "next";
import Link from "../static-link";
import InternalNav from "../internal-nav";
import InternalPageHeader from "../internal-page-header";

export const metadata: Metadata = {
  title: "Publications | Sharear Saon",
  description: "The complete Google Scholar publication record of Sharear Saon, including journal articles, computational work, and doctoral research.",
};

const publishedWork = [
  {
    year: "2025",
    title: "Identification and characterization of shifted G•U wobble pairs resulting from alternative protonation of RNA",
    journal: "Nucleic Acids Research",
    authors: "M. S. Saon, C. A. Douds, A. J. Veenis, A. N. Pearson, N. H. Yennawar & P. C. Bevilacqua",
    href: "https://doi.org/10.1093/nar/gkaf575",
  },
  {
    year: "2025",
    title: "Prevalence of dual-donating amines in key regions of functional RNAs",
    journal: "RNA",
    authors: "A. J. Veenis, M. S. Saon & P. C. Bevilacqua",
    href: "https://doi.org/10.1261/rna.080624.125",
  },
  {
    year: "2024",
    title: "Exploring the efficiency of deep graph neural networks for RNA secondary structure prediction",
    journal: "bioRxiv · Accepted at ICIBM 2024",
    authors: "M. S. Saon, K. Boehm, G. Fu, I. Hou, J. Yu, B. M. Znosko & J. Hou",
    href: "https://doi.org/10.1101/2024.10.11.617338",
  },
  {
    year: "2023",
    title: "Identification and characterization of RNA pentaloop sequence families",
    journal: "NAR Genomics and Bioinformatics",
    authors: "M. S. Saon, C. C. Kirkpatrick & B. M. Znosko",
    href: "https://doi.org/10.1093/nargab/lqac102",
  },
  {
    year: "2022",
    title: "Thermodynamic characterization of naturally occurring RNA pentaloops",
    journal: "RNA",
    authors: "M. S. Saon & B. M. Znosko",
    href: "https://doi.org/10.1261/rna.078915.121",
  },
  {
    year: "2022",
    title: "Structure and stability of RNA pentaloops and improved tools to predict RNA secondary and tertiary structures",
    journal: "Saint Louis University",
    authors: "M. S. Saon",
    href: "https://scholar.google.com/citations?hl=en&user=R4YwA5EAAAAJ",
  },
  {
    year: "2016",
    title: "Evaluation of vitamin B1, B2 and B6 tablets in Bangladesh by UV-Vis spectrophotometer",
    journal: "Indian Journal of Pharmaceutical and Biological Research",
    authors: "N. Nahar, A. Sultana, M. S. Saon & M. Shoeb",
    href: "https://doi.org/10.30750/ijpbr.4.4.8",
  },
];

export default function PublicationsPage() {
  return (
    <main className="publicationsPage">
      <InternalNav current="Publications" />
      <InternalPageHeader title="Publications" />

      <section className="publicationsArchive" aria-label="Published research">
        <div className="archiveSummary">
          <span>{publishedWork.length} works</span>
          <span>2016–2025</span>
          <a href="https://scholar.google.com/citations?hl=en&user=R4YwA5EAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
        </div>
        <div className="archiveList">
          {publishedWork.map((paper, index) => (
            <article className="archiveItem" key={paper.title}>
              <div className="archiveIndex"><span>{String(index + 1).padStart(2, "0")}</span><strong>{paper.year}</strong></div>
              <div className="archiveContent">
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
