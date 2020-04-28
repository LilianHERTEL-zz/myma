import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { NavButtonComponent } from '../nav-button/nav-button.component';
declare var $: any;

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})
export class NavDropdownComponent implements AfterViewInit {
  @ContentChildren(NavButtonComponent) children: QueryList<NavButtonComponent>;
  @ContentChildren(NavDropdownComponent) childrenDropdowns: QueryList<
    NavDropdownComponent
  >;

  private dropdownParent: NavDropdownComponent = null;
  private _active: boolean = false;

  @Input() inDropdown = false;
  @Input() clickable: boolean;
  @Input() direction: string;
  @Input() route: string;
  @Input() text: string;

  public getDropdownParent(): NavDropdownComponent {
    return this.dropdownParent;
  }

  public setDropdownParent(dropdown: NavDropdownComponent) {
    this.dropdownParent = dropdown;
  }

  public isActive(): boolean {
    return this._active;
  }
  public activate() {
    this._active = true;
    if (this.dropdownParent !== null) {
      this.dropdownParent.activate();
    }
  }
  public desactivate() {
    this._active = false;
  }

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.children.forEach((child) => child.setDropdownParent(this));
    this.childrenDropdowns.forEach((child) => child.setDropdownParent(this));
    if (this.route !== null) this.navigationService.addItem(this);
  }
}
