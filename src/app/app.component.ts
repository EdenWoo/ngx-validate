import {Component, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlConfig} from './interface/control-config.interface';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {FormConfig} from './data/form-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  formConfig: ControlConfig[] = FormConfig;

  constructor() {
  }

  submit(value: any) {
  }

  // initFormControl() {
  //   this.myForm = this.formBuiler.group({
  //     name: new FormControl(null, {validators: [Validators.required]}
  //     ),
  //     asyncValidate: new FormControl(null, {
  //         validators: [],
  //         asyncValidators: [NgxValidators.asyncDuplicate(
  //           'http://dummy.restapiexample.com/api/v1/employee/1', this.http, true
  //         )]
  //       }
  //     ),
  //     requiredWhenNameHasValue: new FormControl(null, {
  //         validators: [NgxValidators.requiredIfInputHasValue('name')]
  //       }
  //     ),
  //     number: new FormControl('abcd',
  //       {validators: [Validators.required, NgxValidators.isNumber]}
  //     ),
  //     numberLetterOnly: new FormControl(null,
  //       {validators: [NgxValidators.numberLetterOnly]}
  //     ),
  //     password: new FormControl(null,
  //       {
  //         validators: [
  //           Validators.required,
  //           NgxValidators.strongPassword
  //         ]
  //       }),
  //     repeatPassword: new FormControl(null,
  //       {validators: NgxValidators.matchPassword('password')})
  //   });
  // }
  //
  // onSubmit({value, valid}: { value: any, valid: boolean }) {
  //   if (valid) {
  //     console.log(value);
  //     alert(JSON.stringify(value));
  //   } else {
  //     console.log(this.myForm);
  //     Object.keys(this.myForm.controls).forEach(key => {
  //       this.ngxValidateService.validateAllFormFields(this.myForm);
  //     });
  //   }
  // }
}
