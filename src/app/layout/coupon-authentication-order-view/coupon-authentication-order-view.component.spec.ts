import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAuthenticationOrderViewComponent } from './coupon-authentication-order-view.component';

describe('CouponAuthenticationOrderViewComponent', () => {
  let component: CouponAuthenticationOrderViewComponent;
  let fixture: ComponentFixture<CouponAuthenticationOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponAuthenticationOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAuthenticationOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
