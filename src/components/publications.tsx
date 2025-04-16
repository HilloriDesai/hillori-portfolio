import { BookOpenIcon, ExternalLinkIcon } from "./icons";

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">Publications</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <BookOpenIcon className="text-primary-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold">
                Benchmarking Floworks against OpenAI & Anthropic: A Novel
                Framework for Enhanced LLM Function Calling
              </h3>
              <p className="text-gray-600 mt-2">Co-author — Published 2024</p>
              <p className="mt-4">
                Built ThorV2, a scalable LLM orchestration layer that
                outperforms standalone GPT-4 and Claude on multi-API workflows
                in terms of reliability, accuracy, latency, and cost.
                Benchmarked on HubSpot CRM operations and shows potential to
                enable powerful assistants with smaller models.
              </p>
              <a
                href="#"
                className="text-primary-600 hover:underline mt-4 inline-flex items-center"
              >
                <span>Read Publication</span>
                <ExternalLinkIcon className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
