import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'organization', loadChildren: () => import('./pages/organization/organization-module').then(m => m.OrganizationModule) },
  { path: 'dashboard/student', loadComponent: () => import('./pages/student-dashboard/student-dashboard').then(m => m.StudentDashboard)},
  {
    path: 'dashboard/admin',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard')
        .then(m => m.AdminDashboard)
  },

  { path: '', redirectTo: 'organization/register', pathMatch: 'full' }
];
