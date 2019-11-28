import { ConsumersRedemptionReportModule } from './consumers-redemption-report.module';

describe('ConsumersRedemptionReportModule', () => {
  let consumersRedemptionReportModule: ConsumersRedemptionReportModule;

  beforeEach(() => {
    consumersRedemptionReportModule = new ConsumersRedemptionReportModule();
  });

  it('should create an instance', () => {
    expect(consumersRedemptionReportModule).toBeTruthy();
  });
});
