import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component')
    .then(m => m.LoginComponent) },
  { path: 'employee', loadComponent: () => import('./employee/employee.component')
    .then(m => m.EmployeeComponent) }
];
