import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncreasorService {
  increasedBy = 1;

  setIncreasor(by: number) {
    this.increasedBy = by;
  }

  getIncreasor() {
    return this.increasedBy;
  }
}
