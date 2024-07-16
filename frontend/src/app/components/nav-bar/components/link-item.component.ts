import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../models';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [RouterLink],
  template: `
    <li>
      <a [routerLink]="link().link">{{ link().label }}</a>
    </li>
  `,
  styles: ``,
})
export class LinkItemComponent {
  link = input.required<NavItem>();
}
