import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestReferralDetailsviewComponent } from './highest-referral-detailsview.component';

describe('HighestReferralDetailsviewComponent', () => {
  let component: HighestReferralDetailsviewComponent;
  let fixture: ComponentFixture<HighestReferralDetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestReferralDetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestReferralDetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
