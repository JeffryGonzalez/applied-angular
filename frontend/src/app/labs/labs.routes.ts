import { Routes } from '@angular/router';
import { LabsComponent } from './labs.component';
import { LabTwoComponent } from './components/labtwo.component';
import { LabOneComponent } from './components/labone.component';

export const LAB_ROUTES: Routes = [
  {
    path: '',

    component: LabsComponent,
    children: [
      {
        path: 'labone',
        component: LabOneComponent,
      },

      {
        path: 'labtwo',
        component: LabTwoComponent,
      },
    ],
  },
];
