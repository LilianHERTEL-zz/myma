import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.scss'],
})

/**
 * 404 error component
 */
export class NotFoundErrorComponent implements OnInit {
  // Browser title
  title: string = 'Myma ~ 404 Not found';

  /**
   * NotFoundErrorComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
