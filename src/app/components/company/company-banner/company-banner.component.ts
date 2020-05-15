import { Component } from '@angular/core';
declare var $: any; // Allows to use jQuery

@Component({
  selector: 'app-company-banner',
  templateUrl: './company-banner.component.html',
  styleUrls: ['./company-banner.component.scss'],
})

/**
 * Company banner component, with a phto of the full team
 */
export class CompanyBannerComponent {
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
