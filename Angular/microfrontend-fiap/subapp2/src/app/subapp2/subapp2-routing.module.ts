import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subapp2Component } from './subapp2.component';

const routes: Routes = [{ path: '', component: Subapp2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subapp2RoutingModule { }
