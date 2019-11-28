import { ConfigSettingsModule } from './config-settings.module';

describe('ConfigSettingsModule', () => {
  let configSettingsModule: ConfigSettingsModule;

  beforeEach(() => {
    configSettingsModule = new ConfigSettingsModule();
  });

  it('should create an instance', () => {
    expect(configSettingsModule).toBeTruthy();
  });
});
