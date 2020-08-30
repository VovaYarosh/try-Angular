import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild(RefDirective) refDir: RefDirective;
  constructor(private resolver: ComponentFactoryResolver){}
  showModal(){
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.container.clear();
    const component = this.refDir.container.createComponent(modalFactory);
    component.instance.title = 'dynamic title';
    component.instance.close.subscribe(() => {
      this.refDir.container.clear()
    });
  }
}

