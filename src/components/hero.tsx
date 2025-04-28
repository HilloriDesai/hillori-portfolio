import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-xl border-4 border-primary-500 transition-all duration-500 hover:scale-125">
          <Image
            src="/images/profile1.jpeg"
            alt="Hillori Desai Awasthi"
            fill
            className="object-cover scale-150"
            priority
          />
        </div>

        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl text-gray-200 font-bold animate-fade-in">
            Hi, I am Hillori.
          </h1>
          <h2
            className="text-xl mt-4 text-gray-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            I am a builder, a dreamer, and a relentless problem-solver.
            <br /> I believe technology can unlock a brighter, fairer future for
            all.
          </h2>
          <p
            className="mt-6 text-lg max-w-3xl text-gray-400 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            My mission is to create products or eco-systems that restore
            dignity, equality & quality of life for millions.
            <br />I work with first-principles thinking, a hands-on spirit & a
            deep belief that persistence and empathy can drive real, lasting
            change.
          </p>
          <div
            className="mt-8 flex justify-center md:justify-start space-x-6 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/HilloriDesai"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/hillori-desai-awasthi"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:hilloridesai@gmail.com"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
