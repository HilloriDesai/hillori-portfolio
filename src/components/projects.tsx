import { ExternalLinkIcon } from "./icons";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  badge: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Alisha — AI Sales Agent",
    description:
      "Agentic AI-powered sales outreach platform with LLM integration and semantic document processing. Helps businesses connect with potential customers through personalized, intelligent communication.",
    technologies: ["TypeScript", "Next.js", "Node.js", "Weaviate", "OpenAI", "Anthropic"],
    badge: "B2B AI SaaS",
    link: "https://console.floworks.ai/",
  },
  {
    title: "ThorV2 — LLM Orchestration",
    description:
      "A scalable LLM orchestration layer for multi-API workflows with enhanced reliability, accuracy, and cost efficiency. Benchmarked against GPT-4 and Claude on HubSpot CRM operations.",
    technologies: ["Python", "LLMs", "RAG", "Benchmarking"],
    badge: "Published Research",
    link: "https://arxiv.org/html/2410.17950v1",
  },
  {
    title: "Zeus Cloud Defender",
    description:
      "Cloud security posture management tool with dynamic asset graphing and real-time threat mitigation across GCP, AWS, and Azure.",
    technologies: ["React", "Microservices", "Cloud Security", "GCP / AWS / Azure"],
    badge: "Enterprise Product",
    link: "",
  },
  {
    title: "MicroVax",
    description:
      "COVID-19 internal vaccination platform built in under 3 weeks, supporting 4,000+ employees. Recognised by CEO for speed and impact.",
    technologies: ["React", "Python", "PostgreSQL", "Auth"],
    badge: "CEO Recognition",
    link: "https://www.microland.com/pr/microvax-for-covid19",
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
          <h3 className="text-xl font-bold leading-snug" style={{ color: "#0c1a14" }}>
            {project.title}
          </h3>
          <span className="flex-shrink-0 text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-full">
            {project.badge}
          </span>
        </div>
        <p className={`leading-relaxed mb-5 ${featured ? "text-base" : "text-sm"}`} style={{ color: "#475569" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="technology-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
    {project.link && (
      <div className="px-7 py-4 border-t border-gray-50">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors duration-150"
        >
          View project <ExternalLinkIcon />
        </a>
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
          <ProjectCard key={p.title} project={p} featured={i === 0} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
