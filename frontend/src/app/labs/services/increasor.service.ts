import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncreasorService {
  increasedBy = 1;

  setIncreasor(num: number) {
    this.increasedBy = num;
  }

  getIncreasor() {
    return this.increasedBy;
  }
}
