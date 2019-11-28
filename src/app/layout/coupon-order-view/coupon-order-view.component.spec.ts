import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponOrderViewComponent } from './coupon-order-view.component';

describe('CouponOrderViewComponent', () => {
  let component: CouponOrderViewComponent;
  let fixture: ComponentFixture<CouponOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
