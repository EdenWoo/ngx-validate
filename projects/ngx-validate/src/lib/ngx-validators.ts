import {FormControl} from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class NgxValidators {
  /**
   * Test if the input is number.
   * Allow only number or + or - or .
   * If not number, return isNumberError object.
   * */
  static isNumber(control: FormControl): ValidationResult {
    const customRegexp = /^[\-\+]?[0-9]*(\.[0-9]+)?$/;
    if (control.value && !customRegexp.test(control.value)) {
      return {isNumberError: true};
    }
  }

  /**
   * Test if the password strong enough.
   * Password should contain number and uppercase letter and lower case letter and length should more than 7
   * If not strong enough, return strongPasswordError object.
   * */
  public static strongPassword(control: FormControl): ValidationResult {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && control.value.length > 7;
    if (!valid) {
      // return what´s not valid
      return {strongPasswordError: true};
    }
    return null;
  }


  /**
   * Compare two password to validate if they are match
   * If not match, return matchPasswordError object.
   * */
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
