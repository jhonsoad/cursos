import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
