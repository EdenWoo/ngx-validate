import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxValidateModule} from '../../projects/ngx-validate/src/lib/ngx-validate.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputComponent} from './input/input.component';
import {DynamicFieldDirective} from './dynamic-field/dynamic-field.directive';
import {ButtonComponent} from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    DynamicFieldDirective
  ],
  imports: [
    BrowserModule,
    NgxValidateModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
