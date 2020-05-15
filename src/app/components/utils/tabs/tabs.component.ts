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

/**
 * Tabs component that displays tabs, and allows the user to switch between tabs
 */
export class TabsComponent implements AfterContentInit {
  // List of all the TabComponents children
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {}

  /**
   * Selects the given tab, so that the corresponding text is displayed
   * @param tab A given tab, that should be selected
   */
  selectTab(tab: TabComponent) {
    // Desactivates all the tabs
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    // Activates the clicked tab
    tab.active = true;
  }

  /**
   * Called after the component children have been created
   */
  ngAfterContentInit(): void {
    // Retrieves all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // If no tab is active, activates the first tab
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
}
