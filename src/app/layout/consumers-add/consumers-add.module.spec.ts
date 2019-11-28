import { ConsumersAddModule } from './consumers-add.module';

describe('ConsumersAddModule', () => {
  let consumersAddModule: ConsumersAddModule;

  beforeEach(() => {
    consumersAddModule = new ConsumersAddModule();
  });

  it('should create an instance', () => {
    expect(consumersAddModule).toBeTruthy();
  });
});
