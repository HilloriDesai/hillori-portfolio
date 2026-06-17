import type { ResearchRow } from '@/lib/research/types';
import { matchTrackedLab } from '@/lib/research/sources';
import styles from '../research.module.css';

function authorLine(authors: string[]): string {
  if (!authors?.length) return 'Unknown authors';
  if (authors.length <= 4) return authors.join(', ');
  return `${authors.slice(0, 4).join(', ')} +${authors.length - 4} more`;
}

export default function PaperCard({
  item,
  linkTitle = true,
}: {
  item: ResearchRow;
  linkTitle?: boolean;
}) {
  const lab = matchTrackedLab(item.authors);

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.cat}>{item.primary_category}</span>
        {item.difficulty && (
          <>
            <span className={styles.dot}>•</span>
            <span className={styles.difficulty}>{item.difficulty}</span>
          </>
        )}
        {lab && <span className={styles.labFlag}>Tracked lab · {lab.lead}</span>}
      </div>

      <h2 className={styles.cardTitle}>
        {linkTitle && item.arxiv_abs_url ? (
          <a href={item.arxiv_abs_url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h2>
      <p className={styles.authors}>{authorLine(item.authors)}</p>

      {item.plain_terms && (
        <div className={styles.plainBlock}>
          <p className={styles.plainLabel}>In plain terms</p>
          <p className={styles.plainBody}>{item.plain_terms}</p>
        </div>
      )}

      {item.why_it_matters && (
        <p className={styles.meta}>
          <span className={styles.metaLabel}>Why it matters · </span>
          <span className={styles.metaText}>{item.why_it_matters}</span>
        </p>
      )}

      {item.about_context && (
        <p className={styles.meta}>
          <span className={styles.metaLabel}>About this work · </span>
          <span className={styles.metaText}>{item.about_context}</span>
        </p>
      )}

      {item.tags?.length > 0 && (
        <div className={styles.tags}>
          {item.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      )}

      <div className={styles.links}>
        {item.arxiv_abs_url && (
          <a
            className={styles.link}
            href={item.arxiv_abs_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on arXiv →
          </a>
        )}
        {item.arxiv_pdf_url && (
          <a
            className={styles.link}
            href={item.arxiv_pdf_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
        )}
        {lab && (
          <a
            className={styles.link}
            href={lab.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lab.name} ↗
          </a>
        )}
        <a className={styles.link} href={`/research/${item.id}`}>
          Permalink
        </a>
      </div>
    </article>
  );
}
