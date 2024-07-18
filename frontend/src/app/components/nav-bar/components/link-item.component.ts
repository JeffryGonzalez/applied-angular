import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../models';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    @if (userLoaded() || link().label != 'Dashboard') {
      <li>
        <a [routerLink]="link().link" [routerLinkActive]="'btn'">{{
          link().label
        }}</a>
      </li>
    }
  `,
  styles: ``,
})
export class LinkItemComponent {
  store = inject(Store);
  link = input.required<NavItem>();
  userLoaded = this.store.selectSignal(UserFeature.selectUserLoaded);
}
