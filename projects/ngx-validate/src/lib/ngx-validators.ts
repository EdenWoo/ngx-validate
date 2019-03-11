import {FormControl} from '@angular/forms';

export class NgxValidators {
  // Allow only number or + or - or .
  static isNumber(control: FormControl): { [key: string]: any } {
    const customRegexp = /^[\-\+]?[0-9]*(\.[0-9]+)?$/;
    if (control.value && !customRegexp.test(control.value)) {
      return {isNumberError: true};
    }
  }
}
