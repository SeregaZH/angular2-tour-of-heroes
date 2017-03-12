import { Component, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'textbox',
  template: '<input type="text" placeholder="{{placeholder}}" [ngModel]="text" />'
})

export class TextboxComponent implements DoCheck, OnChanges {


  private theText: string;

  @Input()
  public set text(txt: string) {
    this.theText = txt;
  };

  @Input()
  public placeholder: string;

  constructor() {

  }

  public ngDoCheck(): void {
    this.placeholder = '';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.placeholder = '';
  }
}
