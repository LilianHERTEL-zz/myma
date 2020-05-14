import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { HowItWorksComponent } from './components/products/serviceplug/how-it-works/how-it-works.component';
import { OurOfferComponent } from './components/home/our-offer/our-offer.component';
import { TabsComponent } from './components/utils/tabs/tabs.component';
import { TabComponent } from './components/utils/tabs/tab/tab.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavButtonComponent } from './components/shared/header/nav-button/nav-button.component';
import { NavButtonsContainerComponent } from './components/shared/header/nav-buttons-container/nav-buttons-container.component';
import { CompanyBannerComponent } from './components/company/company-banner/company-banner.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { TeamComponent } from './components/company/team/team.component';
import { TeamMemberComponent } from './components/company/team/team-member/team-member.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapsComponent } from './components/company/maps/maps.component';
import { VacanciesComponent } from './components/company/vacancies/vacancies.component';
import { HomeProductsComponent } from './components/home/home-products/home-products.component';
import { NavDropdownComponent } from './components/shared/header/nav-dropdown/nav-dropdown.component';
import { ServiceplugComponent } from './components/products/serviceplug/serviceplug.component';
import { ConsumersComponent } from './components/products/serviceplug/consumers/consumers.component';
import { ManufacturersComponent } from './components/products/serviceplug/manufacturers/manufacturers.component';
import { ServiceplugBannerComponent } from './components/products/serviceplug/serviceplug-banner/serviceplug-banner.component';
import { WhitelabelComponent } from './components/products/whitelabel/whitelabel.component';
import { ConsultingComponent } from './components/products/consulting/consulting.component';
import { LearnMoreComponent } from './components/products/serviceplug/learn-more/learn-more.component';
import { MatchHeightDirective } from './directives/match-height.directive';
import { ManufacturersBannerComponent } from './components/products/serviceplug/manufacturers/manufacturers-banner/manufacturers-banner.component';
import { ManufacturersInfoComponent } from './components/products/serviceplug/manufacturers/manufacturers-info/manufacturers-info.component';
import { ConsumersBannerComponent } from './components/products/serviceplug/consumers/consumers-banner/consumers-banner.component';
import { ConsumersInfoComponent } from './components/products/serviceplug/consumers/consumers-info/consumers-info.component';
import { WorkWithComponent } from './components/products/consulting/work-with/work-with.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { HomeWorkedWithComponent } from './components/home/home-worked-with/home-worked-with.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompanyComponent,
    HowItWorksComponent,
    OurOfferComponent,
    TabsComponent,
    TabComponent,
    NotFoundErrorComponent,
    ContactComponent,
    NavButtonComponent,
    NavButtonsContainerComponent,
    CompanyBannerComponent,
    HomeBannerComponent,
    TeamComponent,
    TeamMemberComponent,
    FooterComponent,
    MapsComponent,
    VacanciesComponent,
    HomeProductsComponent,
    NavDropdownComponent,
    ServiceplugComponent,
    ConsumersComponent,
    ManufacturersComponent,
    ServiceplugBannerComponent,
    WhitelabelComponent,
    ConsultingComponent,
    LearnMoreComponent,
    MatchHeightDirective,
    ManufacturersBannerComponent,
    ManufacturersInfoComponent,
    ConsumersBannerComponent,
    ConsumersInfoComponent,
    WorkWithComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    HomeWorkedWithComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
