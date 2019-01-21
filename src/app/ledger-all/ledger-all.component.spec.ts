import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerAllComponent } from './ledger-all.component';

describe('LedgerAllComponent', () => {
  let component: LedgerAllComponent;
  let fixture: ComponentFixture<LedgerAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
