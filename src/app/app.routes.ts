import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Mandar Kharat — Fullstack & AI Engineer',
  },
  {
    path: 'docsrag',
    loadComponent: () => import('./pages/docsrag/docsrag').then((m) => m.Docsrag),
    title: 'DocsRAG — Case Study · Mandar Kharat',
  },
  { path: '**', redirectTo: '' },
];
