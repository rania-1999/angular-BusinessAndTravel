import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventComponent } from './avent.component';

describe('AventComponent', () => {
  let component: AventComponent;
  let fixture: ComponentFixture<AventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
