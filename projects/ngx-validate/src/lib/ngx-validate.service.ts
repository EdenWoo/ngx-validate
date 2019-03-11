import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NgxValidateService {

  constructor() {
  }

  validateAllFormFields(formGroup: FormGroup | any) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        control.controls.map(c => {
          this.validateAllFormFields(c);
        });
      }
    });
  }
}
