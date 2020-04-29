import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersInfoComponent } from './consumers-info.component';

describe('ConsumersInfoComponent', () => {
  let component: ConsumersInfoComponent;
  let fixture: ComponentFixture<ConsumersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
