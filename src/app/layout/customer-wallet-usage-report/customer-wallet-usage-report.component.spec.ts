import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWalletUsageReportComponent } from './customer-wallet-usage-report.component';

describe('CustomerWalletUsageReportComponent', () => {
  let component: CustomerWalletUsageReportComponent;
  let fixture: ComponentFixture<CustomerWalletUsageReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWalletUsageReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWalletUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
