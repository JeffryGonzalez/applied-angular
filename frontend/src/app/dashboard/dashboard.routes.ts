import { CanActivateFn, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MockupComponent } from './mockup/mockup.component';
import { provideEffects } from '@ngrx/effects';
import { DashboardNavigationEffect } from './state/effects/navigation.effect';
import { inject } from '@angular/core';
import { provideState, Store } from '@ngrx/store';
import { UserFeature } from '../state/user/user-feature';
import { UserSoftwareFeature } from './state/reducers/user-software.feature';
import { EntitleSoftwareEffect } from './state/effects/software.effect';
import { CreateIssuesComponent } from './create-issues/create-issues.component';
import { BeginComponent } from './create-issues/steps/begin.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    canActivateChild: [userIsLoadedGuard()],
    providers: [
      provideState(UserSoftwareFeature),
      provideEffects([DashboardNavigationEffect, EntitleSoftwareEffect]),
    ], // { navigateWhatever: createEffect() }

    component: DashboardComponent,
    children: [
      {
        path: 'mock',
        component: MockupComponent,
      },

      {
        path: 'create-issue',
        component: CreateIssuesComponent,
        children: [
          {
            path: 'begin',
            component: BeginComponent,
          },
          // {
          //   path: '',
          //   redirectTo: 'begin',
          // },
        ],
      },
    ],
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
