import { Component } from '@angular/core';
import { profile, socials } from '../../core/content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly profile = profile;
  protected readonly socials = socials;
  protected readonly year = new Date().getFullYear();
}
