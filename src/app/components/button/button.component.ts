import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ControlConfig} from '../../interface/control-config.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  field: ControlConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
