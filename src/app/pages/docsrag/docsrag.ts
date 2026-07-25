import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Decision {
  topic: string;
  choice: string;
  why: string;
}

@Component({
  selector: 'app-docsrag',
  imports: [RouterLink],
  templateUrl: './docsrag.html',
  styleUrl: './docsrag.scss',
})
export class Docsrag {
  protected readonly repo = 'https://github.com/Mandark31/DocsRAG';

  protected readonly pipeline = [
    { step: 'Ingest', detail: 'Clean macros → per-file chunk (1000/150) → embed → upsert (deterministic uuid5 IDs)' },
    { step: 'Retrieve', detail: 'Embed query with the same model → top-k vector search (cosine, 384-dim)' },
    { step: 'Generate', detail: 'Grounded answer with inline [n] citations + deterministic Sources footer' },
    { step: 'Serve', detail: 'Streaming POST /ask (SSE): sources event → token-by-token → done' },
  ];

  protected readonly decisions: Decision[] = [
    {
      topic: 'Same embedding model both sides',
      choice: 'Enforced',
      why: 'Dimension mismatch fails loud; space mismatch fails silent and returns garbage. The silent failure is the dangerous one.',
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
    },
  ];

  protected readonly roadmap = [
    { phase: 'Phases 0–5', label: 'Full pipeline: ingest → retrieve → streaming /ask → eval harness → Dockerized deploy', done: true },
    { phase: 'Baseline', label: '16-case golden set · 15/16 (94%). The one miss is a retrieval-side gap.', done: true },
    { phase: 'Phase A', label: 'Hybrid search (dense + sparse, RRF-fused) + cross-encoder reranking → target 16/16', done: false },
    { phase: 'Phase B', label: 'Semantic caching (Redis) with similarity threshold + TTL', done: false },
    { phase: 'Phase C', label: 'Observability (Langfuse): retrieve → rerank → generate spans, cost & latency', done: false },
    { phase: 'Phase D', label: 'Guardrails: prompt-injection screening + output groundedness check', done: false },
  ];
}
