import { Routes } from '@angular/router';
import { Home } from './views/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'users',
    loadComponent: () =>
      import('./views/users/users-list').then((m) => m.UsersList),
  },
];
