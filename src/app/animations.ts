import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ]),
    query(':enter', [animate('1s ease', style({ opacity: 1 }))]),
  ]),
]);
