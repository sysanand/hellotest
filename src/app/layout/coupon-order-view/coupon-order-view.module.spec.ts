import { CouponOrderViewModule } from './coupon-order-view.module';

describe('CouponOrderViewModule', () => {
  let couponOrderViewModule: CouponOrderViewModule;

  beforeEach(() => {
    couponOrderViewModule = new CouponOrderViewModule();
  });

  it('should create an instance', () => {
    expect(couponOrderViewModule).toBeTruthy();
  });
});
