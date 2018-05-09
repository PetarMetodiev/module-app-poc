import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeModuleRoutingModule } from './some-module-routing.module';
import { SomeModuleComponent } from './some-module/some-module.component';

@NgModule({
  imports: [
    CommonModule,
    SomeModuleRoutingModule
  ],
  declarations: [SomeModuleComponent]
})
export class SomeModuleModule { }
