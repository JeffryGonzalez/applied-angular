import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeginComponent } from './create-issues/steps/begin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BeginComponent],
  template: `
    <h1>Welcome to the Dashboard</h1>
    <a routerLink="mock">See the mock</a>
    <router-outlet />

    <app-create-issue-begin />
  `,

  styles: ``,
})
export class DashboardComponent {}
