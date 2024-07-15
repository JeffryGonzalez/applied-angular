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

    <!-- @if(link.children) {
      <app-main-menu-child-links [link]="link" />
    } @else {
      <app-main-menu-link [link]="link" />
    } -->
    <!-- If the link has children, have another component display that 
     if it doesn't have another component that is responsible for display it -->

   
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
  

  listOfLinks = input.required<NavbarLinks>();


}
