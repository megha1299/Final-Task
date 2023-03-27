import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRdashboardComponent } from './hrdashboard.component';

describe('HRdashboardComponent', () => {
  let component: HRdashboardComponent;
  let fixture: ComponentFixture<HRdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
