import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseDomainComponent } from './chose-domain.component';

describe('ChoseDomainComponent', () => {
  let component: ChoseDomainComponent;
  let fixture: ComponentFixture<ChoseDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
