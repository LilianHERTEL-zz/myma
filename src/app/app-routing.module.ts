import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceplugComponent } from './components/products/serviceplug/serviceplug.component';
import { ConsumersComponent } from './components/products/serviceplug/consumers/consumers.component';
import { ManufacturersComponent } from './components/products/serviceplug/manufacturers/manufacturers.component';
import { WhitelabelComponent } from './components/products/whitelabel/whitelabel.component';
import { ConsultingComponent } from './components/products/consulting/consulting.component';

/**
 * All site routes and the correspondign components to display are defined here
 */
const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  {
    path: 'serviceplug',
    component: ServiceplugComponent,
    data: { animation: 'Serviceplug' },
  },
  {
    path: 'serviceplug/consumers',
    component: ConsumersComponent,
    data: { animation: 'ForConsumers' },
  },
  {
    path: 'serviceplug/manufacturers',
    component: ManufacturersComponent,
    data: { animation: 'ForManufacturers' },
  },
  {
    path: 'whitelabel',
    component: WhitelabelComponent,
    data: { animation: 'Whitelabel' },
  },
  {
    path: 'consulting',
    component: ConsultingComponent,
    data: { animation: 'Consulting' },
  },
  {
    path: 'company',
    component: CompanyComponent,
    data: { animation: 'Company' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  {
    path: 'not-found',
    component: NotFoundErrorComponent,
    data: { animation: 'Not Found' },
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
