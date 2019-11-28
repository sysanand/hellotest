import { CouponOrderListModule } from './coupon-order-list.module';

describe('CouponOrderListModule', () => {
  let couponOrderListModule: CouponOrderListModule;

  beforeEach(() => {
    couponOrderListModule = new CouponOrderListModule();
  });

  it('should create an instance', () => {
    expect(couponOrderListModule).toBeTruthy();
  });
});
