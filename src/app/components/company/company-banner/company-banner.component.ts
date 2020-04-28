import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-company-banner',
  templateUrl: './company-banner.component.html',
  styleUrls: ['./company-banner.component.scss'],
})
export class CompanyBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onMoreClick(id: string) {
    // Just using jQuery to avoid anchor link to add "#..." to the URL
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 500);
  }
}
