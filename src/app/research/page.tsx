import { getReadClient } from '@/lib/research/supabase';
import type { ResearchRow } from '@/lib/research/types';
import PaperCard from './_components/PaperCard';
import styles from './research.module.css';

// Re-render the page periodically so new morning digests show up.
export const revalidate = 1800; // 30 minutes

export const metadata = {
  title: 'AI for Learning — Daily Research',
  description:
    'A plain-English daily digest of new research on AI for learning and education, auto-curated from arXiv and leading labs.',
};

function formatDate(d: string): string {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function groupByDate(rows: ResearchRow[]): [string, ResearchRow[]][] {
  const map = new Map<string, ResearchRow[]>();
  for (const r of rows) {
    const k = r.digest_date;
    if (!map.has(k)) map.set(k, []);
    map.get(k)!.push(r);
  }
  return Array.from(map.entries());
}

export default async function ResearchPage() {
  let rows: ResearchRow[] = [];
  let loadError = false;

  try {
    const db = getReadClient();
    const { data, error } = await db
      .from('research_items')
      .select('*')
      .order('digest_date', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(60);
    if (error) throw error;
    rows = (data ?? []) as ResearchRow[];
  } catch {
    loadError = true;
  }

  const groups = groupByDate(rows);

  return (
    <main className={styles.page}>
      <header className={styles.masthead}>
        <p className={styles.eyebrow}>Updated every morning</p>
        <h1 className={styles.title}>AI for Learning — Daily Research</h1>
        <p className={styles.lede}>
          New work on how artificial intelligence can help people learn, pulled
          from arXiv and leading labs, with a plain-English explanation of each
          paper. I read this to increase my knowledge of the domain — you&apos;re
          welcome to read along.
        </p>
      </header>
      <hr className={styles.rule} />

      {loadError && (
        <div className={styles.empty}>
          The digest can&apos;t be loaded right now. Check back shortly.
        </div>
      )}

      {!loadError && rows.length === 0 && (
        <div className={styles.empty}>
          The first digest will appear here after tomorrow morning&apos;s run.
        </div>
      )}

      {groups.map(([date, items]) => (
        <section key={date}>
          <h2 className={styles.dateHeading}>{formatDate(date)}</h2>
          {items.map((item) => (
            <PaperCard key={item.id} item={item} />
          ))}
        </section>
      ))}
    </main>
  );
}
