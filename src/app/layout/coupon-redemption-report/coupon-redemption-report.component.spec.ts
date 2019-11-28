import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponRedemptionReportComponent } from './coupon-redemption-report.component';

describe('CouponRedemptionReportComponent', () => {
  let component: CouponRedemptionReportComponent;
  let fixture: ComponentFixture<CouponRedemptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponRedemptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponRedemptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
