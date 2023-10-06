import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkHistoryComponent } from './add-work-history.component';

describe('AddWorkHistoryComponent', () => {
  let component: AddWorkHistoryComponent;
  let fixture: ComponentFixture<AddWorkHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkHistoryComponent]
    });
    fixture = TestBed.createComponent(AddWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
