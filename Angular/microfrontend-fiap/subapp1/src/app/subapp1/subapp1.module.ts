import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subapp1RoutingModule } from './subapp1-routing.module';
import { Subapp1Component } from './subapp1.component';


@NgModule({
  declarations: [
    Subapp1Component
  ],
  imports: [
    CommonModule,
    Subapp1RoutingModule
  ]
})
export class Subapp1Module { }
