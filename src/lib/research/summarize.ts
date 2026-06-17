import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import type { Candidate, Summary } from "./types";
import { matchTrackedLab } from "./sources";

const SummarySchema = z.object({
  relevant: z.boolean(),
  oneLine: z.string().trim(),
  plainTerms: z.string().trim(),
  whyItMatters: z.string().trim(),
  aboutContext: z.string().trim(),
  tags: z.array(z.string()).max(5),
  difficulty: z.enum([
    "Beginner-friendly",
    "Some background helps",
    "Technical",
  ]),
});

const MODEL = process.env.RESEARCH_MODEL || "gemini-2.5-flash";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function buildPrompt(c: Candidate): string {
  const lab = matchTrackedLab(c.authors);
  const labHint = lab
    ? `\nNOTE: At least one author appears to belong to a lab the reader is tracking: ${lab.name} — ${lab.lead}, ${lab.institution}. If that's consistent with the paper, mention it in "aboutContext".`
    : "";

  return `You are helping someone who is NEW to AI-for-learning research and wants to learn all about application of AI in education field. They will read a short daily digest on their website.

Here is a paper from arXiv.

Title: ${c.title}
Authors: ${c.authors.join(", ") || "unknown"}
Primary category: ${c.primaryCategory}
Abstract: ${c.abstract}
${labHint}

First decide: is this genuinely about AI / machine learning *for human learning or education* (e.g. tutoring, student modeling, knowledge tracing, learning analytics, educational tools, pedagogy, classrooms, literacy, language learning)? A paper that merely uses the phrase "learning" in the machine-learning sense, with no educational application, is NOT relevant.

Then write the digest fields.

Rules for the writing:
- "plainTerms" must be 5-6 sentences, in plain language a smart beginner can follow. Define jargon the first time you use it. No equations. Explain what problem the paper tackles, what they did, and what they found.
- "aboutContext" is 1-2 sentences about the research area or the group behind it. Do NOT invent affiliations, institutions, or funding. Only state an affiliation if it is evident from the author names matching a tracked lab (see note above) or clearly implied by the abstract. Otherwise describe the topic area neutrally.
- "whyItMatters" is 1-2 sentences on why a newcomer applying to this field should care.
- "tags" = 3-5 short topic tags (e.g. "intelligent tutoring", "knowledge tracing", "LLMs").
- "difficulty" = one of exactly: "Beginner-friendly", "Some background helps", "Technical".

Respond with ONLY a JSON object, no markdown fences, no commentary, in exactly this shape:
{"relevant": boolean, "oneLine": string, "plainTerms": string, "whyItMatters": string, "aboutContext": string, "tags": string[], "difficulty": string}`;
}

function stripFences(text: string): string {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

export async function summarize(c: Candidate): Promise<Summary | null> {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(buildPrompt(c));
    const text = result.response.text();

    return SummarySchema.parse(JSON.parse(stripFences(text)));
  } catch (err) {
    console.error(`summarize failed for ${c.arxivId}:`, err);
    return null;
  }
}

export async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
}
