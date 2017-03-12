import {
  Component, ViewContainerRef, ViewChild, Input, ReflectiveInjector,
  Provider, ComponentFactoryResolver
} from '@angular/core';

@Component({
    selector: 'form-container',
    template: '<div #formContainer></div>'
})

export class RenderComponent {

  constructor(private resolver: ComponentFactoryResolver){}

  @ViewChild('formContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  @Input() set formConfig(controls: any[]) {
    if (!controls || !controls.length) {
      return;
    }

    const inputProviders = controls
      .map(
        control => {
          return {
            id: control.id,
            injector: this.createInjector(control.inputs),
            factory: this.resolver.resolveComponentFactory(control.name)
          };
        }
      );

    inputProviders.forEach(control => {
      const component = control.factory.create(control.injector);
      this.container.insert(component.hostView);
      component.changeDetectorRef.detectChanges();
    });
  }

  private createInjector(inputs: any[]): any {
    const inputProviders = inputs.map<Provider>(input => {
      return {
        provide: input.name, useValue: input.value
      }
    });
    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    return ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.container.parentInjector);
  }
}
