import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [],
  template: `
   <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>More Tacos</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  `,
  styles: ``
})
export class MainMenuComponent {

}
