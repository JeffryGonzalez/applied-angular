import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [],
  template: `
    <div class="divider divider-primary"></div>
    <h3>Counter Lab - Preferences</h3>
    <h4>Count By: {{ counterService.countByValue() }}</h4>
    <button (click)="counterService.setCountBy(1)" class="btn btn-primary">
      1
    </button>
    <button (click)="counterService.setCountBy(3)" class="btn btn-secondary">
      3
    </button>
    <button (click)="counterService.setCountBy(5)" class="btn btn-accent">
      5
    </button>
  `,
  styles: ``,
})
export class PrefsComponent {
  constructor(public counterService: CounterService) {}
}
