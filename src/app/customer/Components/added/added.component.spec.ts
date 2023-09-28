import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedComponent } from './added.component';

describe('AddedComponent', () => {
  let component: AddedComponent;
  let fixture: ComponentFixture<AddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedComponent]
    });
    fixture = TestBed.createComponent(AddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
