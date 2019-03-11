import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidateComponent } from './ngx-validate.component';

describe('NgxValidateComponent', () => {
  let component: NgxValidateComponent;
  let fixture: ComponentFixture<NgxValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
