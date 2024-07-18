import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { UserFeature } from './state/user/user-feature';
import { provideEffects } from '@ngrx/effects';
import { loadUser } from './state/user/get-user.effect';
import { UiStateFeature } from './state/ui-state';
import { navigationInterceptor } from './state/ui-state/interceptor';
// import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([navigationInterceptor])),
    provideStore(),
    provideState(UserFeature),
    provideState(UiStateFeature),
    provideStoreDevtools(), // maybe do this only in isDev
    provideEffects({ loadUser: loadUser }),
    // provideServiceWorker('ngsw-worker.js', {
    //         enabled: !isDevMode(),
    //         registrationStrategy: 'registerWhenStable:30000'
    //       }),
  ],
};
