import {NgModule} from '@angular/core';
import {PageNamePipe} from './page-name.pipe';
import {ColorDirective} from './color.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  exports: [
    ColorDirective,
    PageNamePipe,
  ]
})

export class SharedModule {

}
