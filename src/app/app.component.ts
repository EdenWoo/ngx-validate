import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxValidateService} from '../../projects/ngx-validate/src/lib/ngx-validate.service';
import {NgxValidators} from '../../projects/ngx-validate/src/lib/ngx-validators';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myForm: FormGroup;

  constructor(private formBuiler: FormBuilder,
              private ngxValidateService: NgxValidateService) {
    this.initFormControl();
  }

  initFormControl() {
    this.myForm = this.formBuiler.group({
      name: new FormControl(null, {validators: [Validators.required]}
      ),
      number: new FormControl(null,
        {validators: [Validators.required, NgxValidators.isNumber]}
      ),
      password: new FormControl(null,
        {validators: NgxValidators.strongPassword}),
      repeatPassword: new FormControl(null,
        {validators: NgxValidators.matchPassword('password')})
    });
  }

  onSubmit({value, valid}: { value: any, valid: boolean }) {
    if (valid) {
      console.log(value);
    } else {
      console.log(this.myForm);
      Object.keys(this.myForm.controls).forEach(key => {
        this.ngxValidateService.validateAllFormFields(this.myForm);
      });
    }
  }
}
