import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  template: `
    <h2>Labs for Applied Angular</h2>
    <div>
      <a class="link link-primary" routerLink="prefs">Go to Prefs</a>
    </div>
    <div>
      <a class="link link-primary" routerLink="counter">Go to Counter</a>
    </div>
    <div>
      <a class="link link-primary" routerLink="books">Book List</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
