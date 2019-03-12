import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export interface ValidationResult {
  [key: string]: boolean;
}

interface AsyncValidatorFn {
  (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

// @dynamic
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

    return function validate(control: FormControl) {

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

  /**
   * This control is required if the input control has value.
   * */
  static requiredIfInputHasValue(inputControlName: string) {

    let thisControl: FormControl;
    let inputControl: FormControl;

    return function validate(control: FormControl) {

      if (!control.parent) {
        return null;
      }

      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        inputControl = control.parent.get(inputControlName) as FormControl;
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
      if (inputControl.value && !thisControl.value) {
        return {
          required: true
        };
      }
      return null;
    };
  }


  /**
   * only allow letters/numbers
   * */
  static numberLetterOnly(control: FormControl): ValidationResult {
    const regexp = /^[a-zA-Z0-9]*$/;
    if (control.value && !regexp.test(control.value)) {
      return {numberLetterOnlyError: true};
    }
  }

  /**
   * only allow letters/numbers/space
   * */
  static numberLetterSpaceOnly(control: FormControl): ValidationResult {
    const regexp = /^[A-Za-z0-9 _]*$/;
    if (control.value && !regexp.test(control.value)) {
      return {numberLetterSpace: true};
    }
  }

  /**
   * should not contain blank
   * */
  static noBlank(control: FormControl): { [key: string]: boolean } {
    const pattern = '\\s';
    if (new RegExp(pattern).test(control.value)) {
      return {'noBlankError': true};
    }
    return undefined;
  }

  /**
   * Validate from backend if this field is duplicate or not.
   * Input url string and HttpClient and the validator will get to your url,
   * if the response is equal to true -> not duplicate
   * if the response is not equal to true -> duplicate
   * */
  static asyncDuplicate(url: string, http: HttpClient, expectValue: any): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      if (control.value) {
        return http.get(url, control.value).pipe(map(
          res => {
            // compare value only here
            if (res === expectValue) {
              return null;
            } else {
              return {duplicateError: true};
            }
          }, err => {
            return {duplicateError: true};
          }
        ), catchError((err: any) => {
          return null;
        }));
      } else {
        return new Promise((resolve, reject) => {
            resolve(null);
          }
        );
      }
    };
  }
}
