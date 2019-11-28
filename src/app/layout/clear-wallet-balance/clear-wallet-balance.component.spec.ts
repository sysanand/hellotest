import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearWalletBalanceComponent } from './clear-wallet-balance.component';

describe('ClearWalletBalanceComponent', () => {
  let component: ClearWalletBalanceComponent;
  let fixture: ComponentFixture<ClearWalletBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearWalletBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearWalletBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
