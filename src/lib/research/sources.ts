// ---------------------------------------------------------------------------
// CURATED SOURCES for "AI for Learning"
//
// Two things live here:
//   1. The arXiv query config that drives the automatic daily fetch.
//   2. TRACKED_LABS — a hand-picked reading list of the most relevant groups,
//      people, and institutes. This is passed to the summarizer so the blog can
//      flag when a paper comes from a lab you're tracking, and it doubles as a
//      reference you can browse directly (see /lib/research/sources.ts).
//
// Edit freely. Add arXiv terms to widen/narrow the net; add labs to TRACKED_LABS.
// ---------------------------------------------------------------------------

/** arXiv categories most likely to contain AI-for-learning work. */
export const ARXIV_CATEGORIES = [
  'cs.CY', // Computers and Society  (education, ethics, policy)
  'cs.HC', // Human-Computer Interaction (tutoring UIs, learner studies)
  'cs.CL', // Computation and Language (NLP for education, AI tutors)
  'cs.LG', // Machine Learning (knowledge tracing, student modeling)
  'cs.AI', // Artificial Intelligence (general)
];

/**
 * Education terms required in the abstract. A paper must match the category set
 * AND at least one of these. Phrases (with spaces) are matched exactly.
 */
export const EDU_QUERY_TERMS = [
  'education',
  'educational',
  'intelligent tutoring',
  'tutoring',
  'learner',
  'knowledge tracing',
  'learning analytics',
  'educational data mining',
  'classroom',
  'pedagogical',
  'MOOC',
  'language learning',
];

/**
 * Broader keyword set used only for *ranking* candidates (not the query).
 * Higher overlap = pushed nearer the top of the day's shortlist.
 */
export const RELEVANCE_KEYWORDS = [
  ...EDU_QUERY_TERMS,
  'student', 'students', 'teaching', 'teacher', 'curriculum', 'literacy',
  'e-learning', 'adaptive learning', 'personalized learning', 'pedagogy',
  'assessment', 'grading', 'feedback', 'skill acquisition', 'tutor',
  'self-regulated learning', 'collaborative learning', 'school',
];

/** How many candidates to pull from arXiv each run. */
export const MAX_FETCH = 50;
/** How many of the top-ranked candidates to send to Claude (cost control). */
export const MAX_TO_SUMMARIZE = 10;
/** How many to actually publish per morning. */
export const MAX_PUBLISHED = 6;

export interface TrackedLab {
  name: string;
  lead: string;
  institution: string;
  url: string;
  /** Author surnames to match against arXiv author lists. */
  pis: string[];
  blurb: string;
}

/**
 * A curated reading list. The first two ETH/EPFL entries are the ones most
 * directly relevant to a CS-department "AI for learning" PhD — see the notes
 * in the README about which are currently accepting doctoral students.
 */
export const TRACKED_LABS: TrackedLab[] = [
  {
    name: 'ML4ED — Machine Learning for Education',
    lead: 'Prof. Tanja Käser',
    institution: 'EPFL (School of Computer & Communication Sciences)',
    url: 'https://www.epfl.ch/labs/ml4ed/',
    pis: ['Käser', 'Kaeser'],
    blurb:
      'Works at the intersection of machine learning, data mining, and education — student modeling, knowledge tracing, explainable AI for personalized learning, and the digital transformation of Swiss vocational training. The most directly CS-aligned AI-for-learning group at EPFL.',
  },
  {
    name: 'NLP for Education / Intelligent Tutoring',
    lead: 'Prof. Mrinmaya Sachan',
    institution: 'ETH Zürich (Department of Computer Science)',
    url: 'https://ml2.inf.ethz.ch/',
    pis: ['Sachan', 'Macina', 'Daheim'],
    blurb:
      'NLP, reasoning, and AI for education in the ETH CS department — LLM-based tutoring, dialogue tutoring datasets (e.g. MathDial), and automatic question generation. A strong fit if you want AI-for-learning grounded in modern NLP.',
  },
  {
    name: 'Learning Sciences & Higher Education / Future Learning Initiative',
    lead: 'Prof. Manu Kapur',
    institution: 'ETH Zürich',
    url: 'https://lse.ethz.ch/',
    pis: ['Kapur'],
    blurb:
      'Studies how people actually learn ("productive failure") and how to design technology and instruction around it. Founding chair of the ETH–EPFL Joint Doctoral Program in the Learning Sciences — useful context for a cross-institution application.',
  },
  {
    name: 'NLP Lab',
    lead: 'Prof. Antoine Bosselut',
    institution: 'EPFL (School of Computer & Communication Sciences)',
    url: 'https://nlp.epfl.ch/',
    pis: ['Bosselut'],
    blurb:
      'Core NLP / large language model research at EPFL. Collaborates with ML4ED on AI-for-education work, including recommender and reinforcement-learning approaches for learning.',
  },
  {
    name: 'CHILI — Computer-Human Interaction for Learning & Instruction',
    lead: 'Prof. Pierre Dillenbourg',
    institution: 'EPFL',
    url: 'https://www.epfl.ch/labs/chili/',
    pis: ['Dillenbourg'],
    blurb:
      'Pioneering work on educational robotics, tangible interfaces, and computer-supported collaborative learning. NOTE: the lab is closing in early 2026 on Prof. Dillenbourg\u2019s retirement and is no longer hosting doctoral projects — included here for foundational reading, not as an application target.',
  },
  {
    name: 'Stanford Accelerator for Learning / AAALab',
    lead: 'Stanford Graduate School of Education + CS',
    institution: 'Stanford University',
    url: 'https://acceleratelearning.stanford.edu/',
    pis: ['Piech', 'Schwartz', 'Blikstein'],
    blurb:
      'A hub for technology-and-learning research, including AI tutoring, learning analytics, and large-scale online courses (Chris Piech\u2019s "Code in Place" is a well-known example of AI-supported CS education at scale).',
  },
  {
    name: 'HCII & LearnLab',
    lead: 'Human-Computer Interaction Institute',
    institution: 'Carnegie Mellon University',
    url: 'https://www.hcii.cmu.edu/',
    pis: ['Koedinger', 'Aleven', 'Mostow'],
    blurb:
      'One of the founding homes of intelligent tutoring systems and educational data mining. CMU\u2019s LearnLab and the long line of "cognitive tutor" research shaped much of the modern field.',
  },
  {
    name: 'Google DeepMind — Education & Foundational Research',
    lead: 'Google DeepMind',
    institution: 'Industry lab',
    url: 'https://deepmind.google/research/',
    pis: [],
    blurb:
      'A leading industry lab; relevant here for LearnLM and other efforts to tune large models for teaching and tutoring, plus foundational work that shows up in education applications.',
  },
  {
    name: 'Khan Academy (Khanmigo) & Khan Lab',
    lead: 'Khan Academy',
    institution: 'Non-profit / EdTech',
    url: 'https://www.khanacademy.org/khan-labs',
    pis: [],
    blurb:
      'A widely-watched real-world deployment of an AI tutor (Khanmigo). Good for seeing how research ideas about tutoring and feedback survive contact with millions of actual learners.',
  },
];

/** Build the arXiv API search_query string (uses + for spaces, %22 for quotes). */
export function buildArxivSearchQuery(): string {
  const cats = '(' + ARXIV_CATEGORIES.map((c) => `cat:${c}`).join('+OR+') + ')';
  const terms =
    '(' +
    EDU_QUERY_TERMS.map((t) =>
      t.includes(' ') ? `abs:%22${t.replace(/ /g, '+')}%22` : `abs:${t}`,
    ).join('+OR+') +
    ')';
  return `${cats}+AND+${terms}`;
}

/** Returns the tracked lab a paper belongs to, if any (by author surname). */
export function matchTrackedLab(authors: string[]): TrackedLab | null {
  for (const lab of TRACKED_LABS) {
    if (lab.pis.length === 0) continue;
    const hit = authors.some((a) =>
      lab.pis.some((pi) => a.toLowerCase().includes(pi.toLowerCase())),
    );
    if (hit) return lab;
  }
  return null;
}
