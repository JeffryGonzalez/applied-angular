import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
 <p (click)="doIt()">Hi, {{ user().name}} </p>
 <p>He is {{ user().age}} years old</p>

  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Num {{num()}}</p>
  <p>Doubled {{doubled()}}</p>
  <div>
    <button (click)="decrement()" class="btn btn-primary">-</button>
  <button (click)="increment()" class="btn btn-primary">+</button>
</div>
  `,
  styles: ``
})
export class SignalsComponent implements OnInit {

  constructor() {
    effect(() => {
      if(this.num() > 50) {
        console.log("They got to 50!", this.num());
      }
    })
  }
  num = signal(10);

  doubled = computed(() => this.num() * 2)
  user = signal( {
    name: 'Matthew McConnaughey',
    age: 38,
    email: 'bob@aol.com'
  });

  increment() {
    this.num.set(this.num() + 1)
  }
  decrement() {
    this.num.set(this.num() - 1)
  }
  doIt() {
   
  }
  ngOnInit(): void {
   
  }
}
