/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdeddComponent } from './Adedd.component';

describe('AdeddComponent', () => {
  let component: AdeddComponent;
  let fixture: ComponentFixture<AdeddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
