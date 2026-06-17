import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5" style={{ background: "#0a1a14" }}>
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: "#475569" }}>
            © 2025 Hillori Desai Awasthi
          </p>
          <div className="flex gap-5">
            <a href="https://github.com/HilloriDesai" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#475569" }}>
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/hillori-desai-awasthi" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#475569" }}>
              <LinkedinIcon />
            </a>
            <a href="mailto:hilloridesai@gmail.com" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#475569" }}>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
