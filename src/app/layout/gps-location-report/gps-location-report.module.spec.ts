import { GpsLocationReportModule } from './gps-location-report.module';

describe('GpsLocationReportModule', () => {
  let gpsLocationReportModule: GpsLocationReportModule;

  beforeEach(() => {
    gpsLocationReportModule = new GpsLocationReportModule();
  });

  it('should create an instance', () => {
    expect(gpsLocationReportModule).toBeTruthy();
  });
});
