create table if not exists research_items (
  id               uuid primary key default gen_random_uuid(),
  arxiv_id         text unique not null,
  title            text not null,
  authors          text[] not null default '{}',
  abstract         text,
  one_line         text,
  plain_terms      text,
  why_it_matters   text,
  about_context    text,
  tags             text[] not null default '{}',
  difficulty       text,
  primary_category text,
  arxiv_abs_url    text,
  arxiv_pdf_url    text,
  published_at     text,
  digest_date      date not null,
  created_at       timestamptz not null default now()
);

alter table research_items enable row level security;

create policy "public read"
  on research_items
  for select
  using (true);
