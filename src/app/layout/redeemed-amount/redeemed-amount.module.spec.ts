import { RedeemedAmountModule } from './redeemed-amount.module';

describe('RedeemedAmountModule', () => {
  let redeemedAmountModule: RedeemedAmountModule;

  beforeEach(() => {
    redeemedAmountModule = new RedeemedAmountModule();
  });

  it('should create an instance', () => {
    expect(redeemedAmountModule).toBeTruthy();
  });
});
