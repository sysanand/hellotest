import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWalletBalanceReportComponent } from './consumer-wallet-balance-report.component';

describe('ConsumerWalletBalanceReportComponent', () => {
  let component: ConsumerWalletBalanceReportComponent;
  let fixture: ComponentFixture<ConsumerWalletBalanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerWalletBalanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerWalletBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
