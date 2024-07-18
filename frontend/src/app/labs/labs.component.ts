import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { CounterComponent } from './components/counter.component';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h2>Labs for Applied Angular</h2>
    <div>
      <a applink href="labs/counter">Counter</a>
    </div>
    <div>
      <a applink href="labs/prefs">Prefs</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {
 
}
