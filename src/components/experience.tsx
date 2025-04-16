interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  period,
  achievements,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{company}</h3>
        <span className="text-gray-600">{period}</span>
      </div>
      <h4 className="font-medium mb-4">{position}</h4>
      <ul className="list-disc pl-5 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "FloWorks AI (Y Combinator '23)",
      position: "Technical Lead, Senior Software Engineer",
      period: "Oct 2024 – Present",
      achievements: [
        "Built and scaled Alisha, an agentic AI-powered sales outreach platform from scratch, integrating LLMs, vector search (Weaviate), and decision-based state transitions — grew from $0 to $12K MRR in under 6 months.",
        "Architected and deployed an AI orchestration layer enabling multi-step prompt chaining, semantic document Q&A, autonomous follow-ups, and multi-API function calling — productionized for enterprise-grade SaaS with multitenant support.",
        "Handled 10,000+ daily agentic workflows with vertical scaling, throughput optimization, latency improvements, connection pool management, and observability, enabling stable performance in a new AI-native product class.",
        "Led event-based system design using RxJS and Redis-backed BullMQ queues with support for throttling, automatic retries, and deduplication — reduced prototype-to-live cycle by 65% for new campaign sequences.",
        "Defined system architecture and technical roadmap in collaboration with the Director of Engineering; hired, mentored, and led a 7-member team across frontend, backend, and DevOps.",
      ],
    },
    {
      company: "Microland Ltd.",
      position: "Sr. Technical Lead / Tech PM / Full-stack Engineer",
      period: "Jul 2019 – Oct 2024",
      achievements: [
        "Co-led development of Zeus Cloud Defender, a cloud security posture management tool with dynamic asset graphing.",
        "Led and delivered 10+ 5G Telco cloud-native deployments across 5+ platforms like OpenShift, Robin.IO, etc.",
        "Built microservices based low-code tool for IT infrastructure management teams to achieve customer SLAs 55% faster.",
        "Received CEO recognition for MicroVax—delivering a COVID-19 internal vaccination platform for 4000+ employees in under 3 weeks.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              achievements={exp.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
