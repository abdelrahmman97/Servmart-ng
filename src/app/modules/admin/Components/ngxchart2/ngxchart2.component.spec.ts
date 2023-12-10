import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngxchart2Component } from './ngxchart2.component';

describe('Ngxchart2Component', () => {
  let component: Ngxchart2Component;
  let fixture: ComponentFixture<Ngxchart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ngxchart2Component]
    });
    fixture = TestBed.createComponent(Ngxchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
