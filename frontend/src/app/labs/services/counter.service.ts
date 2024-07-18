import { Injectable, signal, computed } from '@angular/core';

type CountBy = 1 | 3 | 5;

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);
  countByValue = signal(1);

  setCountBy(value: CountBy): void {
    this.countByValue.set(value);
  }

  increment(): void {
    this.count.update(value => value + this.countByValue());
  }

  decrement(): void {
    this.count.update(value => value - this.countByValue());
  }

  fizzbuzz = computed(() => {
    if (this.count() > 0) {
      return (
        (this.count() % 3 ? '' : 'Fizz') + (this.count() % 5 ? '' : 'Buzz')
      );
    } else return '';
  });
}
