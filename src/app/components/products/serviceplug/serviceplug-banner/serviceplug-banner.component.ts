import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-serviceplug-banner',
  templateUrl: './serviceplug-banner.component.html',
  styleUrls: ['./serviceplug-banner.component.scss']
})
export class ServiceplugBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMoreClick(id: string) {
    // Just using jQuery to avoid anchor link to add "#..." to the URL
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 500);
  }
}
