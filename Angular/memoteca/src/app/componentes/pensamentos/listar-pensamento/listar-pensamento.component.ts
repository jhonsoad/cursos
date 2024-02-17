import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = ''

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => { // usamos o subscribe para receber o retorno do listar() guardamos a resposta na propriedade listaPensamentos e colocamos em uma variavel global
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro) // incrementa +1 na paginaAtual antes de fazer a chamada
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos); // acresenta os dados da nova pagina ao array que tem os dados da pagina anterior
        if(!listaPensamentos.length) { // listaPensamentos.length retorna o numero de elementos na lista, então o !listaPensamentos verifica que a lsta esta vazia
          this.haMaisPensamentos = false;
        }
      })
  } 

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.listaPensamentos = [];
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

}
