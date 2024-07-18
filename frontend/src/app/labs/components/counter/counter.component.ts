import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';
@Component({
  selector: 'app-counter-lab',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
  <div class="card border bg-base-100 w-96 shadow-xl ">
    <div class="card-body items-center">
      <h2 class="card-title">Counter Component Engauged</h2>
      <span class="text-6xl">{{ num() }}</span>
      <div class="h-5">
        @if(num() !== 0 && num() % 3 === 0 && num() % 5 === 0) {
          <div class="mx-1 badge badge-primary badge-outline">FizzBuzz</div>
        }
      </div>
      <div class="h-5">
        @if(num() !== 0 && num() % 3 === 0) {
          <div class="mx-1 badge badge-accent badge-outline">Fizz</div>
        }
        @if(num() !== 0 && num() % 5 === 0) {
          <div class="mx-1 badge badge-secondary badge-outline">Buzz</div>
        }
      </div>
      <span class="text-center">Click the + or - Buttons to increment or decrament the number above.</span>
    <div class="card-actions">
    <button [disabled]="num() - variable().countVariable < 0" (click)="decrement()" class="mx-3 btn btn-primary">-</button>
    <button (click)="increment()" class="mx-3 btn btn-primary">+</button>
    </div>
  </div>
</div>
  `,
  styles: ``,
})
export class CounterComponent {
  num = signal(0);
  store = inject(Store);
  variable = this.store.selectSignal(UserFeature.selectPrefs);


  increment() {
    this.num.set(this.num() + this.variable().countVariable);
  }
  decrement() {
    this.num.set(this.num() - this.variable().countVariable);
  }

  doIt() {}

  ngOnInit(): void {}
}
