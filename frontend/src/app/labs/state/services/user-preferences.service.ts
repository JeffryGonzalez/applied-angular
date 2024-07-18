import { Injectable } from '@angular/core';
import { Preferences } from '../../state/models';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  countBy: number = 1;

  setPrefs(count: number) {
    this.countBy = count;
    return count;
  }

  getPrefs(): number {
    return this.countBy;
  }
}
