import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-serviceplug',
  templateUrl: './serviceplug.component.html',
  styleUrls: ['./serviceplug.component.scss'],
})

/**
 * Serviceplug product page component
 */
export class ServiceplugComponent implements OnInit {
  // Browser title
  title: string = 'Myma ~ Serviceplug';

  /**
   * ServiceplugComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
