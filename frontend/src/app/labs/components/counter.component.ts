import { Component, inject, Signal, signal } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ count() }}
      @if (fizzBuzz) {
        <span>{{ fizzBuzz }}</span>
      }
    </p>

    <button class="btn btn-info" (click)="increment()">Increment</button>
    @if (count() > 0) {
      <button class="btn btn-neutral ml-2" (click)="decrement()">
        Decrement
      </button>
    }
  `,
  styles: ``,
})
export class CounterComponent {
  counterService = inject(CounterService);
  count = signal<number>(0);
  countByMultiple: number;

  get fizzBuzz() {
    const currentVal = this.count();
    if (currentVal <= 0) {
      return '';
    } else if (currentVal % 15 === 0) {
      return 'FizzBuzz';
    } else if (currentVal % 5 === 0) {
      return 'Buzz';
    } else if (currentVal % 3 === 0) {
      return 'Fizz';
    }
    return '';
  }

  constructor() {
    this.countByMultiple = this.counterService.getCountByMultiple();
  }

  increment() {
    this.count.update(v => v + this.countByMultiple);
  }
  decrement() {
    this.count.update(v => v - this.countByMultiple);
  }
}
