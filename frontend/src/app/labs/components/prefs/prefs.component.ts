import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';

@Component({
  selector: 'app-prefs-lab',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
  <div class="card border bg-base-100 w-96 shadow-xl ">
    <div class="card-body">
      <h2 class="card-title">User Preferences</h2>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Count Increment Variable</span>
        </div>
        <select class="select select-info w-full max-w-xs" (change)="onChange($event)" >
          <option value="1" >1</option>
          <option value="3" >3</option>
          <option value="5" >5</option>
        </select>
      </label>
  </div>
</div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(Store);
  variable = this.store.selectSignal(UserFeature.selectPrefs);



  onChange(e: any) {
    console.log('variable: ', this.variable());
    const value = parseInt(e.target.value);
    if(value !==  0) {
      console.log('value: ', value);
      //this.store.dispatch(UserFeature.updatePrefs({ countVariable: value });
    }
  }
}
