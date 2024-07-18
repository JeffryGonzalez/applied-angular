import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, RouterLink],
  template: `
    <div>
      <h2>Labs for Applied Angular</h2>
      <ul>
        <li><a routerLink="counter">Counter</a></li>
      </ul>
    </div>

    <div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class LabsComponent {}
