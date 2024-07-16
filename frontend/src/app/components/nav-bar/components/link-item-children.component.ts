import { Component } from '@angular/core';

@Component({
    selector: 'app-link-item-children',
    standalone: true,
    imports: [],
    template: `
         <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>More Tacos</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    `,
    styles: ``
})
export class LinkItemChildrenComponent {

}