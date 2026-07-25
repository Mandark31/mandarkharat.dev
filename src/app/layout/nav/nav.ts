import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../core/content';
import { ThemeService } from '../../core/theme';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly profile = profile;
  protected readonly theme = inject(ThemeService);
  protected readonly open = signal(false);

  protected readonly links = [
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  toggle() {
    this.open.update((v) => !v);
  }

  close() {
    this.open.set(false);
  }
}
