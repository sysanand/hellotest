import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponOrderListComponent } from './coupon-order-list.component';

describe('CouponOrderListComponent', () => {
  let component: CouponOrderListComponent;
  let fixture: ComponentFixture<CouponOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
