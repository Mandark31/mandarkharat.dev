import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { docsragDecisions, docsragPipeline, docsragRoadmap, projects } from '../../core/content';

@Component({
  selector: 'app-docsrag',
  imports: [RouterLink],
  templateUrl: './docsrag.html',
  styleUrl: './docsrag.scss',
})
export class Docsrag {
  private readonly project = projects.find((p) => p.name === 'DocsRAG')!;

  protected readonly repo = this.project.links.find((l) => l.label === 'GitHub')!.href;
  protected readonly stack = this.project.stack;
  protected readonly pipeline = docsragPipeline;
  protected readonly decisions = docsragDecisions;
  protected readonly roadmap = docsragRoadmap;
}
