import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseProfessionComponent } from './chose-profession.component';

describe('ChoseProfessionComponent', () => {
  let component: ChoseProfessionComponent;
  let fixture: ComponentFixture<ChoseProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseProfessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
