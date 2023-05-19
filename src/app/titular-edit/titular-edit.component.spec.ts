/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitularEditComponent } from './titular-edit.component';

describe('TitularEditComponent', () => {
  let component: TitularEditComponent;
  let fixture: ComponentFixture<TitularEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
