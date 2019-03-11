import {FormControl} from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class NgxValidators {
  // Allow only number or + or - or .
  static isNumber(control: FormControl): ValidationResult {
    const customRegexp = /^[\-\+]?[0-9]*(\.[0-9]+)?$/;
    if (control.value && !customRegexp.test(control.value)) {
      return {isNumberError: true};
    }
  }

  public static strongPassword(control: FormControl): ValidationResult {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    const valid = hasNumber && hasUpper && hasLower;
    if (!valid) {
      // return what´s not valid
      return {strongPasswordError: true};
    }
    return null;
  }


  static matchPassword(repeatPassword: string) {

    let thisControl: FormControl;
    let inputControl: FormControl;

    return function clearingCodeRequiredValidate(control: FormControl) {

      if (!control.parent) {
        return null;
      }

      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        inputControl = control.parent.get(repeatPassword) as FormControl;
        if (!inputControl) {
          throw new Error('matchOtherValidator(): other control is not found in parent group');
        }
        inputControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }

      if (!inputControl) {
        return null;
      }

      if (inputControl.value !== thisControl.value) {
        return {matchPasswordError: true};
      }

      return null;
    };
  }

}
