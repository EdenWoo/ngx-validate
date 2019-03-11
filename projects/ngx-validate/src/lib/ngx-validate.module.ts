import {NgModule} from '@angular/core';
import {NgxValidateComponent} from './ngx-validate.component';
import {ValidationErrorComponent} from './validation-error/validation-error.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NgxValidateComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    NgxValidateComponent,
    ValidationErrorComponent
  ]
})
export class NgxValidateModule {
}
