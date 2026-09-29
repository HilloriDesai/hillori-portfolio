import React from "react";

const skillGroups = [
  {
    label: "AI / LLMs",
    items: ["RAG", "Prompt engineering", "LLM evals", "OpenAI", "Gemini", "Anthropic", "Weaviate", "Speech-to-text & text-to-speech"],
  },
  {
    label: "Payments",
    items: ["Payment gateways", "UPI Autopay", "Webhook reconciliation", "Refunds & disputes", "GST invoicing"],
  },
  {
    label: "Growth",
    items: ["Event instrumentation", "Funnel analysis", "A/B experiments", "Retention & pricing experiments", "MoEngage"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Redux", "TanStack Query", "Zustand", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Native Android modules", "Firebase Cloud Messaging"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Django", "REST APIs", "Event-driven architecture"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C++", "Bash"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Drizzle", "Prisma", "Hasura", "Dagster", "Metabase"],
  },
  {
    label: "Infrastructure & observability",
    items: ["Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure", "BullMQ", "RabbitMQ", "Sentry", "Axiom", "Grafana", "Prometheus", "Loki"],
  },
];


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-section">

        {/* Bio */}
        <div className="max-w-2xl">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">I build for the people on the other side of the screen.</h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: "#334155" }}>
            <p>
              What I care about most is simple: whether what I build makes
              someone&apos;s day a little easier. I&apos;ve built for learners,
              sales teams, IT teams and my own colleagues, and that question
              has guided all of it.
            </p>
            <p>
              I work across the whole stack — AI, payments, mobile, growth —
              because users don&apos;t experience a product in layers. I&apos;d
              rather own a problem end to end than hand it off halfway.
            </p>
            <p>
              Beyond work, I&apos;m an explorer — reading thought-provoking
              books, making videos for my YouTube channel, or finding new
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
