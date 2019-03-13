import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ControlConfig} from '../../interface/control-config.interface';
@Component({
  selector: "app-input",
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {
  field: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
