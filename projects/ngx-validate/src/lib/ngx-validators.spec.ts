import {FormControl} from '@angular/forms';
import {NgxValidators} from './ngx-validators';

describe('ngx validators service', () => {

  describe('isNumber', () => {
    it('when a input is not a number or +-., should return undefined', () => {
      const control: FormControl = new FormControl('wek');
      const validated = NgxValidators.isNumber(control);
      expect(validated).toBeUndefined();
    });
  });

});

