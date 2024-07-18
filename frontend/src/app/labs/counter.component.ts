import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <p>THIS IS THE COUNTER COMPONENT!</p>
    <p>Counter {{ counter() }}</p>
    <div>
      <button (click)="decrement()" class="btn btn-primary">-</button>
      <button (click)="increment()" class="btn btn-primary">+</button>
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
}
