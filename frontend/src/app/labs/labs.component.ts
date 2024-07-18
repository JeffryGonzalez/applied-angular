import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinkDirective } from '../directives/link.directive';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, RouterLink, LinkDirective],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li><a appLink routerLink="counter">Counter</a></li>
      <li><a appLink routerLink="prefs">Pref</a></li>
      <li><a appLink routerLink="books">Book List</a></li>
    </ul>
    <router-outlet />
  `,
  styles: ``,
})
export class LabsComponent {}
