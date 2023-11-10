/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServproviderComponent } from './servprovider.component';

describe('ServproviderComponent', () => {
  let component: ServproviderComponent;
  let fixture: ComponentFixture<ServproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
