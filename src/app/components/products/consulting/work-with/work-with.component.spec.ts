import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithComponent } from './work-with.component';

describe('WorkWithComponent', () => {
  let component: WorkWithComponent;
  let fixture: ComponentFixture<WorkWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
