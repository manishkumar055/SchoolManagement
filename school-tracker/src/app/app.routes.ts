import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'organization/register', pathMatch: 'full' },
  { path: 'organization', loadChildren: () => import('./pages/organization/organization-module').then(m => m.OrganizationModule) },
  { path: 'dashboard/student', loadComponent: () => import('./pages/student-dashboard/student-dashboard').then(m => m.StudentDashboard)},
  {
    path: 'dashboard/admin',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard')
        .then(m => m.AdminDashboard)
  },

  {
    path: 'admin/users/:type',
    loadComponent: () =>
      import('./pages/user-lists/user-lists')
        .then(m => m.UserLists)
  },
  {
    path: 'admin/users/:type/:id',
    loadComponent: () =>
      import('./pages/user-details/user-details')
        .then(m => m.UserDetails)
  }



];
