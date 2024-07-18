import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, Subscription } from 'rxjs';

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
        <div>
          <form [formGroup]="form">
            <input
              type="range"
              min="1"
              max="5"
              value="1"
              class="range"
              step="1"
              formControlName="increment"
              class="range range-sm" />
            <div class="flex w-full justify-between px-2 text-xs">
              <span>1</span>
              <span>3</span>
              <span>5</span>
            </div>
          </form>
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
export class CounterComponent implements OnInit, OnDestroy {
  upperLimit = 15;
  lowerLimit = 0;
  count = signal(0);
  fizzBuzz = signal('');
  incrementValue = signal(1);

  form = new FormGroup({
    increment: new FormControl<number>(this.incrementValue()),
  });

  constructor() {
    effect(
      () => {
        this.updateFizzBuzz(this.count());
      },
      { allowSignalWrites: true } // How bad of an idea is this?
    );
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

  #subscriptions: Subscription[] = [];
  ngOnInit(): void {
    console.log('oninit');
    const sub = this.form.controls.increment.valueChanges
      .pipe(
        // debounceTime(500),
        map(
          //   val => console.log(val)
          val => this.incrementValue.set(val!)
          //   this.#store.dispatch(
          //     SoftwareListActions.listFilteredBy({ payload: val || '' })
          //  )
        )
      )
      .subscribe();

    this.#subscriptions.push(sub);
  }
  ngOnDestroy(): void {
    this.#subscriptions.forEach(s => s.unsubscribe());
  }
}
