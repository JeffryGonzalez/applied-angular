import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MockupComponent } from './mockup/mockup.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'mock',
        component: MockupComponent,
      },
    ],
  },
];
