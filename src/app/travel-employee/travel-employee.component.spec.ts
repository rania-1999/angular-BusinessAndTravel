import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEmployeeComponent } from './travel-employee.component';

describe('TravelEmployeeComponent', () => {
  let component: TravelEmployeeComponent;
  let fixture: ComponentFixture<TravelEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
