import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';
import { UserDataService } from '../../../state/services/user-data.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  providers: [],

  template: `
    <div class="btn">
      @if(userLoaded()) {
      {{ user() }}
      } @else {
      <span class="loading loading-infinity loading-md"></span>
      }
    </div>
  `,
  styles: ``,
})
export class UserMenuComponent implements OnInit {
  store = inject(Store);

  user = this.store.selectSignal(UserFeature.selectSub);
  userLoaded = this.store.selectSignal(UserFeature.selectUserLoaded);

  constructor(private userDataService: UserDataService) {
    // inject
  }
  ngOnInit(): void {
    // Not a injection context. Inject won't work here.
  }
}
