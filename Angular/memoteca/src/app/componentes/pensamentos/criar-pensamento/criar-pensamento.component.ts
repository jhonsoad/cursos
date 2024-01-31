import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup; // declara propriedade do tipo formGroup e garante ao typescript que essa variavel não sera nula ou indefinida

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder // service responsável pela construção do formulário
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({ // atribui ao parametro o conteudo a ser enviado do formulario
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
