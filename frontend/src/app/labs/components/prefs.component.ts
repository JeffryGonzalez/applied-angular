import {
  Component,
  computed,
  ElementRef,
  inject,
  Signal,
  signal,
  ViewChild,
} from '@angular/core';
import { CounterService } from '../services/counter.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <select
        class="select select-info w-full max-w-xs"
        formControlName="countByMultipleControl">
        @for (o of countByMultipleOptions; track $index) {
          @if (countByMultiple === o) {
            <option selected [value]="o">{{ o }}</option>
          } @else {
            <option [value]="o">{{ o }}</option>
          }
        }
      </select>
    </form>
  `,
  styles: ``,
})
export class PrefsComponent {
  counterService = inject(CounterService);

  countByMultiple = this.counterService.getCountByMultiple();
  countByMultipleOptions = [1, 3, 5];

  form = new FormGroup({
    countByMultipleControl: new FormControl<string>('1'),
  });

  ngAfterContentInit() {
    this.form.controls.countByMultipleControl.valueChanges.subscribe(
      (val: string | null) => {
        if (val) {
          this.counterService.setCountByMultiple(parseInt(val, 10));
        }
      }
    );
  }
}
