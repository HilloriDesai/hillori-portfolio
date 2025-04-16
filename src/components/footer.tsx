import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Hillori Desai Awasthi. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/HilloriDesai"
              className="text-gray-300 hover:text-white transition"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/hillori-desai-awasthi"
              className="text-gray-300 hover:text-white transition"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:hilloridesai@gmail.com"
              className="text-gray-300 hover:text-white transition"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
