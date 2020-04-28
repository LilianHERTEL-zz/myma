import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturers-info',
  templateUrl: './manufacturers-info.component.html',
  styleUrls: ['./manufacturers-info.component.scss'],
})
export class ManufacturersInfoComponent implements OnInit {
  infoList = [
    {
      title: 'SALES',
      subtitle: 'Building your customer relationships.',
      content:
        'Are your appliances sold through distributors or retailers? Do you only ever engage with a customer when they are complaining about their appliance breaking down? Talk to your customers in real time using the myma dashboard, allowing you to build brand loyalty like never before.',
    },
    {
      title: 'MARKETING',
      subtitle: "Understanding your consumer's habits and usage data.",
      content:
        'To market to a consumer, you must first know who your consumers are. With myma you can gauge your consumer demographics in seconds!',
    },
    {
      title: 'SERVICING',
      subtitle: 'Self service and predicitive maintenance!',
      content:
        'We guarantee to extend the lifespan of your customers appliance - something you would want your customers to know!',
    },
    {
      title: 'RESEARCH',
      subtitle: 'Big Data.',
      content:
        'Take your R&D to the next level with real time analytics and usage data. Your research and development departments have never had this much insight into your appliances in the field - myma and our patented SERVICEPLUG can yield upto 1M data points per wash.',
    },
    {
      title: 'CUSTOMER SERVICE',
      subtitle: 'Reduction in support calls.',
      content:
        'Manage real time KPIs by reducing tech support calls and tickets - allow your users to self-solve issues with their machines via our app.',
    },
    {
      title: 'MYMA',
      subtitle: 'Our Product.',
      content:
        'Using our proprietary data exhaust (SERVICEPLUG) for our cognitive engine in the cloud, manufacturers can maximise profits and monitor their current appliances the field.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
