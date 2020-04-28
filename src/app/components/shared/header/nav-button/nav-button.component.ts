import {
  Component,
  Input,
  AfterViewInit,
  OnInit,
  OnChanges,
} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { NavDropdownComponent } from '../nav-dropdown/nav-dropdown.component';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements AfterViewInit, OnChanges {
  private dropdownParent: NavDropdownComponent = null;
  private _active: boolean = false;

  @Input() inDropdown: boolean = false;
  @Input() link: string = null;
  @Input() route: string = null;
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
  ngOnChanges(): void {
    if (this.route !== null) {
      this.navigationService.addItem(this);
      if (this.navigationService.removeFirstSlash(this.route) === 'serviceplug')
        this.navigationService.addServiceplugItem(this);
    }
  }

  ngAfterViewInit(): void {}
}
