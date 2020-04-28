import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-manufacturers-banner',
  templateUrl: './manufacturers-banner.component.html',
  styleUrls: ['./manufacturers-banner.component.scss']
})
export class ManufacturersBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMoreClick(id: string) {
    // Just using jQuery to avoid anchor link to add "#..." to the URL
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 500);
  }
}
