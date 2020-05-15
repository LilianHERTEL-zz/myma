import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})

/**
 * NavDropdownComponent component, a dropdown menu that contains other NavButtons
 * **
 * Also eventually redirects to another page, like a normal NavButton
 * **
 * A NavDropdownComponent can be nested in another NavDropdownComponent: in this case, it will contain a reference to this NavDropdownComponent
 */
export class NavDropdownComponent implements AfterViewInit {
  // List of NavButtonComponent children
  @ContentChildren(NavButtonComponent) children: QueryList<NavButtonComponent>;

  // List of NavDropdownComponent children (contains other NavDropdownComponents that are nested in this component)
  @ContentChildren(NavDropdownComponent) childrenDropdowns: QueryList<
    NavDropdownComponent
  >;

  // NavDropdownComponent reference, will be activated as well, when this component is activated
  private dropdownParent: NavDropdownComponent = null;

  // Indicates whether this button is activated or not
  private _active: boolean = false;

  // Indicates if this NavDropdownComponent is in a dropdown menu or not
  @Input() inDropdown = false;

  // Indicates if this NavDropdownComponent is clickable (if this is also a link to another page)
  @Input() clickable: boolean;

  // Indicates the direction in which the dropdown menu will appear
  @Input() direction: string;

  // Contains the route this button redirects to
  @Input() route: string;

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
   * NavDropdownComponent constructor
   * @param navigationService Injects the NavigationService in the component, used to manage the links and their states
   */
  constructor(private navigationService: NavigationService) {}

  /**
   * Adds this NavDropdownComponent to the NavigationService items list, so that it will be managed by the NavigationService
   */
  ngAfterViewInit(): void {
    this.children.forEach((child) => child.setDropdownParent(this));
    this.childrenDropdowns.forEach((child) => child.setDropdownParent(this));
    if (this.route !== null) this.navigationService.addItem(this);
  }
}
