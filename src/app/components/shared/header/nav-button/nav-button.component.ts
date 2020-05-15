import { Component, Input, OnChanges } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { NavDropdownComponent } from '../nav-dropdown/nav-dropdown.component';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})

/**
 * Navbutton component, contains a button that redirects to a page of the site (route), or another page (link)
 * **
 * Is activated when the browser is on the corresponding page of the site
 * **
 * An activated button has a different tyle to indicate what page the user is currently on
 * **
 * A NavButton can be nested in a NavDropdownComponent: in this case, it will contain a reference to this NavDropdownComponent
 */
export class NavButtonComponent implements OnChanges {
  // NavDropdownComponent reference, will be activated as well, when this component is activated
  private dropdownParent: NavDropdownComponent = null;

  // Indicates whether this link is activated or not
  private _active: boolean = false;

  // Indicates if this NavButton is in a dropdown menu or not
  @Input() inDropdown: boolean = false;

  // Contains the link this button redirects to
  @Input() link: string = null;

  // Contains the route this button redirects to
  @Input() route: string = null;

  // The text of this button
  @Input() text: string;

  /**
   * DropdownParent getter
   * @returns The NavDropdownComponent instance of this component
   */
  public getDropdownParent(): NavDropdownComponent {
    return this.dropdownParent;
  }

  /**
   * DropdownParent setter
   * @param dropdown A given NavDropdownComponent
   */
  public setDropdownParent(dropdown: NavDropdownComponent) {
    this.dropdownParent = dropdown;
  }

  /**
   * Returns this component's state (true if active, false otherwise)
   * @returns This component's state (the "_active" attribute)
   */
  public isActive(): boolean {
    return this._active;
  }

  /**
   * Activates this NavButton, and its dropdown parent if it exists
   */
  public activate() {
    this._active = true;
    if (this.dropdownParent !== null) {
      this.dropdownParent.activate();
    }
  }

  /**
   * Desactivates this NavButton
   */
  public desactivate() {
    this._active = false;
  }

  /**
   * NavButtonComponent constructor
   * @param navigationService Injects the NavigationService in the component, used to manage the links and their states
   */
  constructor(private navigationService: NavigationService) {}

  /**
   * Adds this NavButton to the NavigationService items list, so that it will be managed by the NavigationService
   */
  ngOnChanges(): void {
    if (this.route !== null) {
      this.navigationService.addItem(this);
      if (this.navigationService.removeFirstSlash(this.route) === 'serviceplug')
        this.navigationService.addServiceplugItem(this);
    }
  }
}
