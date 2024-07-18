import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div
      class="card bg-base-100 w-96 shadow-xl card-bordered border-gray-400 border-b-4">
      <div class="card-body">
        <h2 class="card-title">Counter</h2>
        <br />
        <div class="row-space-between">
          <button
            (click)="subtract()"
            [disabled]="greaterThanLowerLimit()"
            class="btn btn-primary btn-sm">
            -
          </button>
          <div>
            <!-- All the hardcoding, don't judge me -->
            <p style="vertical-align: middle; height: 32px; line-height: 32px;">
              {{ count() }}
            </p>
          </div>
          <button
            (click)="add()"
            [disabled]="lessThanUpperLimit()"
            class="btn btn-primary btn-sm">
            +
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  upperLimit = 15;
  lowerLimit = 0;
  count = signal(0);

  add() {
    this.count.set(this.count() + 1);
  }

  subtract() {
    this.count.set(this.count() - 1);
  }

  greaterThanLowerLimit(): boolean {
    return this.count() == this.lowerLimit;
  }

  lessThanUpperLimit(): boolean {
    return this.count() == this.upperLimit;
  }
}
