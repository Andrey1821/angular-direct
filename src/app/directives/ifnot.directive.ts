// Урок 35
import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input() set appIfnot(condition:boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef)
      // можно и без восклицательно знака
    }else {
      this.viewContainer.clear()
    }


  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }
}
