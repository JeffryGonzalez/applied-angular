import { Component, input } from '@angular/core';
import { NavbarLink } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-item-children',
  standalone: true,
  imports: [RouterLink],
  template: `
    <li>
      <details>
        <summary>
          <a [routerLink]="link().link">{{ link().label }}</a>
        </summary>
        <ul class="p-2">
          @for (childLink of link().children; track $index) {
            <li>
              <a [routerLink]="childLink.link">{{ childLink.label }}</a>
            </li>
          }
        </ul>
      </details>
    </li>
  `,
  styles: ``,
})
export class LinkItemChildrenComponent {
  link = input.required<NavbarLink>();
}
