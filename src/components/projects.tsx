import { ExternalLinkIcon } from "./icons";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  badge: string;
  stores?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: "Supernova — AI Spoken English",
    description:
      "The #1 Education app on India's App Store, where 2 million learners a day practise real conversations with Nova, an AI tutor. I build across the whole learner journey — courses, the AI tutor, speech, payments and retention.",
    technologies: ["React Native", "Node.js", "LLMs", "Speech AI", "Payments"],
    badge: "2M daily learners",
    stores: [
      { label: "App Store", href: "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=live.gosupernova.app" },
    ],
  },
  {
    title: "Superflow — AI Voice to Text",
    description:
      "Speak, and get clean text anywhere on your phone, with an always-on translation widget. I built the personalised dictionary that spells each person's names right, and made the widget bring itself back when the phone shuts it down.",
    technologies: ["React Native", "Expo UI", "Native Android", "Firebase Cloud Messaging", "Speech-to-text"],
    badge: "Voice AI",
    stores: [
      { label: "App Store", href: "https://apps.apple.com/in/app/ai-voice-to-text-superflow/id6782897323" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ai.getsupernova.superflow" },
    ],
  },
  {
    title: "SuperPrep — AI Exam Prep",
    description:
      "NEET exam preparation built on NCERT notes. I shipped Ask AI, which answers students' questions grounded in their own study material.",
    technologies: ["RAG", "LLMs", "Document grounding"],
    badge: "EdTech AI",
    stores: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ai.superprep.app" },
    ],
  },
  {
    title: "Alisha — AI Sales Agent",
    description:
      "Sales teams hand off outreach to an AI agent that answers from their own documents, writes to prospects and follows up on its own — more than 10,000 workflows a day. I built it from zero as technical lead at Floworks.",
    technologies: ["TypeScript", "Next.js", "Node.js", "Weaviate", "OpenAI", "Anthropic"],
    badge: "B2B AI SaaS",
  },
  {
    title: "Zeus Cloud Defender",
    description:
      "Businesses see every cloud asset across AWS, GCP and Azure in one live map, with audit trails, so security risks are spotted and dealt with as they happen. I co-led the product at Microland.",
    technologies: ["React", "Microservices", "Cloud Security", "GCP / AWS / Azure"],
    badge: "Enterprise Product",
  },
  {
    title: "MicroVax",
    description:
      "During COVID-19, more than 4,000 Microland employees got vaccinated through a platform we built and launched in under three weeks — recognised by our CEO.",
    technologies: ["React", "Python", "PostgreSQL", "Auth"],
    badge: "CEO Recognition",
  },
];

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured }) => (
  <div
    className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-md transition-all duration-200 flex flex-col ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    <div className={`p-7 flex-1 ${featured ? "md:flex md:gap-10 md:items-start" : ""}`}>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold leading-snug" style={{ color: "#2b2118" }}>
            {project.title}
          </h3>
          <span className="flex-shrink-0 text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-full">
            {project.badge}
          </span>
        </div>
        <p className={`leading-relaxed mb-5 ${featured ? "text-base" : "text-sm"}`} style={{ color: "#6b5b4b" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="technology-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
    {project.stores && (
      <div className="px-7 py-4 border-t border-gray-50 flex flex-wrap gap-5">
        {project.stores.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors duration-150"
          >
            {s.label} <ExternalLinkIcon />
          </a>
        ))}
      </div>
    )}
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="container-section">
      <p className="section-eyebrow">Work</p>
      <h2 className="section-title">Featured projects.</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} featured={i === 0 || (i === projects.length - 1 && i % 2 === 1)} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
