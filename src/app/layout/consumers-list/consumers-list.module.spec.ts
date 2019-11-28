import { ConsumersListModule } from './consumers-list.module';

describe('ConsumersListModule', () => {
  let consumersListModule: ConsumersListModule;

  beforeEach(() => {
    consumersListModule = new ConsumersListModule();
  });

  it('should create an instance', () => {
    expect(consumersListModule).toBeTruthy();
  });
});
