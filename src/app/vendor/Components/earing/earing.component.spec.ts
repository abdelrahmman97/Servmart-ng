import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringComponent } from './earing.component';

describe('EaringComponent', () => {
  let component: EaringComponent;
  let fixture: ComponentFixture<EaringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EaringComponent]
    });
    fixture = TestBed.createComponent(EaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
