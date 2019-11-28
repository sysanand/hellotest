import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children: [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'consumers-add', loadChildren: './consumers-add/consumers-add.module#ConsumersAddModule'},
    { path: 'header', loadChildren: './header/header.module#HeaderModule'},
    { path: 'coupon-redemption-report', loadChildren: './coupon-redemption-report/coupon-redemption-report.module#CouponRedemptionReportModule'},
    { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordModule'},
    { path: 'coupon-order-view', loadChildren: './coupon-order-view/coupon-order-view.module#CouponOrderViewModule'},
    { path: 'coupon-order-list', loadChildren: './coupon-order-list/coupon-order-list.module#CouponOrderListModule'},
    { path: 'coupon-authentication-order-view', loadChildren: './coupon-authentication-order-view/coupon-authentication-order-view.module#CouponAuthenticationOrderViewModule'},
    { path: 'coupon-authentication-track', loadChildren: './coupon-authentication-track/coupon-authentication-track.module#CouponAuthenticationTrackModule'},
    { path: 'referral-points-usage-report', loadChildren: './referral-points-usage-report/referral-points-usage-report.module#ReferralPointsUsageReportModule'},
    { path: 'config-settings', loadChildren: './config-settings/config-settings.module#ConfigSettingsModule'},
    
    { path: 'consumers-edit', loadChildren: './consumers-edit/consumers-edit.module#ConsumersEditModule'},
    { path: 'consumers-list', loadChildren: './consumers-list/consumers-list.module#ConsumersListModule'},
    { path: 'consumer-referral-report', loadChildren: './consumer-referral-report/consumer-referral-report.module#ConsumerReferralReportModule'},
    { path: 'consumer-wallet-balance-report', loadChildren: './consumer-wallet-balance-report/consumer-wallet-balance-report.module#ConsumerWalletBalanceReportModule'},
    { path: 'manage-payment', loadChildren: './manage-payment/manage-payment.module#ManagePaymentModule'},
    { path: 'coupon-usage-report', loadChildren: './coupon-usage-report/coupon-usage-report.module#CouponUsageReportModule'},
    { path: 'consumers-redemption-report', loadChildren: './consumers-redemption-report/consumers-redemption-report.module#ConsumersRedemptionReportModule'},
    { path: 'virtual-wallet-balance', loadChildren: './virtual-wallet-balance/virtual-wallet-balance.module#VirtualWalletBalanceModule'},
    { path: 'clear-wallet-balance', loadChildren: './clear-wallet-balance/clear-wallet-balance.module#ClearWalletBalanceModule'},
    { path: 'amount-awarded-through-referral', loadChildren: './amount-awarded-through-referral/amount-awarded-through-referral.module#AmountAwardedThroughReferralModule'},
    { path: 'referral-points-redemption-report', loadChildren: './referral-points-redemption-report/referral-points-redemption-report.module#ReferralPointsRedemptionReportModule'},
    { path: 'highest-referral', loadChildren: './highest-referral/highest-referral.module#HighestReferralModule'},
    { path: 'highest-referral-detailsview', loadChildren: './highest-referral-detailsview/highest-referral-detailsview.module#HighestReferralDetailsviewModule'},
    { path: 'blocked-amount', loadChildren: './blocked-amount/blocked-amount.module#BlockedAmountModule'},
    { path: 'redeemed-amount', loadChildren: './redeemed-amount/redeemed-amount.module#RedeemedAmountModule'}


    
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
