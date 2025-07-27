import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapp1Component } from './subapp1.component';

describe('Subapp1Component', () => {
  let component: Subapp1Component;
  let fixture: ComponentFixture<Subapp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subapp1Component]
    });
    fixture = TestBed.createComponent(Subapp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
