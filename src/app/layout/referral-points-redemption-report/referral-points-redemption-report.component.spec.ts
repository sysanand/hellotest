import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralPointsRedemptionReportComponent } from './referral-points-redemption-report.component';

describe('ReferralPointsRedemptionReportComponent', () => {
  let component: ReferralPointsRedemptionReportComponent;
  let fixture: ComponentFixture<ReferralPointsRedemptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralPointsRedemptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPointsRedemptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
