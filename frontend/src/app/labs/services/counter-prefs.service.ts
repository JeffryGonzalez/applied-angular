import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterPreferencesService {
  constructor() {}

  countBy = 1;

  getCountBy() {
    return this.countBy;
  }

  setCountBy(increment: number) {
    this.countBy = increment;
    console.log('count by: ' + this.countBy);
  }
}
