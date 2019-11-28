import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponUsageReportComponent } from './coupon-usage-report.component';

describe('CouponUsageReportComponent', () => {
  let component: CouponUsageReportComponent;
  let fixture: ComponentFixture<CouponUsageReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponUsageReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
