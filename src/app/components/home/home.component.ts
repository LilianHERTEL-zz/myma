import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'Myma ~ The science behind the appliance';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
