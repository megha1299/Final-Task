import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdashboardComponent } from './empdashboard.component';

describe('EmpdashboardComponent', () => {
  let component: EmpdashboardComponent;
  let fixture: ComponentFixture<EmpdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
