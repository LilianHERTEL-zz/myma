import { Injectable } from '@angular/core';
import { NavDropdownComponent } from '../components/shared/header/nav-dropdown/nav-dropdown.component';
import { Router, NavigationEnd } from '@angular/router';
import { NavButtonComponent } from '../components/shared/header/nav-button/nav-button.component';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navItems: Array<
    NavButtonComponent | NavDropdownComponent
  > = new Array();

  private _serviceplugItems: Array<NavButtonComponent> = new Array();

  public addServiceplugItem(item: NavButtonComponent) {
    this._serviceplugItems.push(item);
  }

  public addItem(item: NavButtonComponent | NavDropdownComponent) {
    this.navItems.push(item);
  }

  private desactivateLinks() {
    this.navItems.forEach((l) => {
      l.desactivate();
    });
  }

  /**
   * Removes the first '/' in a given string
   * Used to facilitate routes comparison
   * @param str A given string
   */
  public removeFirstSlash(str: string): string {
    if (str[0] === '/') return str.substring(1);
    return str;
  }

  private activateLink(route: string) {
    let currentRoute: string = this.removeFirstSlash(route);

    // desactivates all the links
    this.desactivateLinks();

    // Looks for the the clicked link to activate it
    this.navItems.forEach((item) => {
      let linkRoute = this.removeFirstSlash(item.route);
      if (linkRoute === currentRoute) {
        item.activate(); // activates the clicked link

        // Checks if the item is a serviceplug submenu
        const regex = new RegExp(/serviceplug\/[A-Z]*/);
        if (regex.test(linkRoute))
          this._serviceplugItems.forEach((spItem) => {
            spItem.activate();
          });
      }
    });
  }

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activateLink(event.url);
      }
    });
  }
}
