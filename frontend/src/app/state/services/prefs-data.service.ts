import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrefsDataService {
  private counter: number = 1;

  constructor() {}

  public get Counter() {
    return this.counter;
  }
  public set Counter(c: number) {
    this.counter = c;
    window.localStorage.setItem('counter', c.toString());
  }
}
