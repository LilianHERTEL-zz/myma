import {
  Component,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { NavButtonsContainerComponent } from './nav-buttons-container/nav-buttons-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

/**
 * Header component
 * **
 * Contains the menu, allows navigation between pages
 */
export class HeaderComponent implements AfterViewInit {
  // NavButtonsContainerComponent reference (the component that contains all the NavButtons)
  @ViewChild('buttonsContainer') buttonsContainer: NavButtonsContainerComponent;

  // Navbar html element reference, used to adjust the content's top margin, to avoid the navbar overlapping other elements
  @ViewChild('navbar') navbar;

  constructor() {}

  ngAfterViewInit() {
    // Calls "setBodyPadding" function to adjust the content's top margin
    this.setBodyPadding();
  }

  /**
   * Handles the window resize event
   * **
   * Calls "setBodyPadding" function to adjust the content's top margin
   */
  @HostListener('window:resize')
  onResize() {
    this.setBodyPadding();
  }

  /**
   * Adjusts the content's top margin, to avoid the navbar overlapping other elements
   */
  setBodyPadding() {
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    console.log(navbarHeight);
    document.body.style.paddingTop = navbarHeight + 'px';
  }
}
