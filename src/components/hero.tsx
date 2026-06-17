import Link from "next/link";
import Image from "next/image";
import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0d1f1a" }}>
      <div className="absolute inset-0 hero-dot-grid pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-12">

          {/* Text */}
          <div className="flex-1">
            <p className="font-mono text-primary-400 text-xs tracking-widest uppercase mb-5 animate-fade-in">
              Hi, I&apos;m
            </p>
            <h1
              className="text-6xl sm:text-7xl font-bold text-white leading-[1.0] mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s", color: "#ffffff" }}
            >
              Hillori
              <br />
              Desai.
            </h1>
            <p
              className="text-lg text-primary-200/70 mb-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Builder · Dreamer · Relentless problem-solver.
            </p>
            <p
              className="text-slate-400 max-w-lg leading-relaxed mb-10 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              My mission is to create products and ecosystems that restore
              dignity, equality and quality of life for millions. I work with
              first-principles thinking, a hands-on spirit, and a deep belief
              that persistence and empathy can drive real, lasting change.
            </p>
            <div
              className="flex flex-wrap gap-3 mb-10 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#contact" className="btn-primary">
                Let&apos;s connect
              </a>
              <Link
                href="/research"
                className="border border-primary-700 text-primary-300 px-5 py-2.5 rounded-lg font-medium hover:bg-primary-900/40 transition-colors duration-200"
              >
                AI Research →
              </Link>
            </div>
            <div
              className="flex gap-5 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <a href="https://github.com/HilloriDesai" className="text-slate-500 hover:text-primary-400 transition-colors duration-200">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/hillori-desai-awasthi" className="text-slate-500 hover:text-primary-400 transition-colors duration-200">
                <LinkedinIcon />
              </a>
              <a href="mailto:hilloridesai@gmail.com" className="text-slate-500 hover:text-primary-400 transition-colors duration-200">
                <MailIcon />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 self-center">
            <div
              className="w-52 h-52 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-primary-600"
              style={{ boxShadow: "0 0 56px rgba(13, 148, 136, 0.28)" }}
            >
              <Image
                src="/images/profile1.jpeg"
                alt="Hillori Desai Awasthi"
                fill
                className="object-cover scale-150"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
