import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import SupernovaJourney from "./supernova-journey";
import { Mountains, Pin } from "./doodles";
import { RoleStory } from "./impact";

interface ExperienceItemProps {
  company: string;
  url: string;
  position: string;
  period: string;
  body: React.ReactNode;
  icon: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  url,
  position,
  period,
  body,
  icon,
}) => {
  return (
    <div className="group relative pl-10 pb-14 last:pb-0">
      {/* Dashed trail between stops */}
      <div className="absolute left-[3px] top-10 bottom-0 border-l-2 border-dashed border-primary-300 group-last:hidden" />
      {/* Map pin for this stop */}
      <Pin className="absolute -left-[9px] top-0 w-6 h-8" />

      <div className="paper-card p-7">
        <div className="flex items-start gap-4 mb-5">
          <div className="mt-0.5 flex-shrink-0">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold" style={{ color: "#2b2118" }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-700 hover:underline underline-offset-4 transition-colors duration-150"
              >
                {company}
              </a>
            </h3>
            <p className="font-medium text-primary-700 mt-0.5">{position}</p>
            <div className="flex items-center gap-1.5 text-sm mt-1" style={{ color: "#7a6857" }}>
              <FaCalendarAlt className="text-xs" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        {body}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Supernova AI",
      url: "https://www.getsupernova.ai",
      position: "Senior AI Full-Stack Engineer",
      period: "Jul 2025 – Present",
      icon: (
        <div className="w-9 h-9 relative rounded-lg overflow-hidden">
          <Image src="/images/supernova.png" alt="Supernova AI Logo" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      body: <SupernovaJourney />,
    },
    {
      company: "Floworks AI (Y Combinator '23)",
      url: "https://www.floworks.ai",
      position: "Technical Lead, Senior Software Engineer",
      period: "Oct 2023 – Apr 2025",
      icon: (
        <div className="w-9 h-9 relative rounded-lg overflow-hidden">
          <Image src="/images/floworks-square.png" alt="Floworks Logo" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      body: (
        <RoleStory
          intro="Floworks builds AI agents for B2B sales outreach. As technical lead, I shaped the architecture and roadmap with our Director of Engineering, and hired and led a team of seven engineers."
          stats={[
            { value: "10K+", label: "AI workflows run every day" },
            { value: "65%", label: "faster to launch a new campaign" },
            { value: "7", label: "engineers hired and led" },
          ]}
          items={[
            {
              product: "Alisha",
              impact: "Sales teams hand off outreach to an AI agent that answers from their own documents, writes to prospects and follows up on its own.",
              built: "Built Alisha from zero: the AI orchestration layer behind multi-step prompt chaining, semantic document Q&A, autonomous follow-ups and multi-API function calling, on Weaviate vector search.",
            },
            {
              product: "Alisha",
              impact: "More than 10,000 AI workflows run every day for business customers — quickly and reliably.",
              built: "Productionised it as multi-tenant enterprise SaaS, with throughput and latency optimisation, connection-pool management and observability.",
            },
            {
              product: "Alisha",
              impact: "Teams launch a new campaign sequence 65% faster.",
              built: "An event-driven core on RxJS and Redis-backed BullMQ, with throttling, automatic retries and deduplication.",
            },
          ]}
        />
      ),
    },
    {
      company: "Microland Ltd.",
      url: "https://www.microland.com",
      position: "Technical Project Manager / Full-stack Engineer",
      period: "Jul 2019 – Oct 2023",
      icon: (
        <div className="w-9 h-9 relative">
          <Image src="/images/microland-square.svg" alt="Microland Logo" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      body: (
        <RoleStory
          intro="Microland is an IT infrastructure services company. Over four years I worked as a full-stack engineer, technical lead and technical PM, building for IT teams, cloud customers and my own colleagues."
          stats={[
            { value: "4,000+", label: "colleagues vaccinated in under 3 weeks" },
            { value: "55%", label: "faster at meeting customer SLAs" },
            { value: "10+", label: "5G deployments for Nokia's customers" },
          ]}
          items={[
            {
              product: "MicroVax",
              impact: "During COVID-19, more than 4,000 colleagues got vaccinated in under three weeks.",
              built: "MicroVax, a vaccination platform built and delivered in under three weeks — recognised by our CEO.",
            },
            {
              product: "Zeus",
              impact: "IT teams met customer SLAs 55% faster, without writing code.",
              built: "Zeus, a microservices-based low-code platform for IT infrastructure teams.",
            },
            {
              product: "Zeus Cloud Defender",
              impact: "Businesses could see all their cloud assets across AWS, GCP and Azure in one place, and catch security risks.",
              built: "Co-led Zeus Cloud Defender, a cloud security posture product with dynamic asset graphs and audit trails.",
            },
            {
              product: "5G",
              impact: "Telecom operators got their 5G networks running on modern, cloud-native infrastructure.",
              built: "Led 10+ cloud-native 5G deployments for Nokia's customers across OpenShift, Robin.IO and Nokia Kubernetes Service.",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden" style={{ background: "#ede3d0" }}>
      <div className="absolute inset-0 topo-light pointer-events-none" />
      <div className="container-section relative">
        <Mountains className="hidden lg:block absolute right-8 top-0 w-40" />
        <p className="section-eyebrow">where I&apos;ve been</p>
        <h2 className="section-title">The mission, in practice.</h2>
        <p className="mb-12 max-w-2xl" style={{ color: "#7a6857" }}>
          Where that mission has turned into real products — and what changed
          for the people who use them.
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
