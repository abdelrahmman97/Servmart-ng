import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProduectsComponent } from './add-produects.component';

describe('AddProduectsComponent', () => {
  let component: AddProduectsComponent;
  let fixture: ComponentFixture<AddProduectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProduectsComponent]
    });
    fixture = TestBed.createComponent(AddProduectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
