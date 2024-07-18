import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { CounterComponent } from './components/counter.component';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent],
  template: `
    <div>
      <h2>Labs for Applied Angular</h2>
      <ul>
        <li><a routerLink="counter">A Fancy Counter</a></li>
      </ul>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
