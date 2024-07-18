import { Component, effect, signal } from '@angular/core';
import { PrefsDataService } from '../../state/services/prefs-data.service';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [],
  template: `
    <div>
      <ul class="p-2">
        <li>
          <input
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            checked="checked"
            (click)="setPrefs(1)" />
          1
        </li>
        <li>
          <input
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            (click)="setPrefs(3)" />
          3
        </li>
        <li>
          <input
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            (click)="setPrefs(5)" />
          5
        </li>
      </ul>
    </div>
    <p>Selected Prefs: {{ counterPrefs() }}</p>
  `,
  styles: ``,
})
export class PrefsComponent {
  counterPrefs = signal(1);

  constructor(private prefsDataService: PrefsDataService) {
    effect(() => {
      const cachedCounter = window.localStorage.getItem('counter') ?? '1';
      this.setPrefs(parseInt(cachedCounter));
    });
  }

  setPrefs(counter: number) {
    this.counterPrefs.set(counter);
    this.prefsDataService.Counter = counter;
  }
}
