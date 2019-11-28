import { CustomerWalletBalanceReportModule } from './customer-wallet-balance-report.module';

describe('CustomerWalletBalanceReportModule', () => {
  let customerWalletBalanceReportModule: CustomerWalletBalanceReportModule;

  beforeEach(() => {
    customerWalletBalanceReportModule = new CustomerWalletBalanceReportModule();
  });

  it('should create an instance', () => {
    expect(customerWalletBalanceReportModule).toBeTruthy();
  });
});
