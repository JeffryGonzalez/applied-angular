import { Component, inject, signal } from '@angular/core';
import { IncreasorService } from './services/increasor.service';

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
        class="btn btn-secondary"
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
  increaseBy = inject(IncreasorService);

  decrement() {
    this.counter.set(this.counter() - this.increaseBy.getIncreasor());
  }
  increment() {
    this.counter.set(this.counter() + this.increaseBy.getIncreasor());
  }

  fizzBuzz() {
    let num = this.counter();
    return num === 0
      ? ''
      : num % 3 === 0 && num % 5 === 0
        ? 'FizzBuzz'
        : num % 3 === 0
          ? 'Fizz'
          : num % 5 === 0
            ? 'Buzz'
            : '';
  }
}
