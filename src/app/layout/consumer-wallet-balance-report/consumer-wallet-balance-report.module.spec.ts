import { ConsumerWalletBalanceReportModule } from './consumer-wallet-balance-report.module';

describe('ConsumerWalletBalanceReportModule', () => {
  let consumerWalletBalanceReportModule: ConsumerWalletBalanceReportModule;

  beforeEach(() => {
    consumerWalletBalanceReportModule = new ConsumerWalletBalanceReportModule();
  });

  it('should create an instance', () => {
    expect(consumerWalletBalanceReportModule).toBeTruthy();
  });
});
