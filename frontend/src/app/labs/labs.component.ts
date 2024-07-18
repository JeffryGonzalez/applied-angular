import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li><a routerLink="./counter">Counter</a></li>
      <li><a routerLink="./prefs">Prefs</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
