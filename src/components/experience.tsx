import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  achievements: string[];
  icon: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  period,
  achievements,
  icon,
}) => {
  return (
    <div className="relative pl-10 pb-14 last:pb-0">
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px last:hidden"
        style={{ background: "linear-gradient(to bottom, #0d9488, transparent)" }}
      />
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-600 border-2 border-white shadow-sm" />

      <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
        <div className="flex items-start gap-4 mb-5">
          <div className="mt-0.5 flex-shrink-0">{icon}</div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: "#0c1a14" }}>{company}</h3>
            <p className="font-medium text-primary-700 mt-0.5">{position}</p>
            <div className="flex items-center gap-1.5 text-sm mt-1" style={{ color: "#64748b" }}>
              <FaCalendarAlt className="text-xs" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3">
          {achievements.map((ach, i) => (
            <li key={i} className="flex gap-3 leading-relaxed" style={{ color: "#334155" }}>
              <span className="text-primary-500 mt-1.5 text-[10px] flex-shrink-0">●</span>
              <span>{ach}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "FloWorks AI (Y Combinator '23)",
      position: "Technical Lead, Senior Software Engineer",
      period: "Oct 2023 – Present",
      icon: (
        <div className="w-9 h-9 relative">
          <Image src="/images/floworks.svg" alt="Floworks Logo" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      achievements: [
        "Built and scaled Alisha, an AI-powered sales outreach platform that helps businesses connect with potential customers using advanced AI to understand and personalize communication.",
        "Worked closely with our engineering director to plan our technical roadmap and helped build a talented team of 7 engineers across different specialties.",
      ],
    },
    {
      company: "Microland Ltd.",
      position: "Sr. Technical Lead / Tech PM / Full-stack Engineer",
      period: "Jul 2019 – Oct 2023",
      icon: (
        <div className="w-9 h-9 relative">
          <Image src="/images/microland.svg" alt="Microland Logo" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      achievements: [
        "Built Zeus Cloud Defender, a tool that helps businesses keep their cloud resources secure by visualizing and monitoring their assets.",
        "Led the successful deployment of 10+ 5G telecommunications projects across various cloud platforms, helping companies modernize their infrastructure.",
        "Built Zeus, a user-friendly low-code/no-code tool that helps IT teams manage their infrastructure, allowing them to meet customer needs 55% faster.",
        "Received recognition from our CEO for building MicroVax — a platform that helped vaccinate over 4,000 employees during COVID-19 in just 3 weeks.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20" style={{ background: "#f0fdfa" }}>
      <div className="container-section">
        <p className="section-eyebrow">Career</p>
        <h2 className="section-title">My journey so far.</h2>
        <p className="mb-12 max-w-2xl" style={{ color: "#64748b" }}>
          A look at my professional journey and some of the exciting problems
          I&apos;ve worked on along the way.
        </p>
        <div className="relative pl-4 max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
