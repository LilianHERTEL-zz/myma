import { Injectable } from '@angular/core';
import { NavDropdownComponent } from '../components/shared/header/nav-dropdown/nav-dropdown.component';
import { Router, NavigationEnd } from '@angular/router';
import { NavButtonComponent } from '../components/shared/header/nav-button/nav-button.component';

@Injectable({
  providedIn: 'root',
})

/**
 * This service manages the NavButtons and NavDropdowns in the header
 */
export class NavigationService {
  // List of all the header elements to be managed
  private navItems: Array<
    NavButtonComponent | NavDropdownComponent
  > = new Array();

  // List of the elements in the serviceplug dropdown menu
  private _serviceplugItems: Array<NavButtonComponent> = new Array();

  /**
   * Adds an item to the Serviceplug dropdown menu
   * @param item A given NavButton that should be added to the Serviceplug dropdown menu
   */
  public addServiceplugItem(item: NavButtonComponent) {
    this._serviceplugItems.push(item);
  }

  /**
   * Adds an item to the nav items list
   * @param item A given item that should be added to the nav items list
   */
  public addItem(item: NavButtonComponent | NavDropdownComponent) {
    this.navItems.push(item);
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

  /**
   * Desactivates all the items in the header navbar
   */
  private desactivateLinks() {
    this.navItems.forEach((l) => {
      l.desactivate();
    });
  }

  /**
   * Activates the item corresponding to the given route
   * @param route A given route string
   */
  private activateLink(route: string) {
    let currentRoute: string = this.removeFirstSlash(route);

    // Desactivates all the links
    this.desactivateLinks();

    // Looks for the the clicked link to activate it
    this.navItems.forEach((item) => {
      let linkRoute = this.removeFirstSlash(item.route);
      if (linkRoute === currentRoute) {
        item.activate(); // Activates the clicked link

        // Checks if the item is a serviceplug submenu
        const regex = new RegExp(/serviceplug\/[A-Z]*/);
        if (regex.test(linkRoute))
          this._serviceplugItems.forEach((spItem) => {
            spItem.activate();
          });
      }
    });
  }

  /**
   * NavigationService constructor
   * **
   * Subscribes to the router events
   * **
   * Activates the correct link on NavigationEnd
   * **
   * @param router Injects the Router service in the component
   */
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activateLink(event.url);
      }
    });
  }
}
