import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with',
  templateUrl: './work-with.component.html',
  styleUrls: ['./work-with.component.scss'],
})
export class WorkWithComponent implements OnInit {
  images = [
    'assets/images/workedWith_companies/Chargifi_logo.png',
    'assets/images/workedWith_companies/ImperialCollege_logo.png',
    'assets/images/workedWith_companies/NorthernPower_logo.png',
    'assets/images/workedWith_companies/P&G_logo.png',
    'assets/images/workedWith_companies/TrinityCollege_logo.png',
    'assets/images/workedWith_companies/WesternPower_logo.png',
    'assets/images/workedWith_companies/Zola_logo.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
