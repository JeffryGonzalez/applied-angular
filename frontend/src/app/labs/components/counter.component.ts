import { Component, signal, computed, effect } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="divider divider-primary"></div>
    <h3>Counter Lab</h3>
    <div class="card bg-neutral text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Current Count: {{ counterService.count() }}</h2>
        <div class="card-actions justify-end">
          <button (click)="counterService.increment()" class="btn btn-primary">
            Increment
          </button>
          <button
            [disabled]="counterService.count() == 0"
            (click)="counterService.decrement()"
            class="btn btn-primary">
            Decrement
          </button>
        </div>
        <div>{{ counterService.fizzbuzz() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}
}
