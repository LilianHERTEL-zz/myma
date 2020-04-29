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
export class HeaderComponent implements AfterViewInit {
  @ViewChild('buttonsContainer') buttonsContainer: NavButtonsContainerComponent;

  @ViewChild('navbar') navbar;

  constructor() {}

  ngAfterViewInit() {
    this.setBodyPadding();
  }

  @HostListener('window:resize')
  onResize() {
    this.setBodyPadding();
  }

  setBodyPadding() {
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    console.log(navbarHeight);
    document.body.style.paddingTop = navbarHeight + 'px';
  }
}
