import Image from "next/image";
import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";
import { Compass, Pin, Squiggle } from "./doodles";

const traits = [
  { label: "Builder", color: "#c4622d", tilt: -3 },
  { label: "Dreamer", color: "#4f6b3a", tilt: 2 },
  { label: "Relentless problem-solver", color: "#5b8a8c", tilt: -1.5 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="absolute inset-0 topo-light pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-14">

          {/* Text */}
          <div className="flex-1">
            <p className="font-hand text-3xl text-primary-600 mb-1 animate-fade-in">
              hi there, I&apos;m
            </p>
            <h1
              className="relative inline-block text-7xl sm:text-8xl font-bold leading-[1.0] mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s", letterSpacing: "-0.03em" }}
            >
              Hillori.
              <Squiggle className="absolute left-0 -bottom-3 w-full h-4" />
            </h1>

            <div className="flex flex-wrap gap-2.5 mb-7 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {traits.map((t) => (
                <span
                  key={t.label}
                  className="px-3.5 py-1 rounded-full text-sm font-semibold text-cream"
                  style={{ background: t.color, transform: `rotate(${t.tilt}deg)`, boxShadow: "2px 2px 0 #2b2118" }}
                >
                  {t.label}
                </span>
              ))}
            </div>

            <p
              className="text-lg max-w-lg leading-relaxed mb-10 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              My mission is to build products that change how millions of
              people learn, work and live. I get there with first-principles
              thinking, a hands-on spirit, and a belief that persistence and
              empathy drive real, lasting change.
            </p>

            <div className="flex flex-wrap items-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <a href="#contact" className="btn-primary">
                Let&apos;s connect
              </a>
              <div className="flex gap-5">
                <a href="https://github.com/HilloriDesai" aria-label="GitHub" className="text-clay hover:text-primary-600 transition-colors duration-200">
                  <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/hillori-desai-awasthi" aria-label="LinkedIn" className="text-clay hover:text-primary-600 transition-colors duration-200">
                  <LinkedinIcon />
                </a>
                <a href="mailto:hilloridesai@gmail.com" aria-label="Email" className="text-clay hover:text-primary-600 transition-colors duration-200">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Polaroid */}
          <div className="relative flex-shrink-0 self-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div
              className="relative bg-cream p-3 pb-14 rounded-sm"
              style={{ transform: "rotate(3deg)", boxShadow: "0 18px 40px rgba(43, 33, 24, 0.18), 0 2px 6px rgba(43, 33, 24, 0.12)" }}
            >
              {/* Tape */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 rotate-[-4deg]"
                style={{ background: "rgba(217, 164, 65, 0.55)" }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[2px]">
                <Image
                  src="/images/profile1.jpeg"
                  alt="Hillori"
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-bark whitespace-nowrap">
                dinner in the sky ✦
              </p>
            </div>
            <Pin className="absolute -top-6 -right-4 w-9 h-12 rotate-12" />
            <Compass className="absolute -bottom-10 -left-12 w-24 h-24 -rotate-12 hidden sm:block" />
          </div>

        </div>

        {/* Trail cue */}
        <a
          href="#about"
          className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-6 font-hand text-2xl text-clay hover:text-primary-600 transition-colors"
        >
          follow the trail
          <svg viewBox="0 0 24 40" className="w-4 h-7" aria-hidden="true">
            <path d="M12 2 V32 M4 25 L12 36 L20 25" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
