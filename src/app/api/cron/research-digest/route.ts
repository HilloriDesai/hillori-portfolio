import { NextResponse } from 'next/server';
import { fetchArxivCandidates, relevanceScore } from '@/lib/research/arxiv';
import { summarize, mapLimit } from '@/lib/research/summarize';
import { getServiceClient } from '@/lib/research/supabase';
import { MAX_TO_SUMMARIZE, MAX_PUBLISHED } from '@/lib/research/sources';
import type { Candidate } from '@/lib/research/types';

// This route can run for a while (several Claude calls). Vercel Hobby caps at
// 60s; Pro allows more. If you hit timeouts on Hobby, lower MAX_TO_SUMMARIZE.
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  return req.headers.get('authorization') === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = getServiceClient();

    // 1. Fetch newest candidates from arXiv.
    const candidates = await fetchArxivCandidates();

    // 2. Drop anything we've already published (dedupe by arxiv_id).
    const ids = candidates.map((c) => c.arxivId);
    const { data: existing } = await db
      .from('research_items')
      .select('arxiv_id')
      .in('arxiv_id', ids);
    const seen = new Set((existing ?? []).map((r) => r.arxiv_id));
    const fresh = candidates.filter((c) => !seen.has(c.arxivId));

    // 3. Rank by keyword overlap and take the shortlist.
    const shortlist: Candidate[] = fresh
      .sort((a, b) => relevanceScore(b) - relevanceScore(a))
      .slice(0, MAX_TO_SUMMARIZE);

    // 4. Summarize with Claude (also decides true relevance), limited concurrency.
    const summaries = await mapLimit(shortlist, 3, (c) => summarize(c));

    const items = shortlist
      .map((c, i) => ({ candidate: c, summary: summaries[i] }))
      .filter((x) => x.summary && x.summary.relevant)
      .slice(0, MAX_PUBLISHED);

    if (items.length === 0) {
      return NextResponse.json({
        ok: true,
        fetched: candidates.length,
        fresh: fresh.length,
        published: 0,
        note: 'No relevant new papers today.',
      });
    }

    // 5. Store.
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    const rows = items.map(({ candidate: c, summary: s }) => ({
      arxiv_id: c.arxivId,
      title: c.title,
      authors: c.authors,
      abstract: c.abstract,
      one_line: s!.oneLine,
      plain_terms: s!.plainTerms,
      why_it_matters: s!.whyItMatters,
      about_context: s!.aboutContext,
      tags: s!.tags,
      difficulty: s!.difficulty,
      primary_category: c.primaryCategory,
      arxiv_abs_url: c.absUrl,
      arxiv_pdf_url: c.pdfUrl,
      published_at: c.publishedAt,
      digest_date: today,
    }));

    const { error } = await db
      .from('research_items')
      .upsert(rows, { onConflict: 'arxiv_id', ignoreDuplicates: true });

    if (error) throw error;

    return NextResponse.json({
      ok: true,
      fetched: candidates.length,
      fresh: fresh.length,
      published: rows.length,
      titles: rows.map((r) => r.title),
    });
  } catch (err: any) {
    console.error('research-digest cron failed:', err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? 'unknown error' },
      { status: 500 },
    );
  }
}
