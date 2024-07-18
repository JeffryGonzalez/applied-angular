import { Component, input } from '@angular/core';
import { NavbarLink } from '../models';
import { LinkItemComponent } from './link-item.component';

@Component({
  selector: 'app-link-item-children',
  standalone: true,
  imports: [LinkItemComponent],
  template: `
    <li>
      <details>
        <summary>{{ link().label }}</summary>
        <ul class="p-2">
          @for (child of link().children; track $index) {
            <app-link-item [link]="child" />
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
