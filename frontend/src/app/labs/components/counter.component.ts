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
    </div>`,
  styles: ``,
})
export class CounterComponents {
  disabled = false;
  // constructor() {
  //   const negativeCount = effect(() => {
  //     if (this.num() <= 0) {
  //       console.log('No more negativity!', this.num());
  //     }
  //   });
  // }
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
      console.log('fizz');
    }
    if (this.num() % 5 === 0) {
      console.log('buzz');
    }
  }
}
