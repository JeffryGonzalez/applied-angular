import { Component, input } from '@angular/core';
import { NavItems } from '../models';
import { LinkItemChildrenComponent } from './link-item-children.component';
import { LinkItemComponent } from './link-item.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LinkItemChildrenComponent, LinkItemComponent],
  template: `
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        @for (link of listOfLinks(); track $index) {
          @if (link.children) {
            <app-link-item-children [link]="link.children" />
          } @else {
            <app-link-item [link]="link" />
          }
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class SideMenuComponent {
  // New way to provide inputs
  listOfLinks = input.required<NavItems>();
}
