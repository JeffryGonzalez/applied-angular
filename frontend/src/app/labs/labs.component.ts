import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { LinkDirective } from '../directives/link.directive';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, RouterLink],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li>
        <a class="link link-primary" routerLink="prefs">Preferences</a>
        <a class="ml-4 link link-primary" routerLink="counter">Counter Lab</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
