import { Component, inject } from '@angular/core';
import { IncreasorService } from '../../services/increasor.service';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [],
  template: `
    <h1>PREFERENCES</h1>
    Increase Counter By:
    <div class="dropdown dropdown-bottom">
      <div tabindex="0" role="button" class="btn m-1">{{ increasedBy }}</div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><a (click)="increase(1)">1</a></li>
        <li><a (click)="increase(3)">3</a></li>
        <li><a (click)="increase(5)">5</a></li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  increasor = inject(IncreasorService);
  increasedBy = this.increasor.getIncreasor();

  increase(num: number) {
    this.increasedBy = num;
    this.increasor.setIncreasor(num);
  }
}
