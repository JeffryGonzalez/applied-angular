import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {
    effect(() => {
      window.localStorage.setItem(
        'counterIncrement',
        this.counterIncrement().toString()
      );
      window.localStorage.setItem('counter', this.counter().toString());
    });
  }

  // increment/decrement
  cachedIncrement = parseInt(localStorage.getItem('counterIncrement') ?? '1');
  counterIncrement = signal(this.cachedIncrement);
  increment() {
    this.counter.set(this.counter() + this.counterIncrement());
  }
  decrement() {
    this.counter.set(this.counter() - this.counterIncrement());
  }

  // counter
  cachedCounter = parseInt(localStorage.getItem('counter') ?? '0');
  counter = signal(this.cachedCounter);
  updateCounter(number: number) {
    this.counter.set(number);
  }

  //fizzbuzz
  isCounterGreaterThanZero = computed(() => {
    return this.counter() > 0;
  });

  fizz = computed(() => {
    return (
      this.counter() % 3 === 0 && this.counter() % 5 != 0 && this.counter() > 0
    );
  });

  buzz = computed(() => {
    return (
      this.counter() % 5 === 0 && this.counter() % 3 != 0 && this.counter() > 0
    );
  });

  fizzbuzz = computed(() => {
    return (
      this.counter() % 3 === 0 && this.counter() % 5 === 0 && this.counter() > 0
    );
  });
}
