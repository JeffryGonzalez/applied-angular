import { CanActivateFn, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserFeature } from './state/user/user-feature';
import { UserDataService } from './state/services/user-data.service';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import('./students/signals/signals.component').then(
            (c) => c.SignalsComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [userIsLoadedGuard()],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((r) => r.DASHBOARD_ROUTES),
  },
];

function userIsLoadedGuard(): CanActivateFn {
  // don't use inject here. doesn't work. trust me.

  return () => {
    const store = inject(Store);
    const userLoaded = store.selectSignal(UserFeature.selectUserLoaded);
    return userLoaded();
  };
}

function userDataLoadedGuard(): CanActivateFn {
  return () => false;
}
