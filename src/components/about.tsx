import React from "react";

const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Django"],
  },
  {
    label: "AI / LLMs",
    items: ["RAG", "Prompt Engineering", "OpenAI", "Anthropic"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "ClickHouse", "Redis"],
  },
  {
    label: "Observability",
    items: ["Grafana", "Prometheus", "Loki"],
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-section">

        {/* Bio */}
        <div className="max-w-2xl">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">I build things that matter.</h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: "#334155" }}>
            <p>
              I am a passionate software engineer with a love for building
              scalable applications and AI-driven solutions.
            </p>
            <p>
              With hands-on experience across frontend, backend, distributed
              systems, and artificial intelligence, I enjoy bringing ideas to
              life by solving complex problems with thoughtful, user-centered
              design.
            </p>
            <p>
              Beyond code, I&apos;m an explorer — constantly learning, growing, and
              creating. You&apos;ll often find me reading thought-provoking books,
              sharing knowledge through my YouTube channel, or discovering new
              corners of the world.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <p className="section-eyebrow">What I work with</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 mt-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-semibold text-sm mb-2" style={{ color: "#0c1a14" }}>
                  {group.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
