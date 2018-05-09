import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeModuleComponent } from './some-module/some-module.component';

const routes: Routes = [
  {
    path: '',
    component: SomeModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeModuleRoutingModule { }
