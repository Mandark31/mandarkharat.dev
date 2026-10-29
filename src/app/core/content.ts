/**
 * Single source of truth for site content.
 * Pulled from resume + DocsRAG README. Edit here, not in templates.
 */

export interface ProofStat {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  tagline: string;
  blurb: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  highlights: string[];
}

export const profile = {
  name: 'Mandar Kharat',
  // Bridge positioning: production engineer who builds production AI.
  // Headline in two parts so the hero can set the second half in italics.
  headlineLead: 'Senior fullstack engineer building',
  headlineEmphasis: 'production-grade AI systems.',
  role: 'Senior fullstack engineer',
  status: 'Open to senior fullstack & AI roles',
  subline:
    'Six years shipping Angular + .NET in production — now engineering LLM systems with the same discipline: measurable, containerized, eval-gated, secure.',
  location: 'India',
  email: 'mandarkharat.mk@gmail.com',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Mandark31', handle: 'Mandark31' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mandar-kharat-007m/', handle: 'mandar-kharat-007m' },
  { label: 'Email', href: 'mailto:mandarkharat.mk@gmail.com', handle: 'mandarkharat.mk@gmail.com' },
];

export const proofStats: ProofStat[] = [
  { value: '12M', label: 'rows migrated via Kafka CDC pipelines' },
  { value: '1h → 10m', label: 'critical PL/SQL job runtime cut' },
  { value: '~$1M', label: 'annual savings — WCN tracking delivered' },
  { value: '6 apps', label: 'migrated to Azure AD B2C identity' },
];

export const projects: Project[] = [
  {
    name: 'DocsRAG',
    tagline: 'Production-minded RAG service over documentation',
    blurb:
      'A corpus-agnostic retrieval-augmented-generation service that answers questions over a doc collection with grounded, inline-cited answers. Built baseline-first — containerized, eval-gated, and defend-every-decision — not a notebook demo.',
    stack: ['Python 3.12', 'FastAPI', 'Qdrant', 'fastembed (bge-small)', 'Groq LLM', 'Docker'],
    links: [
      { label: 'Read the case study', href: '/docsrag' },
      { label: 'GitHub', href: 'https://github.com/Mandark31/DocsRAG' },
    ],
    featured: true,
  },
  {
    name: 'AtmosView',
    tagline: 'Distributed cloud data platform',
    blurb:
      'A decoupled Angular 19 + .NET 8 platform enabling independent service scaling, with automated CI/CD to Azure Static Web Apps via GitHub Actions and a secured Azure SQL / EF Core data layer.',
    stack: ['Angular 19', '.NET 8', 'Azure SQL', 'EF Core', 'GitHub Actions'],
    links: [],
  },
];

/* ---------- DocsRAG case study ---------- */

export interface Decision {
  topic: string;
  choice: string;
  why: string;
  /** Shown in the decisions excerpt on the home page. */
  highlight?: boolean;
}

export const docsragPipeline = [
  { step: 'Ingest', detail: 'Clean macros → per-file chunk (1000/150) → embed → upsert (deterministic uuid5 IDs)' },
  { step: 'Retrieve', detail: 'Embed query with the same model → top-k vector search (cosine, 384-dim)' },
  { step: 'Generate', detail: 'Grounded answer with inline [n] citations + deterministic Sources footer' },
  { step: 'Serve', detail: 'Streaming POST /ask (SSE): sources event → token-by-token → done' },
];

export const docsragDecisions: Decision[] = [
  {
    topic: 'Same embedding model both sides',
    choice: 'Enforced',
    why: 'Dimension mismatch fails loud; space mismatch fails silent and returns garbage. The silent failure is the dangerous one.',
    highlight: true,
  },
  {
    topic: 'Distance metric',
    choice: 'Cosine',
    why: 'Meaning lives in direction, not magnitude — a longer chunk shouldn’t rank higher just for being longer.',
  },
  {
    topic: 'Chunking',
    choice: 'Fixed 1000/150, per file',
    why: 'A deliberate baseline to measure before tuning. Per-file so every chunk traces to exactly one source for citations.',
  },
  {
    topic: 'LLM access',
    choice: 'OpenAI SDK → Groq endpoint',
    why: 'Provider-agnostic: swapping providers is a base_url + key change. No provider-specific code in the domain.',
    highlight: true,
  },
  {
    topic: 'Config',
    choice: 'pydantic-settings, fail-fast',
    why: 'A missing key throws at startup — turning a production incident into a failed deploy the orchestrator can roll back.',
  },
  {
    topic: 'Eval',
    choice: 'LLM-judge + threshold',
    why: 'Generation isn’t reproducible, so semantic grading beats string matching. A threshold catches regressions without brittle asserts.',
    highlight: true,
  },
];

export const docsragRoadmap = [
  { phase: 'Phases 0–5', label: 'Full pipeline: ingest → retrieve → streaming /ask → eval harness → Dockerized deploy', done: true },
  { phase: 'Baseline', label: '16-case golden set · 15/16 (94%). The one miss is a retrieval-side gap.', done: true },
  { phase: 'Phase A', label: 'Hybrid search (dense + sparse, RRF-fused) + cross-encoder reranking → target 16/16', done: false },
  { phase: 'Phase B', label: 'Semantic caching (Redis) with similarity threshold + TTL', done: false },
  { phase: 'Phase C', label: 'Observability (Langfuse): retrieve → rerank → generate spans, cost & latency', done: false },
  { phase: 'Phase D', label: 'Guardrails: prompt-injection screening + output groundedness check', done: false },
];

export const experience: Role[] = [
  {
    company: 'Fastenal',
    title: 'IT Senior Software Engineer — Angular & .NET',
    period: 'Dec 2025 – Present',
    highlights: [
      'Led a 3-member team; doubled production deployment frequency through tighter grooming and cross-team coordination.',
      'Drove framework upgrades across 6 Angular apps (17→19) and 4 .NET APIs (6→8), eliminating known security vulnerabilities.',
      'Implemented Duende BFF and migrated 6 apps from OneLogin to Azure AD B2C — removed browser token exposure and centralized identity.',
    ],
  },
  {
    company: 'Fastenal',
    title: 'IT Software Engineer — Angular & .NET',
    period: 'Aug 2024 – Nov 2025',
    highlights: [
      'Built a Windows service computing real-time ETAs across 54 business units — drove a 12% increase in order conversion.',
      'Owned observability for 6 .NET services and 15–20 database jobs; optimized PL/SQL to cut a critical job from 1 hour to 10 minutes.',
    ],
  },
  {
    company: 'Fastenal',
    title: 'Developer — Angular & .NET',
    period: 'Jul 2020 – Aug 2024',
    highlights: [
      'Built high-throughput Kafka CDC pipelines streaming row-level DB changes; migrated 12M rows with 10–15 min sync cycles.',
      'Delivered Warehouse Control Number tracking, contributing ~$1M in annual savings.',
    ],
  },
];

export const education = [
  { title: 'B.Tech, Electrical & Electronics Engineering', org: 'NIT Tiruchirappalli', period: '2016 – 2020 · CGPA 8.34' },
  { title: 'MongoDB Certified Associate Developer', org: 'MongoDB Inc', period: 'Oct 2024' },
];
