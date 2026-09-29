import { Stamp } from "./doodles";

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
  <dl className={`grid grid-cols-2 ${stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"} gap-4 mb-8`}>
    {stats.map((s, i) => (
      <div key={s.label}>
        <dt className="sr-only">{s.label}</dt>
        <dd>
          <Stamp value={s.value} label={s.label} index={i} />
        </dd>
      </div>
    ))}
  </dl>
);

export const ImpactList: React.FC<{ items: ImpactItem[] }> = ({ items }) => (
  <ul className="paper-card divide-y divide-dashed divide-gray-100">
    {items.map((item) => (
      <li key={item.impact} className="px-5 py-4">
        <span className="technology-badge">{item.product}</span>
        <p className="mt-2 font-medium leading-relaxed" style={{ color: "#2b2118" }}>
          {item.impact}
        </p>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "#7a6857" }}>
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
    <p className="leading-relaxed mb-6" style={{ color: "#4a3b2e" }}>
      {intro}
    </p>
    <StatRow stats={stats} />
    <ImpactList items={items} />
  </div>
);
