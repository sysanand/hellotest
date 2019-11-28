import { CouponAuthenticationTrackModule } from './coupon-authentication-track.module';

describe('CouponAuthenticationTrackModule', () => {
  let couponAuthenticationTrackModule: CouponAuthenticationTrackModule;

  beforeEach(() => {
    couponAuthenticationTrackModule = new CouponAuthenticationTrackModule();
  });

  it('should create an instance', () => {
    expect(couponAuthenticationTrackModule).toBeTruthy();
  });
});
