import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsLocationReportComponent } from './gps-location-report.component';

describe('GpsLocationReportComponent', () => {
  let component: GpsLocationReportComponent;
  let fixture: ComponentFixture<GpsLocationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsLocationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsLocationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
