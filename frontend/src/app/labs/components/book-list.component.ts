import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BookSummary } from '../models/bookSum';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1>THIS IS THE BOOK COMPONENT!</h1>
    <div>
      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <th>year</th>
            </tr>
          </thead>
          <tbody>
            @for (book of books(); track book.id) {
              <tr>
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.year }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div>
      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th>Century</th>
              <th>Number of Books</th>
            </tr>
          </thead>
          <tbody>
            @for (sum of bookSum; track sum) {
              <tr>
                <td>{{ sum.century }}</td>
                <td>{{ sum.totalNumOfBooks }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div> -->
  `,
  styles: ``,
})
export class BookListComponent {
  bookSum: BookSummary[] = [];

  #client = inject(HttpClient);
  books = toSignal(
    this.#client
      .get<{
        data: Book[];
      }>('/api/books')
      .pipe(map(r => r.data))
  );

  //   getCentury(book: {
  //     id: string;
  //     title: string;
  //     author: string;
  //     year: number;
  //   }) {
  //     bookSum.
  //   }

  //   constructor() {
  //     this.books()?.forEach(x => {
  //       let century = x.year / 100 + '00s';
  //       if (!this.bookSum.filter(x => x.century === century)) {
  //         x.
  //       }
  //     });
  //   }
}
