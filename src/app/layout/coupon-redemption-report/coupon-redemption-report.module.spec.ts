import { CouponRedemptionReportModule } from './coupon-redemption-report.module';

describe('CouponRedemptionReportModule', () => {
  let couponRedemptionReportModule: CouponRedemptionReportModule;

  beforeEach(() => {
    couponRedemptionReportModule = new CouponRedemptionReportModule();
  });

  it('should create an instance', () => {
    expect(couponRedemptionReportModule).toBeTruthy();
  });
});
