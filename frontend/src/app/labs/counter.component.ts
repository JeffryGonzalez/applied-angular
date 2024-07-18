import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <p>THIS IS THE COUNTER COMPONENT!</p>
    <p>Counter {{ counter() }}</p>
    <div>
      <button
        (click)="decrement()"
        class="btn btn-primary"
        [disabled]="counter() <= 0">
        -
      </button>
      <button (click)="increment()" class="btn btn-primary">+</button>
      <p>{{ fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  counter = signal(0);

  decrement() {
    this.counter.set(this.counter() - 1);
  }
  increment() {
    this.counter.set(this.counter() + 1);
  }

  fizzBuzz() {
    let num = this.counter();
    return num % 3 === 0 && num % 5 === 0
      ? 'FizzBuzz'
      : num % 3 === 0
        ? 'Fizz'
        : num % 5 === 0
          ? 'Buzz'
          : '';
  }
}
