import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { CounterComponent } from './components/counter.component';
import { PrefsComponents } from './components/prefs.components';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, CounterComponent, PrefsComponents],
  template: `
    <h2>Labs for Applied Angular</h2>
    <div class="divider"></div>
    <app-prefs />
    <div class="divider"></div>
    <app-counter />
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
