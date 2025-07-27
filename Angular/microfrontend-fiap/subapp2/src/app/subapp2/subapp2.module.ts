import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subapp2RoutingModule } from './subapp2-routing.module';
import { Subapp2Component } from './subapp2.component';


@NgModule({
  declarations: [
    Subapp2Component
  ],
  imports: [
    CommonModule,
    Subapp2RoutingModule
  ]
})
export class Subapp2Module { }
