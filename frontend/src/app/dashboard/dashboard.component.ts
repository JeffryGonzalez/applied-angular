import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h1>Welcome to the Dashboard</h1>
    <a routerLink="mock">See the mock</a>
    <router-outlet />
  `,

  styles: ``,
})
export class DashboardComponent {}
