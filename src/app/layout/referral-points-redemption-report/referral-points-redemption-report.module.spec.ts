import { ReferralPointsRedemptionReportModule } from './referral-points-redemption-report.module';

describe('ReferralPointsRedemptionReportModule', () => {
  let referralPointsRedemptionReportModule: ReferralPointsRedemptionReportModule;

  beforeEach(() => {
    referralPointsRedemptionReportModule = new ReferralPointsRedemptionReportModule();
  });

  it('should create an instance', () => {
    expect(referralPointsRedemptionReportModule).toBeTruthy();
  });
});
