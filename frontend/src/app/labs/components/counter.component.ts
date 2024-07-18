import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CounterPreferencesService } from '../services/counter-prefs.service';

@Component({
  selector: 'counter-component',
  standalone: true,
  imports: [],
  template: `
    <br />
    <p>Welcome to the Counter</p>

    <br />
    <div>
      <button
        [disabled]="num() == 0"
        style="margin-right:10px"
        (click)="decrement()"
        class="btn btn-primary">
        -
      </button>
      <span>{{ num() }}</span>
      <button
        style="margin-left:10px"
        (click)="increment()"
        class="btn btn-primary">
        +
      </button>
    </div>
    <p>{{ fizzBuzz() }}</p>
  `,
  styles: ``,
})
export class CounterComponent {
  constructor() {}

  counterPrefsService = inject(CounterPreferencesService);

  num = signal(0);

  fizzBuzz = signal('');

  increment() {
    this.num.set(this.num() + this.counterPrefsService.getCountBy());
    this.updateFizzBuzz();
  }

  decrement() {
    this.num.set(this.num() - this.counterPrefsService.getCountBy());
    this.updateFizzBuzz();
  }

  updateFizzBuzz() {
    if (this.num() % 3 === 0 && this.num() % 5 !== 0) {
      this.fizzBuzz.set('Fizz');
    } else if (this.num() % 3 !== 0 && this.num() % 5 === 0) {
      this.fizzBuzz.set('Buzz');
    } else if (this.num() % 3 === 0 && this.num() % 5 === 0) {
      this.fizzBuzz.set('FizzBuzz');
    } else {
      this.fizzBuzz.set('');
    }
  }

  doIt() {}

  ngOnInit(): void {}
}
