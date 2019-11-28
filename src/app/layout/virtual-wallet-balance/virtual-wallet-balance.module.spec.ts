import { VirtualWalletBalanceModule } from './virtual-wallet-balance.module';

describe('VirtualWalletBalanceModule', () => {
  let virtualWalletBalanceModule: VirtualWalletBalanceModule;

  beforeEach(() => {
    virtualWalletBalanceModule = new VirtualWalletBalanceModule();
  });

  it('should create an instance', () => {
    expect(virtualWalletBalanceModule).toBeTruthy();
  });
});
