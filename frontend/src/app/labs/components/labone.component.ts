import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { bookList } from '../models/books';
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
export class LabOneComponent {
  client = inject(HttpClient);

  books = toSignal(
    this.client
      .get<{
        data: bookList;
      }>('/api/books')
      .pipe(map(res => res.data))
  );
}
