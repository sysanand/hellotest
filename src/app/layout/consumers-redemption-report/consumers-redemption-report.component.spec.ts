import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersRedemptionReportComponent } from './consumers-redemption-report.component';

describe('ConsumersRedemptionReportComponent', () => {
  let component: ConsumersRedemptionReportComponent;
  let fixture: ComponentFixture<ConsumersRedemptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersRedemptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersRedemptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
