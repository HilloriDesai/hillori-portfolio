import { ExternalLinkIcon } from "./icons";

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20" style={{ background: "#f0fdfa" }}>
      <div className="container-section">
        <p className="section-eyebrow">Research</p>
        <h2 className="section-title">Publications.</h2>

        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors duration-200">
            <p className="text-xs font-mono uppercase tracking-widest text-primary-600 mb-3">
              Co-author · 2024
            </p>
            <h3 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "#0c1a14" }}>
              Benchmarking Floworks against OpenAI & Anthropic: A Novel
              Framework for Enhanced LLM Function Calling
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#475569" }}>
              Built ThorV2, a scalable LLM orchestration layer that outperforms
              standalone GPT-4 and Claude on multi-API workflows in terms of
              reliability, accuracy, latency, and cost. Benchmarked on HubSpot
              CRM operations — shows potential to enable powerful assistants
              with smaller models.
            </p>
            <a
              href="https://arxiv.org/abs/2410.17950"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-900 transition-colors duration-150"
            >
              Read on arXiv <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
