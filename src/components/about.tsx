const About: React.FC = () => {
  const skills = {
    languages: "TypeScript, JavaScript, Python, SQL, C++, Bash",
    frameworks:
      "React.js, Next.js, Node.js, Express.js, Django, Redux, RxJS, TailwindCSS",
    aiTools:
      "RAG, Prompt Engineering, ThorV2, Weaviate, OpenAI/Anthropic APIs, Cursor AI",
    infrastructure:
      "Docker, Kubernetes, Redis, BullMQ, RabbitMQ, Terraform, ArgoCD, Helm, OpenShift, GCP/AWS/Azure",
    databases: "PostgreSQL, MongoDB, Redis, ClickHouse, Prisma",
    monitoring: "Grafana, Prometheus, Loki",
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg">
              Software Engineer with 6+ years of experience in designing and
              scaling distributed systems, with expertise in product thinking,
              full-stack engineering, and cloud-native infrastructure. Proven
              experience in leading engineering teams, building scalable
              systems, and enterprise grade generative AI based products.
            </p>
            <p className="text-lg mt-4">
              Currently building AI-powered solutions at FloWorks AI, focusing
              on LLM orchestration, agent-based systems, and creating seamless
              AI-human interactions that solve real business problems.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Languages</h4>
                <p className="text-gray-600">{skills.languages}</p>
              </div>
              <div>
                <h4 className="font-medium">Frameworks</h4>
                <p className="text-gray-600">{skills.frameworks}</p>
              </div>
              <div>
                <h4 className="font-medium">AI/LLM Tools</h4>
                <p className="text-gray-600">{skills.aiTools}</p>
              </div>
              <div>
                <h4 className="font-medium">Infrastructure</h4>
                <p className="text-gray-600">{skills.infrastructure}</p>
              </div>
              <div>
                <h4 className="font-medium">Databases</h4>
                <p className="text-gray-600">{skills.databases}</p>
              </div>
              <div>
                <h4 className="font-medium">Monitoring</h4>
                <p className="text-gray-600">{skills.monitoring}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
