import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-consumers-banner',
  templateUrl: './consumers-banner.component.html',
  styleUrls: ['./consumers-banner.component.scss'],
})
export class ConsumersBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onMoreClick(id: string) {
    // Just using jQuery to avoid anchor link to add "#..." to the URL
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 500);
  }
}
