import { Component, ViewChild } from '@angular/core';
import { NavButtonsContainerComponent } from './nav-buttons-container/nav-buttons-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('buttonsContainer') buttonsContainer: NavButtonsContainerComponent;

  constructor() {}
}
