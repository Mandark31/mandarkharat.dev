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
  headline: 'Senior fullstack engineer building production-grade AI systems.',
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
