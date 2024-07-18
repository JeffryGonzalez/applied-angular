import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
@Component({
  selector: 'app-labtwo',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h2>Lab 1 for Applied Angular</h2>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabOneComponent {}
