import { CouponUsageReportModule } from './coupon-usage-report.module';

describe('CouponUsageReportModule', () => {
  let couponUsageReportModule: CouponUsageReportModule;

  beforeEach(() => {
    couponUsageReportModule = new CouponUsageReportModule();
  });

  it('should create an instance', () => {
    expect(couponUsageReportModule).toBeTruthy();
  });
});
