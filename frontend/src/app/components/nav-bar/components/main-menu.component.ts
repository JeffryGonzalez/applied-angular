import { Component, input } from '@angular/core';
import { NavbarLinks } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
   <ul class="menu menu-horizontal px-1">
    

   @for(link of listOfLinks(); track link) {
    <li><a [routerLink]="link.link">{{link.label}}</a></li>
   
    }
   
   
      <!-- <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>More Tacos</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> -->
    </ul>
  `,
  styles: ``
})
export class MainMenuComponent {
  
  pay = 123.85;
  listOfLinks = input.required<NavbarLinks>();
}
