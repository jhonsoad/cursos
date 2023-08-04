import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HtmCssComponent } from './HTM-CSS/htm-css/htm-css.component';
import { AboutComponent } from './HTM-CSS/about/about.component';
import { RouterModule } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/listar-pensamento/listar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HtmCssComponent,
    AboutComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
