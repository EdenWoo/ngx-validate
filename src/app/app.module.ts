import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxValidateModule} from '../../projects/ngx-validate/src/lib/ngx-validate.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {DynamicFieldDirective} from './components/dynamic-field/dynamic-field.directive';


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
