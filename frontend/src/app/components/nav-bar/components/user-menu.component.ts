import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';
import { UserDataService } from '../../../state/services/user-data.service';
import { UiStateFeature } from '../../../state/ui-state';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  providers: [],

  template: `
    <div class="btn">
      @if(userState().isPresent ){
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
  userLoaded = this.store.selectSignal(UserFeature.selectUserLoaded);
}
