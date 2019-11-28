import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAuthenticationTrackComponent } from './coupon-authentication-track.component';

describe('CouponAuthenticationTrackComponent', () => {
  let component: CouponAuthenticationTrackComponent;
  let fixture: ComponentFixture<CouponAuthenticationTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponAuthenticationTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAuthenticationTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
