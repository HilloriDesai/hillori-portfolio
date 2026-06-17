// Shared types for the AI-for-Learning research pipeline.

/** A paper fetched from arXiv, before any AI processing. */
export interface Candidate {
  arxivId: string; // e.g. "2506.07626" (version stripped)
  title: string;
  authors: string[];
  abstract: string;
  publishedAt: string; // ISO date string (arXiv submission date)
  primaryCategory: string; // e.g. "cs.CL"
  absUrl: string; // human-readable arXiv page
  pdfUrl: string; // direct PDF link
}

/** What the LLM API returns for each candidate. */
export interface Summary {
  relevant: boolean;
  oneLine: string; // headline-style one sentence
  plainTerms: string; // 5-6 sentence beginner explanation
  whyItMatters: string; // 1-2 sentences
  aboutContext: string; // 1-2 sentences about the research area / lab, no fabrication
  tags: string[]; // 3-5 short topic tags
  difficulty: "Beginner-friendly" | "Some background helps" | "Technical";
}

/** A fully processed item, ready to store and render. */
export interface ResearchItem extends Candidate, Summary {}

/** A row as stored in / read from Supabase. */
export interface ResearchRow {
  id: string;
  arxiv_id: string;
  title: string;
  authors: string[];
  abstract: string | null;
  one_line: string | null;
  plain_terms: string | null;
  why_it_matters: string | null;
  about_context: string | null;
  tags: string[];
  difficulty: string | null;
  primary_category: string | null;
  arxiv_abs_url: string | null;
  arxiv_pdf_url: string | null;
  published_at: string | null;
  digest_date: string; // YYYY-MM-DD — the morning it appeared on the blog
  created_at: string;
}
