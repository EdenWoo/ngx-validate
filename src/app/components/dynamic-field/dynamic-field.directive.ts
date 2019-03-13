import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputComponent} from '../input/input.component';
import {ButtonComponent} from '../button/button.component';
import {ControlConfig} from '../../interface/control-config.interface';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent
};

@Directive({
  selector: '[dynamicControl]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: ControlConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private cfr: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}