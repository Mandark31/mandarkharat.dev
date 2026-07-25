import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoPlaceholder } from '../../components/demo-placeholder/demo-placeholder';
import {
  profile,
  socials,
  proofStats,
  projects,
  experience,
  education,
} from '../../core/content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DemoPlaceholder],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly profile = profile;
  protected readonly socials = socials;
  protected readonly proofStats = proofStats;
  protected readonly experience = experience;
  protected readonly education = education;

  protected readonly featured = projects.find((p) => p.featured)!;
  protected readonly otherProjects = projects.filter((p) => !p.featured);
}
