import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})

/**
 * Presents the serviceplug with steps
 */
export class HowItWorksComponent {
  // All the steps to be displayed, each one with a title, a subtitle, and a content
  steps = [
    {
      title: 'STEP 1',
      subtitle: 'Connect our smart plug to your machine.',
      content:
        'Insert the SERVICEPLUG in between the socket and the appliance.',
    },
    {
      title: 'STEP 2',
      subtitle: 'Instantly connect with your customers.',
      content:
        'Directly engage with your end users in real time with our supplied dashboard. Perform market research, R&D, schedule services, detect faults, upsell other SDA products and much more with myma.io',
    },
    {
      title: 'STEP 3',
      subtitle: 'Fault detected.',
      content:
        "With over 60M events harnessed every day, we can literally here a 'digital' pin drop. When a fault is detected we automatically send push notifications to you and your customers.",
    },
    {
      title: 'STEP 4',
      subtitle: 'Call outs / Scheduled maintenance.',
      content:
        'A Scheduled call out will take place, before the machine has even broken down!',
    },
  ];

  constructor() {}
}
