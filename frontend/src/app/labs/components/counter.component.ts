import { Component, computed, effect, signal } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: ` <div>
      <p>{{ counterService.counter() }}</p>
    </div>
    <div>
      <button (click)="counterService.increment()" class="btn btn-primary">
        +
      </button>
      @if (counterService.isCounterGreaterThanZero()) {
        <button (click)="counterService.decrement()" class="btn btn-primary">
          -
        </button>
      }
    </div>
    <div>
      @if (counterService.fizz()) {
        <p>Fizz</p>
      }
      @if (counterService.buzz()) {
        <p>Buzz</p>
      }
      @if (counterService.fizzbuzz()) {
        <p>FizzBuzz</p>
      }
    </div>`,
  styles: ``,
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}
}
