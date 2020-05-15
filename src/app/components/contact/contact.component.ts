import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

/**
 * Contact page component
 */
export class ContactComponent {
  // Browser title
  title: string = 'Myma ~ Contact';

  /**
   * ContactComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
