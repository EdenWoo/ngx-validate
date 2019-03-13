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
}
