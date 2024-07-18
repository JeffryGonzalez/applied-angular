import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { LinkDirective } from '../directives/link.directive';
import { CounterComponent } from './counter.component';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    RouterLink,
    LinkDirective,
    CounterComponent,
  ],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li><a appLink routerLink="counter">Counter</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
