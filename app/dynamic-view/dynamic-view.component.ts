import { Component, Input } from '@angular/core';

@Component({
  selector: 'dynamic-view',
  template: '<div>' +
  '<div *ngFor="let component of components">' +
  '<dynamic-component [component]="component"></dynamic-component>' +
  '</div>' +
  '</div>'
})

export class DynamicViewComponent {
    @Input()
    public components: any[];
}
