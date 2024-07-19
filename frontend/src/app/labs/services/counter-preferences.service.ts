import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CounterPreferences } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CounterPreferencesService {
  defaultReturn: CounterPreferences = {
    increment: 1,
    upperLimit: 15,
    lowerLimit: 0,
  };

  constructor() {}

  // In a perfect world I would not be lazy and implement caching here
  getCounterPerfs(): CounterPreferences {
    const perfs = window.localStorage.getItem('counterPerfs');

    if (perfs == null) {
      return this.defaultReturn;
    }

    // Missing all kinds of error checking
    return JSON.parse(perfs!) as CounterPreferences;
  }

  updateCounterPerfs(perfs: CounterPreferences) {
    window.localStorage.setItem('counterPerfs', JSON.stringify(perfs));
  }
}
