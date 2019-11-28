import { HighestReferralModule } from './highest-referral.module';

describe('HighestReferralModule', () => {
  let highestReferralModule: HighestReferralModule;

  beforeEach(() => {
    highestReferralModule = new HighestReferralModule();
  });

  it('should create an instance', () => {
    expect(highestReferralModule).toBeTruthy();
  });
});
