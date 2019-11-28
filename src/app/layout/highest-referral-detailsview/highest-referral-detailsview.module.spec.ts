import { HighestReferralDetailsviewModule } from './highest-referral-detailsview.module';

describe('HighestReferralDetailsviewModule', () => {
  let highestReferralDetailsviewModule: HighestReferralDetailsviewModule;

  beforeEach(() => {
    highestReferralDetailsviewModule = new HighestReferralDetailsviewModule();
  });

  it('should create an instance', () => {
    expect(highestReferralDetailsviewModule).toBeTruthy();
  });
});
