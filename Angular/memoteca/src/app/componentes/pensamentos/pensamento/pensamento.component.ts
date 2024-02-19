
import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input()  pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Jhon',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito() {
    if (this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe()
    console.log("Favorito: ", this.pensamento.favorito)
  }
}
