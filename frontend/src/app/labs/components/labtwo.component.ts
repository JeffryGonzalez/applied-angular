import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-labtwo',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h2>Lab 2 for Applied Angular</h2>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabTwoComponent {}
