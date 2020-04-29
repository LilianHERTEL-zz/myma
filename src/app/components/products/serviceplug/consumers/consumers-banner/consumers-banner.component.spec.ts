import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersBannerComponent } from './consumers-banner.component';

describe('ConsumersBannerComponent', () => {
  let component: ConsumersBannerComponent;
  let fixture: ComponentFixture<ConsumersBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
