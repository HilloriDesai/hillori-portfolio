import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5" style={{ background: "#262f23" }}>
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: "#6b5b4b" }}>
            © 2026 Hillori
          </p>
          <div className="flex gap-5">
            <a href="https://github.com/HilloriDesai" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#6b5b4b" }}>
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/hillori-desai-awasthi" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#6b5b4b" }}>
              <LinkedinIcon />
            </a>
            <a href="mailto:hilloridesai@gmail.com" className="hover:text-primary-400 transition-colors duration-200" style={{ color: "#6b5b4b" }}>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
