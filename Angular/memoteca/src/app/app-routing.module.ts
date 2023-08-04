import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmCssComponent } from './HTM-CSS/htm-css/htm-css.component';
import { AboutComponent } from './HTM-CSS/about/about.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'htmlCss', component: HtmCssComponent },
  { path: 'htmlCssSobre', component: AboutComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent},
  { path: 'criarPensamento', component: CriarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
