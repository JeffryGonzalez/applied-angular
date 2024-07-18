import { Component, effect, signal } from '@angular/core';
import { UserPreferencesService } from '../state/services/user-preferences.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: ` <div class="flex flex-col items-center mt-5">
    <h1>Let's Count</h1>
    <p>{{ num() }}, ah ah ah</p>
    <div class="mt-2">
      <button
        (click)="decrement()"
        [disabled]="disabled"
        class="btn btn-primary mr-2">
        -
      </button>
      <button (click)="increment()" class="btn btn-primary">+</button>
      @if (fizz) {
        <p class="color-red font-mono font-bold mt-2 text-center">fizz!</p>
      }
      @if (buzz) {
        <p class="font-mono font-bold mt-2 text-center">buzz!</p>
      }
      @if (fizzBuzz) {
        <p class="font-mono font-extrabold mt-2 text-center uppercase">
          fizz buzz!
        </p>
      }
    </div>
  </div>`,
  styles: ``,
})
export class CounterComponents {
  disabled = false;
  fizz = false;
  buzz = false;
  fizzBuzz = false;
  count = 0;
  num = signal(0);

  constructor(private service: UserPreferencesService) {}

  ngOnInit() {
    this.service.getPrefs();
    this.count = this.service.getPrefs().valueOf();
  }

  increment() {
    this.num.set(this.num() + this.count);
    this.checkForDisabled();
    this.doFizzbuzzMath();
  }

  decrement() {
    this.num.set(this.num() - this.count);

    this.checkForDisabled();
    this.doFizzbuzzMath();
  }

  checkForDisabled() {
    if (this.num() <= 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  doFizzbuzzMath() {
    if (this.num() % 3 === 0) {
      this.fizz = true;
    } else {
      this.fizz = false;
    }
    if (this.num() % 5 === 0) {
      this.buzz = true;
    } else {
      this.buzz = false;
    }
    if (this.num() % 3 === 0 && this.num() % 5 === 0) {
      this.fizzBuzz = true;
      this.fizz = false;
      this.buzz = false;
    } else {
      this.fizzBuzz = false;
    }
  }

  getCount() {
    this.service.getPrefs();
  }
}
