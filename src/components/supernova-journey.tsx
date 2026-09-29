import { ImpactList, StatRow, type ImpactItem, type Stat } from "./impact";

interface JourneyStep {
  key: string;
  label: string;
  tagline: string;
  items: ImpactItem[];
}

const stats: Stat[] = [
  { value: "2M", label: "learners practising every day" },
  { value: "435K", label: "payments that just went through" },
  { value: "36", label: "live experiments improving lessons" },
  { value: "15K+", label: "people heard out before leaving" },
];

const steps: JourneyStep[] = [
  {
    key: "learn",
    label: "Learn",
    tagline: "Lessons that keep getting better",
    items: [
      {
        product: "Supernova app",
        impact: "Every learner moved to a new course system mid-journey — and nobody lost their place.",
        built: "Architected CourseV2: the data model and progression algorithm, a staged rollout, and automatic migration of in-flight progress.",
      },
      {
        product: "Supernova app",
        impact: "Lessons improve week after week, because the content team can create, reorder and test courses on their own.",
        built: "Designed CourseV2 for experimentation with no engineer in the loop — 36 live experiments across 123 variants.",
      },
      {
        product: "Supernova app",
        impact: "More real-life conversations to practise, in learners' own languages.",
        built: "A GenAI scenario-generation pipeline, plus the Course and Activity translation APIs behind multi-language support.",
      },
      {
        product: "SuperPrep",
        impact: "Exam students can ask questions about their study material and get answers grounded in it.",
        built: "Document-grounded Ask AI (RAG) for SuperPrep, our exam-preparation app.",
      },
    ],
  },
  {
    key: "speak",
    label: "Speak",
    tagline: "A tutor that's always there",
    items: [
      {
        product: "Nova AI",
        impact: "Learners can show their AI tutor a photo, a PDF or a file — not just type at it.",
        built: "Redesigned Nova AI, the in-app tutor used by 2M people a day, with a new AI tab for image, PDF and file uploads.",
      },
      {
        product: "Supernova app",
        impact: "Conversations keep going even when a speech provider goes down.",
        built: "Multi-provider text-to-speech and transcription failover with health tracking; every new provider validated with evals and manual audio review.",
      },
      {
        product: "Superflow",
        impact: "The names, companies and places each person actually says get spelled right.",
        built: "A personalised transcription dictionary mined from each user's transcription logs, with the surface built in Expo UI and edit-in-preview in native Android.",
      },
      {
        product: "Superflow",
        impact: "The translation widget stopped vanishing — and now brings itself back if the phone shuts it down.",
        built: "Traced a top complaint to the OS killing the background service, and restored it automatically with high-priority Firebase Cloud Messaging wake-ups.",
      },
    ],
  },
  {
    key: "pay",
    label: "Pay",
    tagline: "Paying that just works",
    items: [
      {
        product: "Supernova app",
        impact: "239K learners have paid smoothly through a gateway I integrated in my first month — 435K payments and counting.",
        built: "Two-phase payment flows and idempotent webhook processing, so no payment is lost or counted twice.",
      },
      {
        product: "Supernova app",
        impact: "iPhone learners got a proper way to pay, with invoices — around 67K now learn on paid plans.",
        built: "Launched iOS payments with gateway support and invoicing, where only in-app purchase existed before.",
      },
      {
        product: "Supernova app",
        impact: "Learners who were owed refunds got their money back.",
        built: "Root-caused systemically missing refunds; designed the refunds and disputes model, webhooks and a historical backfill — shipped with zero follow-up fixes.",
      },
      {
        product: "Supernova app",
        impact: "Every purchase comes with a correct GST invoice.",
        built: "GST-compliant invoicing across every payment path, delivered on a regulatory deadline without disrupting live checkout.",
      },
    ],
  },
  {
    key: "stay",
    label: "Stay",
    tagline: "Listening before someone leaves",
    items: [
      {
        product: "Supernova app",
        impact: "15K+ people thinking of leaving were asked why, instead of just being shown a cancel button.",
        built: "A configurable cancellation and retention platform — new retention experiments ship as configuration, not code — instrumented from day one.",
      },
      {
        product: "Team tools",
        impact: "The people who look after learners — product, content and ops — get answers and tools without waiting on an engineer.",
        built: "Metabase dashboards for funnel data, Retool for content operations, and Vibetool, which puts the latest translation models and prompts in the content team's hands.",
      },
    ],
  },
];

const SupernovaJourney: React.FC = () => {
  return (
    <div>
      <p className="leading-relaxed mb-6" style={{ color: "#334155" }}>
        Supernova is an AI spoken-English app — the #1 Education app on
        India&apos;s App Store. With a tech team of four engineers and a CTO
        serving 2 million learners a day, I own whole stretches of their
        journey.
      </p>

      <StatRow stats={stats} />

      <p className="section-eyebrow">A learner&apos;s journey — what I built at each step</p>

      <ol className="mt-4">
        {steps.map((s, i) => (
          <li key={s.key} className="relative pl-14 pb-8 last:pb-0">
            {/* Line joining this step to the next */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-10 bottom-0 w-px bg-primary-200" aria-hidden="true" />
            )}
            <span className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary-600 text-white">
              {i + 1}
            </span>

            <div className="pt-1.5 mb-3">
              <h4 className="text-lg font-bold leading-tight" style={{ color: "#0c1a14" }}>{s.label}</h4>
              <p className="text-sm mt-0.5" style={{ color: "#64748b" }}>{s.tagline}</p>
            </div>

            <ImpactList items={s.items} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SupernovaJourney;
