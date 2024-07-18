import { Component, effect, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IncrementService } from '../services/increment.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div
      class="card bg-base-100 w-96 shadow-xl card-bordered border-gray-400 border-b-4">
      <div class="card-body">
        <h2 class="card-title">Counter</h2>
        <br />
        <div>
          <p>Lower Limit: {{ lowerLimit }}</p>
          <p>Upper Limit: {{ upperLimit }}</p>
          <p>Increment: {{ incrementValue() }}</p>
        </div>
        <br />
        <div class="divider"></div>
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
            <p style="vertical-align: middle; height: 32px; line-height: 32px;">
              {{ fizzBuzz() }}
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
export class CounterComponent implements OnInit {
  upperLimit = 15;
  lowerLimit = 0;
  count = signal(0);
  fizzBuzz = signal('');
  incrementValue = signal(1);

  form = new FormGroup({
    increment: new FormControl<number>(this.incrementValue()),
  });

  constructor(private service: IncrementService) {
    effect(
      () => {
        this.updateFizzBuzz(this.count());
      },
      { allowSignalWrites: true } // How bad of an idea is this?
    );
  }

  ngOnInit(): void {
    // setInterval(this.updateIncrement, 1000);
    setInterval(() => {
      this.refresh(this.service);
    }, 1000);
  }

  refresh(incrementService: IncrementService) {
    // console.log(incrementService);
    // const newValue = this.service.getIncrement();
    this.incrementValue.set(incrementService.getIncrement());
  }

  add() {
    let newValue = this.count() + this.incrementValue();

    if (newValue > this.upperLimit) {
      newValue = this.upperLimit;
    }

    this.count.set(newValue);
  }

  subtract() {
    let newValue = this.count() - this.incrementValue();

    if (newValue < this.lowerLimit) {
      newValue = this.lowerLimit;
    }

    this.count.set(newValue);
  }

  greaterThanLowerLimit(): boolean {
    return !(this.count() >= this.lowerLimit);
  }

  lessThanUpperLimit(): boolean {
    return !(this.count() <= this.upperLimit);
  }

  updateFizzBuzz(count: number) {
    if (count == 0) {
      this.fizzBuzz.set('');
      return;
    }

    const remainder_3 = count % 3;
    const remainder_5 = count % 5;

    if (remainder_3 == 0 && remainder_5 == 0) {
      this.fizzBuzz.set('FizzBuzz');
      return;
    }

    if (remainder_5 == 0) {
      this.fizzBuzz.set('Buzz');
      return;
    }

    if (remainder_3 == 0) {
      this.fizzBuzz.set('Fizz');
      return;
    }

    this.fizzBuzz.set('');
  }
}
