import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlConfig} from '../../interface/control-config.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {
  field: ControlConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
