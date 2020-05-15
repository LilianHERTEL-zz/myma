import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
})

/**
 * Serviceplug for consumers page component
 */
export class ConsumersComponent implements OnInit {
  // Browser title
  title: string = 'Myma ~ Serviceplug for consumers';

  /**
   * ConsumersComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
