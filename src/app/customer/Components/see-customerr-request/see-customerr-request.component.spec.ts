import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCustomerrRequestComponent } from './see-customerr-request.component';

describe('SeeCustomerrRequestComponent', () => {
  let component: SeeCustomerrRequestComponent;
  let fixture: ComponentFixture<SeeCustomerrRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeCustomerrRequestComponent]
    });
    fixture = TestBed.createComponent(SeeCustomerrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
