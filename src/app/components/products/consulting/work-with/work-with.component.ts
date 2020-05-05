import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with',
  templateUrl: './work-with.component.html',
  styleUrls: ['./work-with.component.scss'],
})
export class WorkWithComponent implements OnInit {
  images = [
    'assets/images/companies/Chargifi_logo.png',
    'assets/images/companies/ImperialCollege_logo.png',
    'assets/images/companies/NorthernPower_logo.png',
    'assets/images/companies/P&G_logo.png',
    'assets/images/companies/TrinityCollege_logo.png',
    'assets/images/companies/WesternPower_logo.png',
    'assets/images/companies/Zola_logo.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
