import { Component } from '@angular/core';
declare var $: any; // Allows to use jQuery

@Component({
  selector: 'app-serviceplug-banner',
  templateUrl: './serviceplug-banner.component.html',
  styleUrls: ['./serviceplug-banner.component.scss'],
})

/**
 * Serviceplug banner component
 */
export class ServiceplugBannerComponent {
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
