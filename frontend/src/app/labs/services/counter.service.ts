import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  #countByMultiple = 1;

  constructor(private http: HttpClient) {}

  getCountByMultiple() {
    return this.#countByMultiple;
  }

  setCountByMultiple(val: number) {
    this.#countByMultiple = val;
  }

  getCounter() {
    return this.http.get('/api/counter');
  }
}
