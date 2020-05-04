import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-serviceplug',
  templateUrl: './serviceplug.component.html',
  styleUrls: ['./serviceplug.component.scss'],
})
export class ServiceplugComponent implements OnInit {
  title: string = 'Myma ~ Serviceplug';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
