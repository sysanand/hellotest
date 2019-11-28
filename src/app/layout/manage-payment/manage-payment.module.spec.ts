import { ManagePaymentModule } from './manage-payment.module';

describe('ManagePaymentModule', () => {
  let managePaymentModule: ManagePaymentModule;

  beforeEach(() => {
    managePaymentModule = new ManagePaymentModule();
  });

  it('should create an instance', () => {
    expect(managePaymentModule).toBeTruthy();
  });
});
