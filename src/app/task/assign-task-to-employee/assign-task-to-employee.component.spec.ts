import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskToEmployeeComponent } from './assign-task-to-employee.component';

describe('AssignTaskToEmployeeComponent', () => {
  let component: AssignTaskToEmployeeComponent;
  let fixture: ComponentFixture<AssignTaskToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTaskToEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTaskToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
