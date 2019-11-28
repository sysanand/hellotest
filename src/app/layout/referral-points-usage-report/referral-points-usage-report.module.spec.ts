import { ReferralPointsUsageReportModule } from './referral-points-usage-report.module';

describe('ReferralPointsUsageReportModule', () => {
  let referralPointsUsageReportModule: ReferralPointsUsageReportModule;

  beforeEach(() => {
    referralPointsUsageReportModule = new ReferralPointsUsageReportModule();
  });

  it('should create an instance', () => {
    expect(referralPointsUsageReportModule).toBeTruthy();
  });
});
