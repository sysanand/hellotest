import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestReferralComponent } from './highest-referral.component';

describe('HighestReferralComponent', () => {
  let component: HighestReferralComponent;
  let fixture: ComponentFixture<HighestReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
