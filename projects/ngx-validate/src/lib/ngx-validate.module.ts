import {NgModule} from '@angular/core';
import {ValidationErrorComponent} from './validation-error/validation-error.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ValidationErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    ValidationErrorComponent
  ]
})
export class NgxValidateModule {
}
