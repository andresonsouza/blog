/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NovoPostComponent } from './novo-post.component';

describe('NovoPostComponent', () => {
  let component: NovoPostComponent;
  let fixture: ComponentFixture<NovoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
