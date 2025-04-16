import { CodeIcon, ExternalLinkIcon } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  badge: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  badge,
  link,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-primary-50 p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{title}</h3>
          <CodeIcon className="text-primary-600" />
        </div>
        <div className="mt-4 space-y-2">
          <p>{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span key={index} className="technology-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-medium">{badge}</span>
          {link ? (
            <a
              href={link}
              className="text-gray-500 hover:text-primary-600 flex items-center transition"
            >
              <span className="mr-1">View Details</span>
              <ExternalLinkIcon />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Alisha - AI Sales Agent",
      description:
        "Agentic AI-powered sales outreach platform with LLM integration and semantic document processing.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Weaviate",
        "OpenAI/Anthropic",
      ],
      badge: "Y Combinator '23 Product",
      link: "https://console.floworks.ai/",
    },
    {
      title: "ThorV2 - LLM Orchestration",
      description:
        "A scalable LLM orchestration layer for multi-API workflows with enhanced reliability, accuracy, and cost efficiency.",
      technologies: ["Python", "LLMs", "RAG", "Benchmarking"],
      badge: "Published Research",
      link: "https://arxiv.org/html/2410.17950v1",
    },
    {
      title: "Zeus Cloud Defender",
      description:
        "Cloud security posture management tool with dynamic asset graphing and real-time threat mitigation.",
      technologies: ["React", "Microservices", "Cloud Security", "GCP/AWS"],
      badge: "Enterprise Product",
      link: "",
    },
    {
      title: "MicroVax",
      description:
        "COVID-19 internal vaccination platform built in under 3 weeks, supporting 4000+ employees.",
      technologies: ["React", "Node.js", "PostgreSQL", "Authentication"],
      badge: "CEO Recognition",
      link: "https://www.microland.com/pr/microvax-for-covid19",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              badge={project.badge}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
