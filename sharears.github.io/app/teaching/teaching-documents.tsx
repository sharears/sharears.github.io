import type { ReactNode } from "react";
import Link from "next/link";
import InternalNav from "../internal-nav";
import syllabusContent from "./syllabus-content.json";

type DocumentLayoutProps = {
  label: string;
  title: string;
  subtitle: string;
  pdfHref: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
};

type SyllabusBlock = {
  kind: "heading" | "paragraph" | "listItem" | "subheading" | "infoTable" | "gradeTable" | "scheduleTable";
  text?: string;
  emphasis?: boolean;
  rows?: string[][];
};

type SyllabusRecord = {
  title: string;
  term: string;
  pdfHref: string;
  blocks: SyllabusBlock[];
};

const syllabi = syllabusContent as Record<string, SyllabusRecord>;

const teachingStatementParagraphs = [
  "I believe that meaningful and effective learning occurs when students actively engage with course material and learn collaboratively in a welcoming and supportive classroom. I see my role as an instructor as encouraging students to ask questions, work with their peers, and stay curious about how course concepts connect to real-world contexts. In my teaching, I aim to prioritize a clear course structure and interactive learning strategies that help students succeed in the course while developing knowledge and skills they can carry into their future education and careers.",
  "I put this philosophy into practice by creating opportunities for students to work through problems rather than simply receiving answers. As a teaching assistant for Organic Chemistry and Principles of Chemistry laboratories, I used activities such as safety scenarios and pre-lab concept discussions to help students prepare for experiments, identify important safety considerations, and connect laboratory procedures to the underlying chemistry. During lab, I asked students to work in small groups and circulated among the groups to check their progress, ask questions, and address misconceptions. Rather than immediately giving an answer when students encountered a problem, I encouraged them to explain their reasoning and consider possible next steps. This approach allowed me to see where students were struggling while helping them become more confident in solving problems independently.",
  "My teaching and mentoring experiences have also shown me that students enter a course with different levels of preparation, prior knowledge, and confidence. I try to provide multiple ways for students to engage with a difficult concept, including diagrams, real-world examples, guided questions, and discussion with peers. I also value frequent, low-stakes opportunities for students to check their understanding before major assessments. In future courses, I plan to combine higher-stakes assessments with short quizzes, in-class polling, group problem solving, and other formative activities that provide regular feedback and help students recognize where they need additional practice.",
  "My research mentoring has strengthened this approach. I have worked with students from high school through graduate levels, including undergraduates who began with limited experience in computational chemistry and programming. By breaking projects into manageable steps, working through problems together, and gradually giving students greater independence, I helped one undergraduate complete a thesis and become a co-author on a peer-reviewed publication. My commitment to undergraduate mentoring was also recognized with an Exceptional Mentorship Award at the 5th Annual Research Symposium at Fayetteville State University.",
  "I have continued to develop my teaching through formal pedagogical training and classroom experience. During graduate school, I completed the Certificate in University Teaching Skills program, where I received training in course design, student engagement, assessment, and instructional technology. This training encouraged me to think more deliberately about connecting course activities and assessments to specific learning goals. In Fall 2025, I served as a learning assistant for a general education course taught by my postdoctoral advisor, where I helped organize course materials, facilitated in-class and online group discussions, and occasionally served as a substitute lecturer. This experience expanded my preparation beyond laboratory instruction and provided additional opportunities to guide discussions, explain concepts to students with different academic backgrounds and levels of preparation, and organize learning activities for a larger class.",
  "In my future teaching, I would like to continue developing structured peer-learning activities that give students responsibility for explaining their reasoning to one another. For introductory courses and classes that include students with limited prior chemistry experience, I am particularly interested in approaches inspired by Peer-Led Team Learning (PLTL), where students learn by discussing problems, explaining their reasoning to peers, and working toward solutions together. I plan to incorporate more in-class problem solving and group activities that give students regular opportunities to practice reasoning independently, while also helping them use generative AI as a learning tool to create resources such as practice questions, flashcards, summaries, and other study materials that support their understanding of course concepts.",
  "My teaching, mentoring, and research experiences prepare me to contribute across the chemistry curriculum, with particular strengths in biochemistry, biophysical chemistry, and computational approaches to biomolecular science. I am prepared to contribute to introductory and general chemistry courses and laboratories, as well as courses in biochemistry and biophysical chemistry. Building on my research in RNA structure and computational chemistry, I would also be excited to develop an upper-level course on biophysical and computational approaches to investigate biomolecular structure and function. In such a course, students could work with authentic biochemical and structural datasets, learn to interpret experimental measurements, and use tools such as Python or R for data analysis and visualization.",
  "Across my courses, my goal is to help students build a strong foundation in chemistry and biochemistry while developing the confidence to ask questions, work through unfamiliar problems, and apply what they learn beyond the classroom. I hope to create learning experiences that prepare students not only for their next course, but also for future academic and professional challenges.",
];

function DocumentLayout({ label, title, subtitle, pdfHref, backHref, backLabel, children }: DocumentLayoutProps) {
  return (
    <>
      <InternalNav current="Teaching" />
      <main className="documentPage">
        <header className="documentHero">
          <div className="documentHeroCopy">
            <p className="sectionLabel">{label}</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="documentActions">
            <Link className="documentBack" href={backHref} prefetch={true}>← {backLabel}</Link>
            <a className="documentDownload" href={pdfHref} download>
              Download PDF <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>
        <article className="documentCanvas">{children}</article>
        <footer className="documentFooter">
          <Link href={backHref} prefetch={true}>← {backLabel}</Link>
          <a href={pdfHref} download>Download PDF <span aria-hidden="true">↓</span></a>
        </footer>
      </main>
    </>
  );
}

function Formula({ children }: { children: ReactNode }) {
  return <div className="documentFormula">{children}</div>;
}

function Question({ number, children }: { number: number | string; children: ReactNode }) {
  return (
    <section className="questionBlock">
      <span className="questionNumber">{number}</span>
      <div>{children}</div>
    </section>
  );
}

function ChoiceList({ options, answer }: { options: string[]; answer?: number }) {
  return (
    <ol className="choiceList" type="a">
      {options.map((option, index) => <li className={answer === index ? "isAnswer" : undefined} key={option}>{option}</li>)}
    </ol>
  );
}

export function TeachingStatementDocument() {
  return (
    <DocumentLayout
      label="Teaching philosophy"
      title="Clear, active, and collaborative learning."
      subtitle="My complete statement on course design, active learning, inclusive instruction, mentoring, and student development."
      pdfHref="/Sharear-Saon-Teaching-Statement.pdf"
      backHref="/teaching"
      backLabel="Teaching"
    >
      <div className="statementDocument">
        <p className="documentLead">{teachingStatementParagraphs[0]}</p>
        {teachingStatementParagraphs.slice(1, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <blockquote>“Sharear made frequent rounds to each and every student during lab, checking on their progress and ensuring they understood the process.”<cite>Student feedback</cite></blockquote>
        {teachingStatementParagraphs.slice(2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </DocumentLayout>
  );
}

function SyllabusBlockView({ block, index }: { block: SyllabusBlock; index: number }) {
  if (block.kind === "heading") return <h2 className="syllabusHeading" id={`section-${index}`}>{block.text}</h2>;
  if (block.kind === "subheading") return <h3 className="syllabusSubheading">{block.text}</h3>;
  if (block.kind === "paragraph") return <p className="syllabusParagraph">{block.text}</p>;
  if (block.kind === "listItem") return <div className={`syllabusListItem${block.emphasis ? " isEmphasis" : ""}`}><span aria-hidden="true">•</span><p>{block.text}</p></div>;
  if (block.kind === "infoTable" && block.rows) {
    return (
      <div className="syllabusInfoGrid">
        {block.rows[0].map((cell) => <div key={cell}>{cell.split("\n").map((line) => <p key={line}>{line}</p>)}</div>)}
      </div>
    );
  }
  if ((block.kind === "gradeTable" || block.kind === "scheduleTable") && block.rows) {
    const [header, ...rows] = block.rows;
    return (
      <div className={`documentTableWrap ${block.kind === "scheduleTable" ? "scheduleTableWrap" : ""}`}>
        <table className="documentTable">
          <thead><tr>{header.map((cell, cellIndex) => <th key={`${cell}-${cellIndex}`}>{cell}</th>)}</tr></thead>
          <tbody>{rows.map((row, rowIndex) => <tr key={`${row.join("-")}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  return null;
}

export function SyllabusDocument({ course }: { course: "general-chemistry-i" | "biochemistry-i" }) {
  const syllabus = syllabi[course];
  return (
    <DocumentLayout
      label="Sample syllabus"
      title={syllabus.title}
      subtitle={`${syllabus.term} · Course design, learning goals, assessments, policies, and complete course schedule.`}
      pdfHref={syllabus.pdfHref}
      backHref="/teaching/materials"
      backLabel="Sample materials"
    >
      <div className="syllabusDocument">
        {syllabus.blocks.map((block, index) => <SyllabusBlockView block={block} index={index} key={`${block.kind}-${index}`} />)}
      </div>
    </DocumentLayout>
  );
}

export function AssignmentDocument() {
  return (
    <DocumentLayout label="Course material · Student version" title="General Chemistry I: Sample Assignment" subtitle="Assignment 1 · September 16, 2022 · Quantitative practice across foundational chemistry topics." pdfHref="/materials/general-chemistry-i-assignment.pdf" backHref="/teaching/materials" backLabel="Sample materials">
      <div className="assessmentDocument">
        <p className="documentInstruction">Please provide calculations and explanations where required and submit your response as a single PDF file by no later than 5:00 PM next Monday.</p>
        <Question number="01"><p>Chromium, Cr, has the following isotopic masses and fractional abundances. What is the atomic mass of chromium? Provide calculations with your answer. <strong>(2 pts)</strong></p><div className="documentTableWrap"><table className="documentTable compact"><thead><tr><th>Mass number</th><th>Isotopic mass (amu)</th><th>Fractional abundance</th></tr></thead><tbody><tr><td>50</td><td>49.9461</td><td>0.0435</td></tr><tr><td>52</td><td>51.9405</td><td>0.8379</td></tr><tr><td>53</td><td>52.9407</td><td>0.0950</td></tr><tr><td>54</td><td>53.9389</td><td>0.0236</td></tr></tbody></table></div></Question>
        <Question number="02"><p>Balance the following chemical equations. <strong>(1 pt each)</strong></p><Formula>a. H₃PO₃ → H₃PO₄ + PH₃</Formula><Formula>b. Fe₂(SO₄)₃ + NH₃ + H₂O → Fe(OH)₃ + (NH₄)₂SO₄</Formula></Question>
        <Question number="03"><p>Formaldehyde, CH₂O, is a toxic gas with a pungent odor. Calculate the mass percentages of the elements in formaldehyde. <strong>(2 pts)</strong></p></Question>
        <Question number="04"><p>In a process for producing acetic acid, oxygen gas is bubbled into acetaldehyde, CH₃CHO, containing manganese(II) acetate as a catalyst under pressure at 60°C.</p><Formula>2CH₃CHO(l) + O₂(g) → 2HC₂H₃O₂(l)</Formula><p>In a laboratory test, 20.0 g CH₃CHO and 10.0 g O₂ were placed in a reaction vessel.</p><ol className="questionParts" type="a"><li>Which chemical is the limiting reagent? Show your calculations. <strong>(2 pts)</strong></li><li>How many grams of acetic acid can be produced? <strong>(2 pts)</strong></li><li>If the actual yield is 23.8 g, what is the percentage yield? <strong>(2 pts)</strong></li><li>How many grams of excess reactant remain after the reaction is complete? <strong>(2 pts)</strong></li></ol></Question>
        <Question number="05"><p>Write the net ionic equation for the following reaction. <strong>(2 pts)</strong></p><Formula>ZnS(s) + 2HCl(aq) → ZnCl₂(aq) + H₂S(g)</Formula></Question>
        <Question number="06"><p>Calculate the oxidation number of Cl in ClO₃⁻. <strong>(2 pts)</strong></p></Question>
        <Question number="07"><p>A sample of NaNO₃ weighing 0.38 g is placed in a 50.0 mL volumetric flask and dissolved to the mark. What is the molarity of the resulting solution? Show your calculations. <strong>(2 pts)</strong></p></Question>
      </div>
    </DocumentLayout>
  );
}

export function AssignmentAnswerKeyDocument() {
  return (
    <DocumentLayout label="Course material · Instructor version" title="General Chemistry I: Assignment Answer Key" subtitle="Worked calculations and concise reasoning for Sample Assignment 1." pdfHref="/materials/general-chemistry-i-assignment-answer-key.pdf" backHref="/teaching/materials" backLabel="Sample materials">
      <div className="assessmentDocument answerDocument">
        <Question number="01"><Formula>(49.9461 × 0.0435) + (51.9405 × 0.8379) + (52.9407 × 0.0950) + (53.9389 × 0.0236) = <strong>51.99 amu</strong></Formula></Question>
        <Question number="02"><Formula>a. 4H₃PO₃ → 3H₃PO₄ + PH₃</Formula><Formula>b. Fe₂(SO₄)₃ + 6NH₃ + 6H₂O → 2Fe(OH)₃ + 3(NH₄)₂SO₄</Formula></Question>
        <Question number="03"><Formula>%C = (12.0 g / 30.0 g) × 100 = <strong>40.0%</strong></Formula><Formula>%H = [(2 × 1.01 g) / 30.0 g] × 100 = <strong>6.73%</strong></Formula><Formula>%O = 100% - (40.0% + 6.73%) = <strong>53.3%</strong></Formula></Question>
        <Question number="04"><h3>a. Limiting reagent</h3><p>Moles CH₃CHO = 20.0 g / 44.1 g mol⁻¹ = 0.454 mol. Moles O₂ = 10.0 g / 32.0 g mol⁻¹ = 0.313 mol. The reaction requires twice as many moles of CH₃CHO as O₂; 0.454 mol is less than 2 × 0.313 mol. Therefore, <strong>CH₃CHO is the limiting reagent</strong>.</p><h3>b. Theoretical yield</h3><p>The mole ratio of CH₃CHO to HC₂H₃O₂ is 1:1. Acetic acid produced = 0.454 mol × 60.1 g mol⁻¹ = <strong>27.3 g</strong>.</p><h3>c. Percentage yield</h3><Formula>(23.8 g / 27.3 g) × 100 = <strong>87.2%</strong></Formula><h3>d. Excess reactant</h3><p>O₂ consumed = 0.454 mol × 0.5 = 0.227 mol. O₂ remaining = 0.313 - 0.227 = 0.086 mol. Mass remaining = 0.086 mol × 32.0 g mol⁻¹ = <strong>2.75 g O₂</strong>.</p></Question>
        <Question number="05"><p><strong>Complete ionic equation</strong></p><Formula>ZnS(s) + 2H⁺(aq) + 2Cl⁻(aq) → Zn²⁺(aq) + 2Cl⁻(aq) + H₂S(g)</Formula><p><strong>Net ionic equation</strong></p><Formula>ZnS(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂S(g)</Formula></Question>
        <Question number="06"><Formula>(oxidation number of Cl) + 3(-2) = -1</Formula><Formula>oxidation number of Cl = -1 - 3(-2) = <strong>+5</strong></Formula></Question>
        <Question number="07"><Formula>Moles NaNO₃ = 0.38 g / 85.997 g mol⁻¹ = 4.5 × 10⁻³ mol</Formula><Formula>Molarity = (4.5 × 10⁻³ mol) / (50.0 × 10⁻³ L) = <strong>0.089 M</strong></Formula></Question>
      </div>
    </DocumentLayout>
  );
}

const quizMultipleChoice = [
  { question: "A volume of air occupying 12.0 dm³ at 98.9 kPa is compressed to 119.0 kPa at constant temperature. What is the new volume?", options: ["99.7 dm³", "8.65 dm³", "9.97 dm³", "10 dm³", "8.89 dm³"], answer: 2 },
  { question: "A reaction produces 4.38 dm³ of O₂ at 19°C and 101 kPa. What will its volume be at 25°C and 101 kPa?", options: ["4.47 dm³", "5.38 dm³", "4.41 dm³", "3.38 dm³", "44.7 dm³"], answer: 0 },
  { question: "Which statement is wrong?", options: ["In Boyle’s law, only temperature needs to remain constant.", "Both pressure and amount of gas are constant in Charles’s law.", "At fixed temperature and amount of gas, pressure × volume is constant.", "At STP, molar gas volume is 22.4 dm³.", "From the ideal-gas law, P/n = (R/V)T."], answer: 0 },
  { question: "How many grams of O₂ are in a 50.0 L gas cylinder at 21°C and 15.7 atm?", options: ["1.04 × 10³ g O₂", "1.78 × 10³ g O₂", "3.24 × 10³ g O₂", "10.4 × 10⁴ g O₂", "1.39 × 10² g O₂"], answer: 0 },
  { question: "A gaseous substance at 25°C and 0.862 atm has a density of 2.26 g/L. What is its molecular mass?", options: ["154 g/mol", "77 g/mol", "130 g/mol", "127 g/mol", "127.8 g/mol"], answer: 0 },
];

export function QuizDocument({ answerKey = false }: { answerKey?: boolean }) {
  const title = answerKey ? "General Chemistry I: Quiz Answer Key" : "General Chemistry I: Sample Quiz";
  const pdfHref = answerKey ? "/materials/general-chemistry-i-quiz-answer-key.pdf" : "/materials/general-chemistry-i-quiz.pdf";
  return (
    <DocumentLayout label={`Course material · ${answerKey ? "Instructor" : "Student"} version`} title={title} subtitle="Quiz 5 · Gas laws and quantitative chemical reasoning · 20 points." pdfHref={pdfHref} backHref="/teaching/materials" backLabel="Sample materials">
      <div className={`assessmentDocument${answerKey ? " answerDocument" : ""}`}>
        <div className="quizDirections"><p><strong>Questions 1-5:</strong> Select one answer from the five options.</p><p><strong>Questions 6-7:</strong> Fill in the blank.</p><p><strong>Questions 8-10:</strong> Provide a short answer. Each correct response is worth 2 points.</p></div>
        {quizMultipleChoice.map((item, index) => <Question number={String(index + 1).padStart(2, "0")} key={item.question}><p>{item.question}</p><ChoiceList options={item.options} answer={answerKey ? item.answer : undefined} /></Question>)}
        <Question number="06"><p>Gaseous __________ is the process whereby a gas spreads through another gas to occupy the space uniformly.</p>{answerKey && <p className="answerCallout"><strong>Answer:</strong> Diffusion</p>}</Question>
        <Question number="07"><p>__________ states the relationship between the effusion rate of a gas and its molecular mass.</p>{answerKey && <p className="answerCallout"><strong>Answer:</strong> Graham’s law of effusion</p>}</Question>
        <Question number="08"><p>Write the van der Waals equation, including the pressure and volume corrections for a real gas.</p>{answerKey && <Formula><strong>(P + an²/V²)(V - nb) = nRT</strong></Formula>}</Question>
        <Question number="09"><p>Draw a plot of volume versus pressure for a sample gas at constant temperature.</p>{answerKey && <div className="gasPlot"><svg viewBox="0 0 360 210" role="img" aria-label="Inverse relationship between gas volume and pressure"><path d="M45 20v155h275"/><path className="curve" d="M62 40c25 76 65 102 245 124"/><text x="10" y="23">V</text><text x="322" y="196">P</text></svg><p>Volume decreases nonlinearly as pressure increases.</p></div>}</Question>
        <Question number="10"><p>What is partial pressure?</p>{answerKey && <p className="answerCallout"><strong>Answer:</strong> The pressure exerted by one component gas in a mixture.</p>}</Question>
      </div>
    </DocumentLayout>
  );
}
