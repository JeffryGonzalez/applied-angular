import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [AsyncPipe],
  providers: [],

  template: ` <div class="btn">{{ (user$ | async)?.sub }}</div> `,
  styles: ``,
})
export class UserMenuComponent {
  client = inject(HttpClient);

  user$ = this.client.get<{ sub: string }>('/api/user');
}
