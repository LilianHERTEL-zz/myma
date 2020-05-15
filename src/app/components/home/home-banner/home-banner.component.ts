import { Component } from '@angular/core';
declare var $: any; // Allows to use jQuery

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})

/**
 * The banner displayed on the home page
 */
export class HomeBannerComponent {
  constructor() {}

  /**
   * Handles clicking on the button that makes the page scroll to a given anchor
   * @param id The anchor we want to scroll to
   */
  onMoreClick(id: string) {
    // Just using jQuery to avoid anchor link to add "#..." to the URL
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 500);
  }
}
