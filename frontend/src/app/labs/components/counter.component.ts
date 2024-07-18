import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: ` <h1>Let's Count</h1>
    <p>Num {{ num() }}</p>
    <div>
      <button
        (click)="decrement()"
        [disabled]="disabled"
        class="btn btn-primary">
        -
      </button>
      <button (click)="increment()" class="btn btn-primary">+</button>
      @if (fizz) {
        <p>fizz!</p>
      }
      @if (buzz) {
        <p>buzz!!</p>
      }
      @if (fizzBuzz) {
        <p>fizz buzz!!!</p>
      }
    </div>`,
  styles: ``,
})
export class CounterComponents {
  disabled = false;
  fizz = false;
  buzz = false;
  fizzBuzz = false;

  num = signal(0);

  increment() {
    this.num.set(this.num() + 1);
    this.checkForDisabled();
    this.doFizzbuzzMath();
  }

  decrement() {
    this.num.set(this.num() - 1);
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
}
