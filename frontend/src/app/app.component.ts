import { Component, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Store } from '@ngrx/store';
import { UserActions } from './state/user/actions';
import { UserFeature } from './state/user/user-feature';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-nav-bar />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [RouterOutlet, NavBarComponent],
})
export class AppComponent {
  constructor(store: Store, router: Router) {
    store.dispatch(UserActions.getTheUser());
    // const userLoaded = store.selectSignal(UserFeature.selectUserLoaded);
    // effect(() => {
    //   if (userLoaded() === true) {
    //     router.navigateByUrl('/dashboard');
    //   }
    // });
  }
}
