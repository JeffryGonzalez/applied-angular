import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeginComponent } from './create-issues/steps/begin.component';
import { Store } from '@ngrx/store';
import { SoftwareListActions } from './state/actions/list.actions';
import { LinkDirective } from '../directives/link.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BeginComponent, LinkDirective],
  template: `
    <h1>Welcome to the Dashboard</h1>
    <ul>
      <li><a appLink intent="secondary" routerLink="mock">See the mock</a></li>
      <li>
        <a appLink routerLink="create-issue">Create an Issue</a>
      </li>
    </ul>

    <router-outlet />
  `,

  styles: ``,
})
export class DashboardComponent {
  constructor(store: Store) {
    store.dispatch(SoftwareListActions.loadTheEntitiledSoftware());
  }
}
