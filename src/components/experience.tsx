import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

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
    <div className="relative pl-8 pb-12 border-l-2 border-primary-200 last:border-l-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white"></div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-2xl text-primary-600">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{company}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <FaCalendarAlt className="mr-2" />
              <span>{period}</span>
            </div>
          </div>
        </div>
        <h4 className="font-medium mb-4 text-gray-700">{position}</h4>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-600 leading-relaxed">
              {achievement}
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
      period: "Oct 2024 – Present",
      icon: (
        <div className="w-8 h-8 relative">
          <Image
            src="/images/floworks.svg"
            alt="Floworks Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ),
      achievements: [
        "Built and scaled Alisha, an AI-powered sales outreach platform that helps businesses connect with potential customers. It uses advanced AI to understand customer needs and personalize communication.",
        "Worked closely with our engineering director to plan our technical roadmap and helped build a talented team of 7 engineers across different specialties.",
      ],
    },
    {
      company: "Microland Ltd.",
      position: "Sr. Technical Lead / Tech PM / Full-stack Engineer",
      period: "Jul 2019 – Oct 2024",
      icon: (
        <div className="w-8 h-8 relative">
          <Image
            src="/images/microland.svg"
            alt="Microland Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ),
      achievements: [
        "Built develop Zeus Cloud Defender, a tool that helps businesses keep their cloud resources secure by visualizing and monitoring their assets.",
        "Led the successful deployment of 10+ 5G telecommunications projects across various cloud platforms, helping companies modernize their infrastructure.",
        "Built Zeus, a user-friendly tool that helps IT teams manage their infrastructure using low-code no-code tool, allowing them to meet customer needs 55% faster.",
        "I&apos;m proud to have received recognition from our CEO for building MicroVax—a platform that helped vaccinate over 4,000 employees during the COVID-19 pandemic in just 3 weeks.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title flex items-center">
          <FaBriefcase className="mr-3 text-primary-600" />
          My Journey
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Here&apos;s a look at my professional journey and some of the exciting
          projects I&apos;ve worked on along the way.
        </p>
        <div className="relative pl-4">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              achievements={exp.achievements}
              icon={exp.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
