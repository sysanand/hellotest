import { ValidateotpModule } from './validateotp.module';

describe('ValidateotpModule', () => {
  let validateotpModule: ValidateotpModule;

  beforeEach(() => {
    validateotpModule = new ValidateotpModule();
  });

  it('should create an instance', () => {
    expect(validateotpModule).toBeTruthy();
  });
});
