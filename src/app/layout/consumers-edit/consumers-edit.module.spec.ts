import { ConsumersEditModule } from './consumers-edit.module';

describe('ConsumersEditModule', () => {
  let consumersEditModule: ConsumersEditModule;

  beforeEach(() => {
    consumersEditModule = new ConsumersEditModule();
  });

  it('should create an instance', () => {
    expect(consumersEditModule).toBeTruthy();
  });
});
