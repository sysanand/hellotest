import { BlockedAmountModule } from './blocked-amount.module';

describe('BlockedAmountModule', () => {
  let blockedAmountModule: BlockedAmountModule;

  beforeEach(() => {
    blockedAmountModule = new BlockedAmountModule();
  });

  it('should create an instance', () => {
    expect(blockedAmountModule).toBeTruthy();
  });
});
