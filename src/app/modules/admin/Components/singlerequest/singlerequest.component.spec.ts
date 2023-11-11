/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SinglerequestComponent } from './singlerequest.component';

describe('SinglerequestComponent', () => {
  let component: SinglerequestComponent;
  let fixture: ComponentFixture<SinglerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
