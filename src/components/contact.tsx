import { MailIcon, LinkedinIcon } from "./icons";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24" style={{ background: "#0d1f1a" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-primary-400 text-xs tracking-widest uppercase mb-4">
          Get in touch
        </p>
        <h2 className="text-4xl font-bold text-white mb-5" style={{ color: "#ffffff" }}>
          Let&apos;s build something together.
        </h2>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "#94a3b8" }}>
          I&apos;m open to new opportunities and collaborations — whether it&apos;s a
          product idea, a research problem, or just a conversation. Reach out
          and let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hilloridesai@gmail.com"
            className="btn-primary flex items-center justify-center gap-2 px-7 py-3 text-base"
          >
            <MailIcon size={18} />
            Email me
          </a>
          <a
            href="https://linkedin.com/in/hillori-desai-awasthi"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-medium border border-white/15 text-slate-300 hover:bg-white/8 transition-colors duration-200 text-base"
          >
            <LinkedinIcon size={18} />
            Connect on LinkedIn
          </a>
        </div>

        <p className="mt-10 text-sm" style={{ color: "#64748b" }}>
          Bangalore, India · hilloridesai@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
