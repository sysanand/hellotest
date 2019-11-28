import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersAddComponent } from './consumers-add.component';

describe('ConsumersAddComponent', () => {
  let component: ConsumersAddComponent;
  let fixture: ComponentFixture<ConsumersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
