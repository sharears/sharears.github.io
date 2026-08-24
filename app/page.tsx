import Link from "./static-link";

const serviceHighlights = [
  {
    title: "Science outreach",
    meta: "State College High School · 2024–2026",
    text: "Volunteer and poster presenter at annual RNA-focused outreach events, translating structural biology for high-school audiences.",
  },
  {
    title: "Student development",
    meta: "Penn State · 2025–2026",
    text: "Mentor in the Undergraduate Micro Mentoring Program and judge for undergraduate research exhibitions and poster sessions.",
  },
  {
    title: "Peer review",
    meta: "Journals & conferences",
    text: "Reviewer for Nucleic Acids Research, RNA, ISMB, IEEE BIBM, and BIOKDD conference programs.",
  },
  {
    title: "Professional community",
    meta: "Active memberships",
    text: "Member of the RNA Society, National Postdoctoral Association, Penn State Postdoc Society, and Alpha Sigma Nu Jesuit Honor Society.",
  },
];

const teachingExperience = [
  {
    course: "Research Mentoring",
    institution: "Penn State & collaborative programs",
    role: "Mentor · High school through graduate levels",
    contribution: "Trained students in chemistry, biochemistry, programming, computational analysis, scientific writing, and presentation.",
  },
  {
    course: "SC 200: Science in Our World",
    institution: "Penn State",
    role: "Learning assistant · Fall 2025",
    contribution: "Facilitated collaborative discussion, evidence-based reasoning, and student engagement in a course for non-science majors.",
  },
  {
    course: "Organic Chemistry Laboratory",
    institution: "Saint Louis University",
    role: "Graduate teaching assistant · 6 semesters",
    contribution: "Led pre-lab discussions, supported experimental problem-solving, reinforced mechanisms and laboratory safety, and assessed student work.",
  },
  {
    course: "Principles of Chemistry Laboratory",
    institution: "Saint Louis University",
    role: "Graduate teaching assistant · 1 semester",
    contribution: "Introduced foundational chemistry through guided experiments and supported students entering with varied levels of prior preparation.",
  },
];

const materialGroups = [
  {
    title: "Sample syllabi",
    items: [
      {
        title: "General Chemistry I",
        description: "A Fall 2027 sample syllabus with learning goals, assessments, course policies, student-support resources, and a complete MWF schedule.",
        type: "Syllabus · 6 pages",
        href: "/teaching/materials/general-chemistry-i-syllabus",
      },
      {
        title: "Biochemistry I",
        description: "A Fall 2027 sample syllabus connecting biomolecular structure and function with active learning, data analysis, and a complete MWF schedule.",
        type: "Syllabus · 6 pages",
        href: "/teaching/materials/biochemistry-i-syllabus",
      },
    ],
  },
  {
    title: "General Chemistry I course materials",
    items: [
      {
        title: "Sample assignment",
        description: "A quantitative assignment covering isotopic abundance, equation balancing, composition, limiting reagents, net ionic equations, oxidation numbers, and molarity.",
        type: "Student version · 1 page",
        href: "/teaching/materials/general-chemistry-i-assignment",
      },
      {
        title: "Assignment answer key",
        description: "Worked calculations and concise explanations for each problem in the sample General Chemistry I assignment.",
        type: "Instructor version · 1 page",
        href: "/teaching/materials/general-chemistry-i-assignment-answer-key",
      },
      {
        title: "Sample quiz",
        description: "A mixed-format assessment on gas laws, the ideal-gas equation, density, molar mass, and quantitative chemical reasoning.",
        type: "Student version · 2 pages",
        href: "/teaching/materials/general-chemistry-i-quiz",
      },
      {
        title: "Quiz answer key",
        description: "An annotated instructor copy showing correct responses and solution work for the sample General Chemistry I quiz.",
        type: "Instructor version · 2 pages",
        href: "/teaching/materials/general-chemistry-i-quiz-answer-key",
      },
    ],
  },
];

type PortfolioView = "home" | "research" | "teaching" | "teaching-materials" | "teaching-evidence" | "service";

export function PortfolioPage({ view = "home" }: { view?: PortfolioView }) {
  return (
    <main>
      {view === "home" && (<>
      <nav className="nav homeNav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sharear Saon home">SS<span>.</span></a>
        <a className="navCta" href="mailto:sharearsaon@outlook.com">Let&apos;s connect <span>↗</span></a>
      </nav>

      <section className="homeCover" id="top" aria-label="RNA sequence to structure">
        <div className="homeCoverArt">
          <img
            src="/port-cover.jpg"
            alt="RNA primary sequence on the left transitioning toward a three-dimensional RNA structure on the right"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="profileHero">
        <div className="profileColumn">
          <div className="profilePhoto">
            <img
              src="/sharear-saon-portrait.jpeg"
              alt="Portrait of Sharear Saon"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="socialIcons" aria-label="Professional profiles">
            <a href="mailto:sharearsaon@outlook.com" aria-label="Email Sharear Saon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 5.5h18v13H3z" fill="none" stroke="currentColor" strokeWidth="1.7"/>
                <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=R4YwA5EAAAAJ&amp;hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar profile">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m3 8.5 9-5 9 5-9 5z" fill="currentColor"/>
                <path d="M7 11.7v4.4c2.8 2.4 7.2 2.4 10 0v-4.4L12 14.5z" fill="currentColor"/>
                <path d="M20 9v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="https://github.com/sharears" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mdsharearsaon/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .64-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85zM4.94 13.39V6.17h-2.4v7.22zm.16-9.19c0-.76-.5-1.38-1.42-1.38-.88 0-1.46.62-1.46 1.38 0 .74.56 1.37 1.43 1.37.9 0 1.45-.63 1.45-1.37m3.69 9.19V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.23-.88.87 0 1.22.67 1.22 1.64v3.86h2.4V9.25C13.72 7.03 12.54 6 10.96 6c-1.28 0-1.85.7-2.17 1.19V6.17h-2.4c.03.68 0 7.22 0 7.22z"/>
              </svg>
            </a>
            <a href="https://x.com/sharear_saon?s=11&amp;t=6ZwlgSopy0pnPldGXmbaUA" target="_blank" rel="noreferrer" aria-label="Sharear Saon on X">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="profileContent">
          <div className="homeNavigationBlock">
            <nav className="homeSectionLinks" aria-label="Portfolio sections">
              <Link href="/research" prefetch={true}>Research</Link>
              <Link href="/teaching" prefetch={true}>Teaching</Link>
              <Link href="/publications" prefetch={true}>Publications</Link>
              <Link href="/service" prefetch={true}>Service &amp; outreach</Link>
            </nav>
          </div>
          <div className="homeIntroBlock">
            <p>I&apos;m <strong>Sharear Saon</strong>, a postdoctoral scholar in chemistry at Penn State. My research connects RNA chemistry and biology with molecular structure and function. Explore this portfolio to learn more about my research and teaching.</p>
          </div>
        </div>
      </section>

      <section className="homeJourney" aria-labelledby="home-journey-title">
        <div className="homeJourneyInner">
          <div className="homeJourneyHeading">
            <p className="sectionLabel" id="home-journey-title">Academic journey</p>
          </div>
          <div className="homeJourneyTimeline">
            <div><span>2009–2013</span><h3>B.S. in Chemistry</h3><p>University of Dhaka</p></div>
            <div><span>2013–2015</span><h3>M.S. in Organic Chemistry</h3><p>University of Dhaka</p></div>
            <div><span>2017–2022</span><h3>Ph.D. in Chemistry</h3><p>Saint Louis University</p></div>
            <div><span>2022–present</span><h3>Postdoctoral Scholar</h3><p>Pennsylvania State University</p></div>
          </div>
        </div>
      </section>
      </>)}

      {view === "research" && (<>
      <section className="section researchSection" id="research">
        <div className="overviewHeading">
          <h2>Overview</h2>
        </div>

        <div className="researchOverviewGrid">
          <div className="researchNarrative">
            <p className="overviewLead">My research examines how recurring sequence features and subtle changes in nucleobase chemistry shape RNA structure, stability, and function.</p>
            <p>I search experimentally determined RNA 3D structures for small motifs and noncanonical base pairs, then examine their geometry, chemical environment, and structural context. This framework has enabled me to define RNA pentaloop sequence families and their thermodynamic behavior, identify dual-donating amines in functional RNAs, and characterize shifted G•U wobble pairs associated with alternative protonation.</p>
            <p>I combine structural bioinformatics with structure-quality assessment, chemical probing, thermodynamics, and computational modeling to distinguish meaningful interactions from structural noise. Across these projects, the same <strong>discover–characterize–translate</strong> approach turns recurring patterns into testable rules, curated datasets, and computational models for understanding and predicting RNA structure and function.</p>
            <Link className="overviewPublicationsLink" href="/publications" prefetch={true}>View all published work <span>↗</span></Link>
          </div>

          <div className="overviewWorkflow" aria-label="Overview of research approach">
            <p className="workflowKicker">Research approach</p>

            <article className="overviewStep">
              <div className="overviewIcon" aria-hidden="true">
                <svg viewBox="0 0 104 104">
                  <path className="rnaLine" d="M14 24c18-15 31-9 40 9s21 24 36 8"/>
                  <path className="rnaLine secondary" d="M13 45c18-14 32-7 41 10s21 20 37 5"/>
                  <circle className="rnaNode adenine" cx="28" cy="21" r="5"/><circle className="rnaNode guanine" cx="48" cy="28" r="5"/><circle className="rnaNode cytosine" cx="60" cy="53" r="5"/><circle className="rnaNode uracil" cx="79" cy="47" r="5"/>
                  <rect className="motifWindow" x="47" y="34" width="40" height="37" rx="6"/>
                  <path className="scanMark" d="m61 83 9 9 20-24"/>
                </svg>
              </div>
              <div><span className="overviewNumber">01 · Discover</span><h3>Find motifs in RNA 3D structures</h3><p>Search experimentally determined structures for recurring local interactions.</p></div>
            </article>

            <div className="overviewConnector" aria-hidden="true"></div>

            <article className="overviewStep">
              <div className="overviewIcon" aria-hidden="true">
                <svg viewBox="0 0 104 104">
                  <circle className="baseDisk guanine" cx="31" cy="43" r="18"/><circle className="baseDisk uracil" cx="77" cy="50" r="16"/>
                  <text className="baseLetter small" x="31" y="49">G</text><text className="baseLetter small" x="77" y="56">U</text>
                  <path className="measureLine" d="m49 39 11 2m-12 11 13 2"/><path className="angleMark" d="M22 77a28 28 0 0 0 29 2"/>
                  <circle className="qualityDot" cx="80" cy="81" r="4"/><circle className="qualityDot muted" cx="92" cy="72" r="3"/>
                </svg>
              </div>
              <div><span className="overviewNumber">02 · Characterize</span><h3>Analyze structural and chemical contexts</h3><p>Evaluate geometry, chemistry, structural environment, and model quality.</p></div>
            </article>

            <div className="overviewConnector" aria-hidden="true"></div>

            <article className="overviewStep">
              <div className="overviewIcon" aria-hidden="true">
                <svg viewBox="0 0 104 104">
                  <path className="plotAxis" d="M14 82V20m0 62h52"/><circle className="trendDot" cx="25" cy="70" r="4"/><circle className="trendDot" cx="37" cy="61" r="4"/><circle className="trendDot" cx="49" cy="49" r="4"/><circle className="trendDot" cx="61" cy="31" r="4"/>
                  <path className="trendLine" d="M21 74c17-9 29-22 43-47"/><path className="predictionArrow" d="M69 51h20m-7-7 7 7-7 7"/>
                  <path className="predictionShape" d="M77 88V72c0-15 18-15 18 0v16m-18-7h18"/>
                </svg>
              </div>
              <div><span className="overviewNumber">03 · Translate</span><h3>Turn trends into predictive insight</h3><p>Identify patterns that inform RNA structure and function prediction.</p></div>
            </article>
          </div>
        </div>
      </section>
      </>)}

      {view === "teaching" && (
      <section className="teaching teachingHomePage" id="teaching">
        <div className="teachingTwoCol teachingSubsection teachingHomeIntro" id="teaching-philosophy">
          <article className="philosophyPanel teachingStatementPanel">
            <p className="sectionLabel">Teaching philosophy</p>
            <h3>Clear, active, and collaborative learning.</h3>
            <p>Meaningful learning occurs when students actively engage with course material and learn collaboratively in a welcoming, supportive classroom. I use a clear course structure, guided problem-solving, discussion, and frequent low-stakes feedback to help students connect chemical concepts to experiments and real-world contexts.</p>
            <p>My role is to encourage students to ask questions, explain their reasoning, learn with peers, and become more independent. Across classroom teaching and research mentoring, I break unfamiliar problems into manageable steps and gradually transfer responsibility so students build confidence and skills they can carry into their future education and careers.</p>
            <nav className="teachingStatementNav" aria-label="Teaching resources">
              <Link href="/teaching/statement" prefetch={true}><strong>Complete statement</strong><span>Read ↗</span></Link>
              <Link href="/teaching/materials" prefetch={true}><strong>Sample materials</strong><span aria-hidden="true">↗</span></Link>
              <Link href="/teaching/evidence" prefetch={true}><strong>Teaching evidence</strong><span aria-hidden="true">↗</span></Link>
            </nav>
          </article>
          <div className="experiencePanel">
            <p className="sectionLabel">Teaching experience</p>
            <h3>Teaching across preparation levels.</h3>
            <div className="experienceList">
              {teachingExperience.map((item) => (
                <article key={item.course}>
                  <div><h4>{item.course}</h4><span>{item.institution}</span></div>
                  <p className="experienceRole">{item.role}</p>
                  <p>{item.contribution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="experienceStrip teachingFooterStrip">
          <div><strong>7 semesters</strong><span>Chemistry laboratory teaching</span></div>
          <div><strong>High school → graduate</strong><span>Students mentored across levels</span></div>
          <Link className="experienceStatLink" href="/teaching/evidence#cuts-evaluation" prefetch={true} aria-label="View CUTS faculty-observed teaching evidence">
            <strong>CUTS</strong><span>Certificate in University Teaching Skills</span>
          </Link>
          <div><strong>Award-winning</strong><span>Exceptional mentorship recognition</span></div>
        </div>
      </section>
      )}

      {view === "teaching-materials" && (
      <section className="teaching teachingResourcePage">
        <div className="teachingMaterials teachingSubsection" id="teaching-materials">
          {materialGroups.map((group) => (
            <div className="materialGroup" key={group.title}>
              <h4>{group.title}</h4>
              <div className="materialsGrid">
                {group.items.map((material) => (
                  <Link
                    className="materialCard"
                    href={material.href}
                    prefetch={true}
                    key={material.title}
                    aria-label={`${material.title}, ${material.type}, read online`}
                  >
                    <span className="materialType">{material.type}</span>
                    <h5>{material.title}</h5>
                    <p>{material.description}</p>
                    <span className="materialLink">Read online <b aria-hidden="true">↗</b></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {view === "teaching-evidence" && (
      <section className="teaching teachingResourcePage evidenceResourcePage">
        <div className="evidenceSection teachingSubsection" id="teaching-evidence">
          <div className="evidenceCompactIntro">
            <p className="sectionLabel">Documented teaching and mentoring</p>
            <p>Faculty observation, written evaluation, awards, and student outcomes provide concrete evidence of my preparation, engagement, and commitment to student development.</p>
          </div>

          <div className="evidencePrimaryGrid">
            <article className="facultyEvidencePanel" id="cuts-evaluation" aria-labelledby="faculty-evidence-title">
              <div className="evidencePanelHead">
                <p className="sectionLabel">Faculty observation &amp; feedback</p>
                <h2 id="faculty-evidence-title">CUTS evaluation</h2>
              </div>
              <blockquote>“He interacted with the students and kept them engaged. He presented well, knew the material, and was confident.”</blockquote>
              <p className="evidenceQuoteSource">Brent M. Znosko, Ph.D. · CUTS faculty mentor</p>
              <ul className="observedStrengths" aria-label="Observed teaching strengths and developmental feedback">
                <li><strong>Subject knowledge</strong><span>Clear and confident command of Biochemistry I content</span></li>
                <li><strong>Student engagement</strong><span>Questions, discussion, and purposeful whiteboard use</span></li>
                <li><strong>Preparation</strong><span>Well-paced, organized, and carefully prepared instruction</span></li>
                <li className="developmentNote"><strong>Developmental feedback</strong><span>Add more guided practice and active learning to review sessions</span></li>
              </ul>
              <div className="evidenceDocumentLinks" aria-label="CUTS evaluation documents">
                <div>
                  <span><strong>Final summary letter</strong><time dateTime="2022-04-12">Apr 12, 2022</time></span>
                  <nav><a href="/teaching-evidence/cuts-final-summary-letter.pdf" target="_blank" rel="noreferrer">View ↗</a><a href="/teaching-evidence/cuts-final-summary-letter.pdf" download>PDF ↓</a></nav>
                </div>
                <div>
                  <span><strong>Faculty mentor feedback</strong><time dateTime="2022-03-24">Mar 24, 2022</time></span>
                  <nav><a href="/teaching-evidence/cuts-faculty-mentor-feedback.pdf" target="_blank" rel="noreferrer">View ↗</a><a href="/teaching-evidence/cuts-faculty-mentor-feedback.pdf" download>PDF ↓</a></nav>
                </div>
              </div>
            </article>

            <article className="mentoringEvidencePanel" aria-labelledby="mentoring-evidence-title">
              <div className="evidencePanelHead">
                <p className="sectionLabel">Mentoring outcomes</p>
                <h2 id="mentoring-evidence-title">Student development in practice</h2>
              </div>
              <div className="mentoringOutcomeList">
                <div>
                  <span>Recognition</span>
                  <h3>Exceptional Mentorship Award</h3>
                  <p>Fayetteville State University recognition for mentoring JaMyah Jones during the Summer Research Opportunity Program.</p>
                </div>
                <div>
                  <span>Undergraduate research</span>
                  <h3>Thesis, national presentation &amp; manuscript</h3>
                  <p>Advised Ashley Pearson&apos;s SciRes thesis, three poster presentations including ACS Spring 2026, and contribution to a manuscript in preparation.</p>
                </div>
                <div>
                  <span>Summer research</span>
                  <h3>From project launch to ABRCMS</h3>
                  <p>Mentored a cheminformatics project through a Penn State SROP talk and an ABRCMS 2025 poster.</p>
                </div>
              </div>
            </article>
          </div>

          <section className="teachingEvidenceStrip" aria-labelledby="practices-demonstrated-title">
            <div><p className="sectionLabel">Teaching practices demonstrated</p><h2 id="practices-demonstrated-title">Evidence in action</h2></div>
            <p><strong>Clear structure</strong><span>Goals, pacing, and expectations</span></p>
            <p><strong>Active problem-solving</strong><span>Questions and guided practice</span></p>
            <p><strong>Inclusive participation</strong><span>Multiple ways to contribute</span></p>
            <p><strong>Evidence-guided improvement</strong><span>Feedback informs course design</span></p>
          </section>
        </div>
      </section>
      )}

      {view === "service" && (<>
      <section className="serviceSection serviceCardsOnly" id="service">
        <div className="serviceGrid">{serviceHighlights.map((item, index)=><article key={item.title}><span>0{index+1}</span><p>{item.meta}</p><h3>{item.title}</h3><div>{item.text}</div></article>)}</div>
      </section>

      <footer id="contact">
        <p className="sectionLabel light">Let&apos;s connect</p><h2>Curious about RNA,<br/>teaching, or a collaboration?</h2><p>I welcome conversations about research, undergraduate mentorship, and faculty opportunities.</p>
        <a className="button cream" href="mailto:sharearsaon@outlook.com">sharearsaon@outlook.com <span>↗</span></a>
        <div className="footerBottom"><span>Sharear Saon, Ph.D. · RNA researcher & educator</span><span>State College, Pennsylvania</span><span className="footerLinks"><a href="https://www.linkedin.com/in/mdsharearsaon/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/sharears" target="_blank" rel="noreferrer">GitHub</a><a href="https://scholar.google.com/citations?user=R4YwA5EAAAAJ&amp;hl=en" target="_blank" rel="noreferrer">Google Scholar</a></span></div>
      </footer>
      </>)}
    </main>
  );
}

export default function Home() {
  return <PortfolioPage />;
}
