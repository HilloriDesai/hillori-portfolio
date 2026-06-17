import { notFound } from 'next/navigation';
import { getReadClient } from '@/lib/research/supabase';
import type { ResearchRow } from '@/lib/research/types';
import PaperCard from '../_components/PaperCard';
import styles from '../research.module.css';

export const revalidate = 3600;

async function getItem(id: string): Promise<ResearchRow | null> {
  try {
    const db = getReadClient();
    const { data, error } = await db
      .from('research_items')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return (data as ResearchRow) ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);
  if (!item) return { title: 'Research — Not found' };
  return {
    title: `${item.title} — AI for Learning`,
    description: item.one_line || item.why_it_matters || undefined,
  };
}

export default async function ResearchItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);
  if (!item) notFound();

  return (
    <main className={styles.page}>
      <a className={styles.back} href="/research">
        ← All research
      </a>
      {item.one_line && (
        <header className={styles.masthead}>
          <p className={styles.eyebrow}>AI for Learning</p>
          <h1 className={styles.title} style={{ fontSize: 'clamp(24px,5vw,34px)' }}>
            {item.one_line}
          </h1>
        </header>
      )}
      <PaperCard item={item} linkTitle={true} />
    </main>
  );
}
