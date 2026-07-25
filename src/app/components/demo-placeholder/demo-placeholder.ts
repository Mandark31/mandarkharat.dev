import { Component, signal } from '@angular/core';

interface CannedAnswer {
  answer: string;
  sources: string[];
}

/**
 * Canned DocsRAG demo — mimics the real streaming /ask interaction
 * (question → token-streamed grounded answer → cited Sources footer).
 * TODO: swap `run()` for a fetch to POST /ask (SSE) once DocsRAG is deployed.
 */
@Component({
  selector: 'app-demo-placeholder',
  templateUrl: './demo-placeholder.html',
  styleUrl: './demo-placeholder.scss',
})
export class DemoPlaceholder {
  protected readonly presets = [
    'How do I declare a path parameter?',
    'How do I return an HTTP error?',
  ];

  private readonly canned: Record<string, CannedAnswer> = {
    'How do I declare a path parameter?': {
      answer:
        'Declare a path parameter by adding it to the route string and to the function signature with a type annotation [1]. FastAPI reads the type (e.g. `int`) and validates + converts the incoming value automatically [2].',
      sources: ['path-params.md', 'path-params-numeric-validations.md'],
    },
    'How do I return an HTTP error?': {
      answer:
        'Raise `HTTPException` with a `status_code` and `detail`; FastAPI turns it into a JSON error response [1]. For custom handling you can register an exception handler [2].',
      sources: ['handling-errors.md', 'custom-response.md'],
    },
  };

  protected readonly typed = signal('');
  protected readonly sources = signal<string[]>([]);
  protected readonly streaming = signal(false);
  protected readonly asked = signal(false);

  async run(question: string) {
    const result = this.canned[question];
    if (!result || this.streaming()) return;

    this.asked.set(true);
    this.streaming.set(true);
    this.typed.set('');
    this.sources.set([]);

    const tokens = result.answer.split(/(\s+)/);
    for (const t of tokens) {
      this.typed.update((s) => s + t);
      await this.delay(22);
    }
    this.sources.set(result.sources);
    this.streaming.set(false);
  }

  private delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }
}
