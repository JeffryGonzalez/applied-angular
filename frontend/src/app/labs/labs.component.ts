import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { map } from 'rxjs';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent],
  template: `
    <h2>Labs for Applied Angular</h2>
    <ul>
      <li><a routerLink="counter">Counter</a></li>
      <li><a routerLink="/prefs">Preferences</a></li>
    </ul>
    <div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class LabsComponent {}
