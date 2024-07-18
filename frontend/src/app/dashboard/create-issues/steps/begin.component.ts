import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, map } from 'rxjs';
import { SoftwareListActions } from '../../state/actions/list.actions';
import { UserSoftwareFeature } from '../../state/reducers/user-software.feature';
@Component({
  selector: 'app-create-issue-begin',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ` <div>
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">We'd love to help!</h2>
        <p>What software are you having problems with?</p>
        <p>You can make multiple requests for different software.</p>
        <div>
          <div class="card-actions justify-start">
            <div class="flex">
              <div>
                <form [formGroup]="form" (ngSubmit)="filter()">
                  <label class="input input-bordered flex items-center gap-2">
                    <input
                      formControlName="payload"
                      type="text"
                      class="grow"
                      placeholder="Search"
                    />
                    <span class="badge badge-info">?</span>
                  </label>
                </form>
                <table class="table w-3/4">
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                    <tr>
                      Software
                    </tr>
                  </thead>
                  <tbody>
                    @for(item of software(); track item.id; let even = $even) {

                    <tr>
                      <td>
                        <label>
                          <input type="radio" class="radio" />
                        </label>
                      </td>
                      @if(even) {

                      <td class="hover">
                        {{ item.name }}
                      </td>
                      } @else {

                      <td>
                        {{ item.name }}
                      </td>
                      }
                    </tr>
                    } @empty {

                    <p>No software matches your search.</p>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="steps w-full pt-8">
        <li class="step step-primary">Software</li>
        <li class="step">Operating System</li>
        <li class="step">Description</li>
        <li class="step">Send it</li>
      </ul>
    </div>
  </div>`,
  styles: ``,
})
export class BeginComponent implements OnInit {
  #store = inject(Store);
  software = this.#store.selectSignal(UserSoftwareFeature.selectFilteredList);

  form = new FormGroup({
    payload: new FormControl<string>(''),
  });
  filter() {
    const what = this.form.controls.payload.value || '';
    this.#store.dispatch(SoftwareListActions.listFilteredBy({ payload: what }));
  }

  ngOnInit(): void {
    const sub = this.form.controls.payload.valueChanges
      .pipe(
        debounceTime(250),
        map((val) =>
          this.#store.dispatch(
            SoftwareListActions.listFilteredBy({ payload: val || '' })
          )
        )
      )
      .subscribe(); // TODO: UNSUBSCRIBE
  }
}
