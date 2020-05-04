import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with',
  templateUrl: './work-with.component.html',
  styleUrls: ['./work-with.component.scss'],
})
export class WorkWithComponent implements OnInit {
  images = [
    'assets/images/Chargifi_logo.png',
    'assets/images/ImperialCollege_logo.png',
    'assets/images/NorthernPower_logo.png',
    'assets/images/P&G_logo.png',
    'assets/images/TrinityCollege_logo.png',
    'assets/images/WesternPower_logo.png',
    'assets/images/Zola_logo.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
