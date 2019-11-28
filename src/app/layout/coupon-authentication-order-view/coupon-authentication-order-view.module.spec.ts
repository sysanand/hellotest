import { CouponAuthenticationOrderViewModule } from './coupon-authentication-order-view.module';

describe('CouponAuthenticationOrderViewModule', () => {
  let couponAuthenticationOrderViewModule: CouponAuthenticationOrderViewModule;

  beforeEach(() => {
    couponAuthenticationOrderViewModule = new CouponAuthenticationOrderViewModule();
  });

  it('should create an instance', () => {
    expect(couponAuthenticationOrderViewModule).toBeTruthy();
  });
});
