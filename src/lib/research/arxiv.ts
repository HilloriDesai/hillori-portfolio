import { XMLParser } from 'fast-xml-parser';
import type { Candidate } from './types';
import {
  buildArxivSearchQuery,
  MAX_FETCH,
  RELEVANCE_KEYWORDS,
} from './sources';

interface ArxivLink {
  '@_title'?: string;
  '@_rel'?: string;
  '@_href'?: string;
}

interface ArxivAuthor {
  name?: string;
}

interface ArxivCategory {
  '@_term'?: string;
}

interface ArxivEntry {
  id?: string;
  link?: ArxivLink | ArxivLink[];
  author?: ArxivAuthor | ArxivAuthor[];
  'arxiv:primary_category'?: { '@_term'?: string };
  category?: ArxivCategory | ArxivCategory[];
  title?: string;
  summary?: string;
  published?: string;
  updated?: string;
}

const ARXIV_ENDPOINT = 'https://export.arxiv.org/api/query';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

function asArray<T>(x: T | T[] | undefined): T[] {
  if (x === undefined || x === null) return [];
  return Array.isArray(x) ? x : [x];
}

function clean(s: string): string {
  return (s || '').replace(/\s+/g, ' ').trim();
}

/** Fetch the newest AI-for-learning candidates from arXiv. */
export async function fetchArxivCandidates(): Promise<Candidate[]> {
  const search = buildArxivSearchQuery();
  const url =
    `${ARXIV_ENDPOINT}?search_query=${search}` +
    `&start=0&max_results=${MAX_FETCH}` +
    `&sortBy=submittedDate&sortOrder=descending`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'ai-for-learning-blog/1.0 (research digest)' },
    // arXiv can be slow; give it room.
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) {
    throw new Error(`arXiv request failed: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const parsed = parser.parse(xml);
  const entries = asArray(parsed?.feed?.entry);

  return entries.map(parseEntry).filter(Boolean) as Candidate[];
}

function parseEntry(entry: ArxivEntry): Candidate | null {
  try {
    const rawId: string = entry.id || '';
    // rawId looks like "http://arxiv.org/abs/2506.07626v1"
    const afterAbs = rawId.split('/abs/')[1] ?? '';
    const arxivId = afterAbs.replace(/v\d+$/, '');
    if (!arxivId) return null;

    const links = asArray(entry.link);
    const pdfLink = links.find((l) => l['@_title'] === 'pdf');
    const absLink = links.find((l) => l['@_rel'] === 'alternate');

    const authors = asArray(entry.author)
      .map((a) => clean(a?.name ?? ''))
      .filter(Boolean);

    const primaryCategory =
      entry['arxiv:primary_category']?.['@_term'] ??
      asArray(entry.category)[0]?.['@_term'] ??
      'cs.AI';

    return {
      arxivId,
      title: clean(entry.title ?? ''),
      authors,
      abstract: clean(entry.summary ?? ''),
      publishedAt: entry.published || entry.updated || new Date().toISOString(),
      primaryCategory,
      absUrl: absLink?.['@_href'] || `https://arxiv.org/abs/${arxivId}`,
      pdfUrl: pdfLink?.['@_href'] || `https://arxiv.org/pdf/${arxivId}`,
    };
  } catch {
    return null;
  }
}

/** Cheap keyword overlap score for ranking the day's shortlist. */
export function relevanceScore(c: Candidate): number {
  const haystack = `${c.title} ${c.abstract}`.toLowerCase();
  let score = 0;
  for (const kw of RELEVANCE_KEYWORDS) {
    if (haystack.includes(kw.toLowerCase())) score += 1;
  }
  // Small bonus for the most education-specific categories.
  if (c.primaryCategory === 'cs.CY' || c.primaryCategory === 'cs.HC') score += 1;
  return score;
}
