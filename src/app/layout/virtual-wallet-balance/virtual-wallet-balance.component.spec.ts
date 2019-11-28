import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualWalletBalanceComponent } from './virtual-wallet-balance.component';

describe('VirtualWalletBalanceComponent', () => {
  let component: VirtualWalletBalanceComponent;
  let fixture: ComponentFixture<VirtualWalletBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualWalletBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualWalletBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
