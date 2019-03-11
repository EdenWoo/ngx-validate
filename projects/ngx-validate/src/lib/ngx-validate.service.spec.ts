import { TestBed } from '@angular/core/testing';

import { NgxValidateService } from './ngx-validate.service';

describe('NgxValidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxValidateService = TestBed.get(NgxValidateService);
    expect(service).toBeTruthy();
  });
});
