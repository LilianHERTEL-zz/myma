import { Component } from '@angular/core';
declare var $: any; // Allows to use jQuery

@Component({
  selector: 'app-manufacturers-banner',
  templateUrl: './manufacturers-banner.component.html',
  styleUrls: ['./manufacturers-banner.component.scss'],
})

/**
 * Manufacturrers banner component
 */
export class ManufacturersBannerComponent {
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
