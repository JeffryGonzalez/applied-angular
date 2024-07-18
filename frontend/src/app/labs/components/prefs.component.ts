import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  template: ` <div>
    <label id="example-radio-group-label">Pick your counter increment</label>
    <mat-radio-group
      aria-labelledby="example-radio-group-label"
      class="example-radio-group"
      [(ngModel)]="counterService.counterIncrement">
      @for (counter of counterIncrements; track counter) {
        <mat-radio-button class="example-radio-button" [value]="counter">{{
          counter
        }}</mat-radio-button>
      }
    </mat-radio-group>
    <div>
      Your current increment is: {{ counterService.counterIncrement() }}
    </div>
  </div>`,
  styles: `
    .example-radio-group {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
      align-items: flex-start;
    }

    .example-radio-button {
      margin: 5px;
    }
  `,
})
export class PrefsComponent {
  constructor(public counterService: CounterService) {}

  counterIncrements: number[] = [1, 3, 5];
}
