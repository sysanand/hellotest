import { ClearWalletBalanceModule } from './clear-wallet-balance.module';

describe('ClearWalletBalanceModule', () => {
  let clearWalletBalanceModule: ClearWalletBalanceModule;

  beforeEach(() => {
    clearWalletBalanceModule = new ClearWalletBalanceModule();
  });

  it('should create an instance', () => {
    expect(clearWalletBalanceModule).toBeTruthy();
  });
});
