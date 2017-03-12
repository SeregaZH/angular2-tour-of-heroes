import { Component, Input } from '@angular/core';
@Component({
  selector: 'dynamic-component',
  template: '<div [ngSwitch]="component.type">' +
  '<div *ngSwitchCase="\'text\'"><input type="{{component.type}}" [ngModel]="component.value" /></div>' +
  '<div *ngSwitchCase="\'checkbox\'"><input type="{{component.type}}" [ngModel]="!!component.value" /></div>' +
  '</div>'
})

export class DynamicComponent {
  @Input()
  public component: any;
}
