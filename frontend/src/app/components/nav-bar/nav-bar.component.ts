import { Component, signal } from '@angular/core';
import { SideMenuComponent } from './components/side-menu.component';
import { UserMenuComponent } from './components/user-menu.component';
import { MainMenuComponent } from './components/main-menu.component';
import { ThemeMenuComponent } from './components/theme-menu.component';
import { NavItems } from './models';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SideMenuComponent,
    UserMenuComponent,
    MainMenuComponent,
    ThemeMenuComponent,
  ],
  template: `
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <app-side-menu [listOfLinks]="links()" />
        <a class="btn btn-ghost text-xl">Help Desk</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-main-menu [listOfLinks]="links()" />
      </div>
      <div class="navbar-end">
        <app-theme-menu style="padding-right: 10px;" />
        <app-user-menu />
      </div>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent {
  links = signal<NavItems>([
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Students',
      link: '/students',
    },
    {
      label: 'Dashboard',
      link: '/dashboard',
    },
    {
      label: 'Labs',
      link: '/labs',
    },
    {
      label: 'Taco Street',
      children: [
        {
          label: 'Link 1',
          link: 'www.maps.google.com',
        },
        {
          label: 'Link 2',
          children: [
            {
              label: 'Link 1',
              link: 'www.maps.google.com',
            },
          ],
        },
        {
          label: 'Link 3',
          link: 'www.maps.google.com',
        },
      ],
    },
  ]);
}
