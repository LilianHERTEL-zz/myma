import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

/**
 * Homepage component
 */
export class HomeComponent {
  // Browser title
  title: string = 'Myma ~ The science behind the appliance';

  /**
   * HomeComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
