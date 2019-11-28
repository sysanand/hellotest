import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAwardedThroughReferralComponent } from './amount-awarded-through-referral.component';

describe('AmountAwardedThroughReferralComponent', () => {
  let component: AmountAwardedThroughReferralComponent;
  let fixture: ComponentFixture<AmountAwardedThroughReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountAwardedThroughReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAwardedThroughReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
