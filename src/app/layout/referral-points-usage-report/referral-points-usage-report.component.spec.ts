import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralPointsUsageReportComponent } from './referral-points-usage-report.component';

describe('ReferralPointsUsageReportComponent', () => {
  let component: ReferralPointsUsageReportComponent;
  let fixture: ComponentFixture<ReferralPointsUsageReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralPointsUsageReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPointsUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
