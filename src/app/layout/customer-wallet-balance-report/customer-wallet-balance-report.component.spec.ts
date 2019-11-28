import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWalletBalanceReportComponent } from './customer-wallet-balance-report.component';

describe('CustomerWalletBalanceReportComponent', () => {
  let component: CustomerWalletBalanceReportComponent;
  let fixture: ComponentFixture<CustomerWalletBalanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWalletBalanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWalletBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
