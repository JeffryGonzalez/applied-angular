import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { countByValues,   MyCounter } from './counter';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [ReactiveFormsModule],
  
  template: `
    <form [formGroup]="form" (ngSubmit)="filter()">
      @for (v of countByValues; track $index) {
        <td>
                          <label>
                            {{ v }}
                            <input formControlName="payload" name="payload" type="radio" class="radio" [value]="v"/>
                          </label>
                        </td>
      }
      <button type="submit">submit</button>
    </form>
  `,
  styles: ``,
})
export class PrefsComponent {
  countByValues = countByValues;
  incrementor = inject(MyCounter);
  form = new FormGroup({
    payload: new FormControl<number>(countByValues[0]),
  });
  filter() {
    this.incrementor.countByValue(this.form.controls.payload.value || countByValues[0]);
  }
}
