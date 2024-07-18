import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrefsDataService } from '../../state/services/prefs-data.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>Counter {{ counter() }}</p>

    <div>
      <button
        [disabled]="counter() === 0"
        (click)="minus()"
        class="btn btn-primary">
        -
      </button>
      <button (click)="plus()" class="btn btn-primary">+</button>
      <div>
        @if (
          counter() > 0 &&
          isDivisible(counter(), 3) &&
          isDivisible(counter(), 5)
        ) {
          <span>FizzBuzz</span>
        } @else if (counter() > 0 && isDivisible(counter(), 3)) {
          <span>Fizz</span>
        } @else if (counter() > 0 && isDivisible(counter(), 5)) {
          <span>Buzz</span>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  counter = signal(0);
  constructor(private prefsDataService: PrefsDataService) {
    effect(() => {
      const cachedCounter = window.localStorage.getItem('counter') ?? '1';
      this.prefsDataService.Counter = parseInt(cachedCounter);
    });
  }

  minus() {
    this.counter.set(this.counter() - this.prefsDataService.Counter);
  }
  plus() {
    this.counter.set(this.counter() + this.prefsDataService.Counter);
  }

  isDivisible(counter: number, divisor: number) {
    return !(counter % divisor) ? true : false;
  }
}
