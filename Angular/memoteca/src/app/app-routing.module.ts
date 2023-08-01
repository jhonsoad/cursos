import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmCssComponent } from './HTM-CSS/htm-css/htm-css.component';
import { AboutComponent } from './HTM-CSS/about/about.component';

const routes: Routes = [
  { path: '', component: HtmCssComponent },
  { path: 'sobre', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
