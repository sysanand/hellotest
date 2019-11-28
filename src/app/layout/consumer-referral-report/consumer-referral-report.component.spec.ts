import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerReferralReportComponent } from './consumer-referral-report.component';

describe('ConsumerReferralReportComponent', () => {
  let component: ConsumerReferralReportComponent;
  let fixture: ComponentFixture<ConsumerReferralReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerReferralReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerReferralReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
