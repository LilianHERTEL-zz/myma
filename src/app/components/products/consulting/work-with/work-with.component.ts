import { Component } from '@angular/core';

@Component({
  selector: 'app-work-with',
  templateUrl: './work-with.component.html',
  styleUrls: ['./work-with.component.scss'],
})

/**
 * Presents all the companies myma has worked with
 */
export class WorkWithComponent {
  // Companies logos are defined here
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
}
