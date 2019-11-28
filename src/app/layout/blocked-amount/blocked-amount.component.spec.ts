import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedAmountComponent } from './blocked-amount.component';

describe('BlockedAmountComponent', () => {
  let component: BlockedAmountComponent;
  let fixture: ComponentFixture<BlockedAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
