import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  selectTab(tab: TabComponent) {
    // desactivates all the tabs
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    // activates the clicked tab
    tab.active = true;
  }

  constructor() {}

  /**
   * Called after the component children have been created
   */
  ngAfterContentInit(): void {
    // retrieves all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // no tab is active, activates the first tab
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
}
