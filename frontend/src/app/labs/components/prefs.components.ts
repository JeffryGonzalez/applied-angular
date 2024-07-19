import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { CounterPreferencesService } from '../services/counter-preferences.service';
import { CounterPreferences } from '../models';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div
      class="card bg-base-100 w-96 shadow-xl card-bordered border-gray-400 border-b-4">
      <div class="card-body">
        <h2 class="card-title">Set Counter Increment</h2>
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
      </div>
    </div>
  `,
  styles: ``,
})
export class PrefsComponents implements OnInit, OnDestroy {
  incrementValue = signal(1);
  counterPrefs: CounterPreferences = {
    increment: 1,
    upperLimit: 15,
    lowerLimit: 0,
  };

  constructor(private prefsService: CounterPreferencesService) {
    this.counterPrefs = this.prefsService.getCounterPerfs();

    // Why was a signal not working here?
    this.form.controls.increment.setValue(this.counterPrefs.increment);
    // this.incrementValue.set(this.counterPrefs.increment);
  }

  form = new FormGroup({
    increment: new FormControl<number>(this.incrementValue()),
  });

  #subscriptions: Subscription[] = [];
  ngOnInit(): void {
    const sub = this.form.controls.increment.valueChanges
      .pipe(
        map(val => {
          this.counterPrefs.increment = val!;
          this.prefsService.updateCounterPerfs(this.counterPrefs);
        })
      )
      .subscribe();

    this.#subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach(s => s.unsubscribe());
  }
}
