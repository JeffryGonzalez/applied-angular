import { Component, inject } from '@angular/core';
import { IncreasorService } from '../../services/increasor.service';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [],
  template: `
    <h1>PREFERENCES</h1>
    <p>Choose how much to increase the counter by:</p>
    <button class="btn btn-primary" (click)="increase(1)">1</button>
    <button class="btn btn-primary" (click)="increase(3)">3</button>
    <button class="btn btn-primary" (click)="increase(5)">5</button>
  `,
  styles: ``,
})
export class PrefsComponent {
  increasor = inject(IncreasorService);

  increase(by: number) {
    this.increasor.setIncreasor(by);
  }
}
