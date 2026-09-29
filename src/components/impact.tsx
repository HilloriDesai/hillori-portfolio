export interface Stat {
  value: string;
  label: string;
}

export interface ImpactItem {
  product: string;
  impact: string;
  built: string;
}

export const StatRow: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <dl className={`grid grid-cols-2 ${stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"} gap-3 mb-8`}>
    {stats.map((s) => (
      <div key={s.label} className="rounded-xl bg-primary-50 border border-primary-100 px-4 py-3">
        <dt className="sr-only">{s.label}</dt>
        <dd>
          <span className="block text-2xl font-bold text-primary-800" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            {s.value}
          </span>
          <span className="block text-xs leading-snug mt-0.5" style={{ color: "#64748b" }}>
            {s.label}
          </span>
        </dd>
      </div>
    ))}
  </dl>
);

export const ImpactList: React.FC<{ items: ImpactItem[] }> = ({ items }) => (
  <ul className="rounded-xl border border-primary-100 bg-white divide-y divide-gray-100">
    {items.map((item) => (
      <li key={item.impact} className="px-5 py-4">
        <span className="technology-badge">{item.product}</span>
        <p className="mt-2 font-medium leading-relaxed" style={{ color: "#0c1a14" }}>
          {item.impact}
        </p>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "#64748b" }}>
          <span className="font-medium text-primary-700">What I built: </span>
          {item.built}
        </p>
      </li>
    ))}
  </ul>
);

interface RoleStoryProps {
  intro: React.ReactNode;
  stats: Stat[];
  items: ImpactItem[];
}

/** A lighter, single-list version of the Supernova journey for earlier roles. */
export const RoleStory: React.FC<RoleStoryProps> = ({ intro, stats, items }) => (
  <div>
    <p className="leading-relaxed mb-6" style={{ color: "#334155" }}>
      {intro}
    </p>
    <StatRow stats={stats} />
    <ImpactList items={items} />
  </div>
);
