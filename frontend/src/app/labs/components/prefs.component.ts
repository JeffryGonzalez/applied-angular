import { Component, signal } from '@angular/core';
import { UserPreferencesService } from '../state/services/user-preferences.service';
import { Preferences } from '../state/models';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [],
  template: `<div class="flex flex-col items-center mt-5">
    <p>How shall we count?</p>
    <div class="mt-2">
      <button class="btn btn-primary mr-2" (click)="selectCount(1)">
        by 1
      </button>
      <button class="btn btn-secondary mr-2" (click)="selectCount(3)">
        by 3
      </button>
      <button class="btn btn-primary" (click)="selectCount(5)">by 5</button>
    </div>
    <h1 class="mt-2">We will count by {{ countBy }}</h1>
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  countBy = 1;
  constructor(private service: UserPreferencesService) {}

  selectCount(count: number) {
    this.service.setPrefs(count);
    this.countBy = count;
  }
}
