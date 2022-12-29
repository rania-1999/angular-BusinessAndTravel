import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpostComponent } from './bestpost.component';

describe('BestpostComponent', () => {
  let component: BestpostComponent;
  let fixture: ComponentFixture<BestpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
