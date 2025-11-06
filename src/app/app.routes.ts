import { Routes } from '@angular/router';
import { DOMAINS } from '@lastlink/core';

const redirectToEmpty = `/${DOMAINS.users}/list`;
const redirectToErrorPageNotFound = `/${DOMAINS.errors}/details/page-not-found`;

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: redirectToEmpty,
  },
  {
    path: DOMAINS.errors,
    loadChildren: () =>
      import('@lastlink/features').then((m) => m.ErrorsModule),
  },
  {
    path: DOMAINS.users,
    loadChildren: () => import('@lastlink/features').then((m) => m.UsersModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: redirectToErrorPageNotFound,
  },
];
