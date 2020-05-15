import { Component } from '@angular/core';

@Component({
  selector: 'app-consumers-info',
  templateUrl: './consumers-info.component.html',
  styleUrls: ['./consumers-info.component.scss'],
})

/**
 * Serviceplug for consumers information page component
 */
export class ConsumersInfoComponent {
  // List of paragraphs to be displayed, each one with a title, a subtitle, and a content
  infoList = [
    {
      title: 'MANUFACTURER SERVICING',
      subtitle: 'Servicing has never been this easy.',
      content:
        'Connect directly with the manufacturer with the tap of a button - get your machine serviced and prolong the life of your machine.',
    },
    {
      title: 'WARRANTY',
      subtitle: 'Extra warranty.',
      content:
        'Have you just spent £80 on another call out? Contact your manufacturer today and benefit from an additional 12 months warranty with free call outs included.',
    },
    {
      title: 'MANUALS',
      subtitle:
        "Can't remember where you've put the user manual for that 4 year old machine?",
      content:
        'Not a problem - view the manual in the app with a click of a button.',
    },
    {
      title: 'ERROR CODES',
      subtitle: 'What does E17 mean?',
      content:
        'Find out what it means quickly in the free app - we can even provide troubleshooting instructions to help get you going again.',
    },
    {
      title: 'FAULT DETECTION',
      subtitle: "Don't let your machine drag you down.",
      content:
        "Our machine learning can detect potential faults with your machine, before they become problems - statistics show that predictive maintenance can add an extra two years to your machine's lifespan!",
    },
    {
      title: 'INSIGHTS',
      subtitle: 'Data, working for you.',
      content:
        'Understand your energy consumption, washing habits and the energy cost in pounds and pence per wash.',
    },
  ];

  constructor() {}
}
