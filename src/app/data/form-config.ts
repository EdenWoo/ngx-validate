import {ControlConfig} from '../interface/control-config.interface';
import {Validators} from '@angular/forms';
import {NgxValidators} from '../../../projects/ngx-validate/src/lib/ngx-validators';

export const FormConfig: ControlConfig[] = [
  {
    type: 'input',
    label: 'Username',
    inputType: 'text',
    name: 'name',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Username Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Url',
    inputType: 'text',
    name: 'url',
    validations: [
      {
        name: 'isUrlError',
        validator: NgxValidators.isUrl,
        message: 'Should be a url'
      }
    ]
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: '',
    options: ['', 'India', 'UAE', 'UK', 'US'],
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Country Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Required When Name Has Value',
    inputType: 'text',
    name: 'requiredIfInputHasValue',
    validations: [
      {
        name: 'required',
        validator: NgxValidators.requiredIfInputHasValue('name'),
        message: 'This field is Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Number',
    inputType: 'text',
    name: 'number',
    validations: [
      {
        name: 'isNumberError',
        validator: NgxValidators.isNumber,
        message: 'Should be a number here'
      }
    ]
  },
  {
    type: 'input',
    label: 'Number Letter Only',
    inputType: 'text',
    name: 'numberLetterOnly',
    validations: [
      {
        name: 'numberLetterOnlyError',
        validator: NgxValidators.numberLetterOnly,
        message: 'Should be a number or letter here'
      }
    ]
  },
  {
    type: 'input',
    label: 'Strong Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'strongPasswordError',
        validator: NgxValidators.strongPassword,
        message: 'Password should contain number and uppercase letter and lower case letter and length should more than 7'
      }
    ]
  },
  {
    type: 'input',
    label: 'Repeat Password',
    inputType: 'password',
    name: 'repeatPassword',
    validations: [
      {
        name: 'matchPasswordError',
        validator: NgxValidators.matchPassword('password'),
        message: 'The password should match'
      }
    ]
  },
  {
    type: 'button',
    label: 'Save'
  }];
