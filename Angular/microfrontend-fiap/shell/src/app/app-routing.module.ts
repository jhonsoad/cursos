// shell/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'subapp1',
    loadChildren: () => import('../../../subapp1/src/app/subapp1/subapp1.module').then(m => m.Subapp1Module)
  },
  {
    path: 'subapp2',
    loadChildren: () => import('../../../subapp2/src/app/subapp2/subapp2.module').then(m => m.Subapp2Module)
  },
  { path: '', redirectTo: '/subapp1', pathMatch: 'full' },
  { path: '**', redirectTo: '/subapp1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }