import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiStateFeature } from '../../../state/ui-state';
import { UserFeature } from '../../../state/user/user-feature';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  providers: [],

  template: `
    <div class="btn">
      @if (userState()) {
        {{ user() }}
      } @else {
        <span class="loading loading-infinity loading-md"></span>
      }
    </div>
  `,
  styles: ``,
})
export class UserMenuComponent {
  store = inject(Store);

  user = this.store.selectSignal(UserFeature.selectSub);
  userState = this.store.selectSignal(UiStateFeature.selectUser);
  // userLoaded = this.store.selectSignal(UserFeature.selectUserLoaded);
}
