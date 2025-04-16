import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";

const Hero: React.FC = () => {
  return (
    <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl text-gray-200 md:text-6xl font-bold">
          Hillori Desai Awasthi
        </h1>
        <h2 className="text-2xl mt-4 text-gray-300">
          Senior Software Engineer & Technical Lead
        </h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-400">
          Building scalable distributed systems and enterprise-grade AI
          solutions with 6+ years of experience.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/HilloriDesai"
            className="text-gray-400 hover:text-primary-600 transition"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/hillori-desai-awasthi"
            className="text-gray-400 hover:text-primary-600 transition"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:hilloridesai@gmail.com"
            className="text-gray-400 hover:text-primary-600 transition"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
