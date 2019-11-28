import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersEditComponent } from './consumers-edit.component';

describe('ConsumersEditComponent', () => {
  let component: ConsumersEditComponent;
  let fixture: ComponentFixture<ConsumersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
