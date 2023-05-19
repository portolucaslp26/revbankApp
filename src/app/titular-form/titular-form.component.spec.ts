/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitularFormComponent } from './titular-form.component';

describe('TitularFormComponent', () => {
  let component: TitularFormComponent;
  let fixture: ComponentFixture<TitularFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
