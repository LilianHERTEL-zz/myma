import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whitelabel',
  templateUrl: './whitelabel.component.html',
  styleUrls: ['./whitelabel.component.scss']
})
export class WhitelabelComponent implements OnInit {
  title: string = 'Myma ~ White labelling';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
