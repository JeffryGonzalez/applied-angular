import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [],
  template: `
    @if (counter() == 0) {
      <button class="btn" disabled="disabled">-</button>
    } @else {
      <button class="btn btn-active btn-primary" (click)="decrement()">
        -
      </button>
    }
    <button class="btn btn-active btn-primary" (click)="increment()">+</button>

    <p>The current count is {{ counter() }}</p>
    <p>{{ fizz() }} {{ buzz() }}</p>
  `,
  styles: ``,
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }

  fizz() {
    if (this.counter() % 3 == 0 && this.counter() !== 0) {
      return 'fizz';
    } else {
      return '';
    }
  }

  buzz() {
    if (this.counter() % 5 == 0 && this.counter() !== 0) {
      return 'buzz';
    } else {
      return '';
    }
  }
}
