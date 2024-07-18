import { Component, input } from '@angular/core';
import { NavItems } from '../models';
import { RouterLink } from '@angular/router';
import { LinkItemComponent } from './link-item.component';
import { LinkItemChildrenComponent } from './link-item-children.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, LinkItemComponent, LinkItemChildrenComponent],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for (link of listOfLinks(); track $index) {
        @if (link.children) {
          <app-link-item-children [link]="link.children" />
        } @else {
          <app-link-item [link]="link" />
        }
      }
    </ul>
  `,
  styles: ``,
})
export class MainMenuComponent {
  // New way to provide inputs
  listOfLinks = input.required<NavItems>();
}
