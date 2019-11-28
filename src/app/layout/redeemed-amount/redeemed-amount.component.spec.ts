import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemedAmountComponent } from './redeemed-amount.component';

describe('RedeemedAmountComponent', () => {
  let component: RedeemedAmountComponent;
  let fixture: ComponentFixture<RedeemedAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemedAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
