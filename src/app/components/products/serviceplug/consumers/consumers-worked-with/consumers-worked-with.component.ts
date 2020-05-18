import { Component } from '@angular/core';

@Component({
  selector: 'app-consumers-worked-with',
  templateUrl: './consumers-worked-with.component.html',
  styleUrls: ['./consumers-worked-with.component.scss'],
})

/**
 * Contains logos of companies myma has worked with
 */
export class ConsumersWorkedWithComponent {
  // Define all the logos here
  images = [
    'assets/images/home/workedWith_companies/electrolux.png',
    'assets/images/home/workedWith_companies/bosch.png',
    'assets/images/home/workedWith_companies/zanussi.png',
    'assets/images/home/workedWith_companies/aeg.png',
    'assets/images/home/workedWith_companies/neff.png',
    'assets/images/home/workedWith_companies/gaggenau.png',
    'assets/images/home/workedWith_companies/thermador.png',
    'assets/images/home/workedWith_companies/siemens.png',
  ];

  constructor() {}
}
