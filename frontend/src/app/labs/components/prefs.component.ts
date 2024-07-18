import { Component, inject } from '@angular/core';
import { CounterPreferencesService } from '../services/counter-prefs.service';

@Component({
  selector: 'prefs-component',
  standalone: true,
  imports: [],
  template: `
    <br />
    <p>Welcome to the Counter Preferences</p>
    <br />
    <div>
      <p>Select the number you want to count by</p>
      <button
        style="margin-right:10px"
        (click)="setCountBy(1)"
        class="btn btn-primary">
        1
      </button>
      <button
        style="margin-right:10px"
        (click)="setCountBy(3)"
        class="btn btn-primary">
        3
      </button>
      <button
        style="margin-right:10px"
        (click)="setCountBy(5)"
        class="btn btn-primary">
        5
      </button>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  constructor() {}

  counterPrefsService = inject(CounterPreferencesService);

  setCountBy(increment: number) {
    this.counterPrefsService.setCountBy(increment);
  }
}
