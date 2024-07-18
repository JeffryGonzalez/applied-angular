import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { LinkDirective } from '../directives/link.directive';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, RouterLink, LinkDirective],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li><a appLink intent="secondary" routerLink="counter">Counter</a></li>
      <li><a appLink intent="secondary" routerLink="prefs">Prefs</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
