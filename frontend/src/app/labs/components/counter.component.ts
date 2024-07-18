import { Component, inject, Injectable, input, signal } from '@angular/core';
import { MyCounter, countBy, countByValues, counterValue } from './counter';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary" [disabled]="counter() == 0" (click)="down()">-</button>
      <button class="btn btn-primary"   (click)="up()">+</button>
      <div>
        {{ counter() }}
      </div>
      @if (counter() != 0 && counter() % 3 == 0) {
        Fuzz
      }
      @if (counter() != 0 && counter() % 5 == 0) {
        Buzz
      }
    </div>
  `,
  styles: ``,
})
export class CounterComponent {  
  myCount = inject(MyCounter);
  counter = counterValue

  up(): void {
    this.myCount.counterUp();
  }
  down(): void {
    this.myCount.counterDown();
  }
}
