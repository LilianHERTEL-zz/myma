import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  animations: [
    trigger('tabActive', [
      state(
        '*',
        style({
          opacity: 1,
        })
      ),
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('* => void', [animate('0s')]),
      transition('void => *', [animate('.2s')]),
    ]),
  ],
})

/**
 * Tab component, contained in a tabs component
 */
export class TabComponent {
  // The title text of this tab
  @Input() tabTitle: string;

  // Indicates whether this tab is activated or not
  active: boolean = false;

  constructor() {}
}
