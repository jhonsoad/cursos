import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapp2Component } from './subapp2.component';

describe('Subapp2Component', () => {
  let component: Subapp2Component;
  let fixture: ComponentFixture<Subapp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subapp2Component]
    });
    fixture = TestBed.createComponent(Subapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
