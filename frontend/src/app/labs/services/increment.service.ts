import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncrementService {
  constructor(private readonly http: HttpClient) {}

  private increment = 1;

  getIncrement(): number {
    return this.increment;
  }

  updateIncrement(newIncrement: number): number {
    this.increment = newIncrement;
    return this.increment;
  }
}
