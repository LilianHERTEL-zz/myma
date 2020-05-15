import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whitelabel',
  templateUrl: './whitelabel.component.html',
  styleUrls: ['./whitelabel.component.scss'],
})

/**
 * Whitelabel page component
 */
export class WhitelabelComponent implements OnInit {
  // Browser title
  title: string = 'Myma ~ White labelling';

  /**
   * WhitelabelComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
