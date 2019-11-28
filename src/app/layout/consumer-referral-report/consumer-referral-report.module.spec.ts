import { ConsumerReferralReportModule } from './consumer-referral-report.module';

describe('ConsumerReferralReportModule', () => {
  let consumerReferralReportModule: ConsumerReferralReportModule;

  beforeEach(() => {
    consumerReferralReportModule = new ConsumerReferralReportModule();
  });

  it('should create an instance', () => {
    expect(consumerReferralReportModule).toBeTruthy();
  });
});
