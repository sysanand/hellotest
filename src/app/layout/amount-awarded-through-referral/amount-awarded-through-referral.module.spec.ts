import { AmountAwardedThroughReferralModule } from './amount-awarded-through-referral.module';

describe('AmountAwardedThroughReferralModule', () => {
  let amountAwardedThroughReferralModule: AmountAwardedThroughReferralModule;

  beforeEach(() => {
    amountAwardedThroughReferralModule = new AmountAwardedThroughReferralModule();
  });

  it('should create an instance', () => {
    expect(amountAwardedThroughReferralModule).toBeTruthy();
  });
});
