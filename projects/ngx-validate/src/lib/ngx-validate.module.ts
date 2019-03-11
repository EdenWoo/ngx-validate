import {NgModule} from '@angular/core';
import {NgxValidateComponent} from './ngx-validate.component';
import {ValidationErrorComponent} from './validation-error/validation-error.component';

@NgModule({
  declarations: [
    NgxValidateComponent,
    ValidationErrorComponent
  ],
  imports: [],
  exports: [
    NgxValidateComponent,
    ValidationErrorComponent
  ]
})
export class NgxValidateModule {
}
