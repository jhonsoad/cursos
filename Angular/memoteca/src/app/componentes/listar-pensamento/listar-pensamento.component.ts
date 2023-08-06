import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente Filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha prpriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'diretiva <div [ngClass]="{\'classe-1\': condição1, \'classe-2\': condição2, ...}"></div> é usada para adicionar classes css em elementos html com base em condições específicas entre seu parenteses podemos colocar tambem "[\'class1\', \'class2\', dynamicClass]" array de classes e "getDynamicClasses()" chamar um método que retorna uma string o nome da classe css',
      autoria: 'Componente Filho',
      modelo: 'modelo1'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
