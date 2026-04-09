import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subapp1Component } from './subapp1.component';

const routes: Routes = [
  { path: '', component: Subapp1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subapp1RoutingModule { }
