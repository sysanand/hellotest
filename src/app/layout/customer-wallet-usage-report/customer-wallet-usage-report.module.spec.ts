import { CustomerWalletUsageReportModule } from './customer-wallet-usage-report.module';

describe('CustomerWalletUsageReportModule', () => {
  let customerWalletUsageReportModule: CustomerWalletUsageReportModule;

  beforeEach(() => {
    customerWalletUsageReportModule = new CustomerWalletUsageReportModule();
  });

  it('should create an instance', () => {
    expect(customerWalletUsageReportModule).toBeTruthy();
  });
});
