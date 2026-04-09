import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  
  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

  courses = [
    { path: 'acessibilidadeWeb', title: 'Acessibilidade Web', image: 'assets/images/acessibilidade-web.jpeg' },
    { path: 'jsArmazenandoDados no Navegador', title: 'Armazenado dados no navegador', image: 'assets/images/armazenando-dados-navegador.webp' },
    { path: 'jsCriePaginasDinamicas', title: 'Js Crie Paginas Dinamicas', image: 'assets/images/crie-paginas-dinamicas.webp' },
    { path: 'jsManipulandoODOM', title: 'Js Manipulando O DOM', image: 'assets/images/manipulando-dom.webp' },
    { path: 'jsProgramandoLinguagemWeb', title: 'Js Programando na Linguagem da Web', image: 'assets/images/programando-linguagem-web.jpg' },
    { path: 'logica', title: 'Lógica', image: 'assets/images/logica.jpg' }
  ];

  showCarousel = true;

  constructor(private router: Router) {}

  navigateToCourse(path: string) {
    this.showCarousel = false;
    this.router.navigate([path]);
  }

  backToCarousel() {
    this.showCarousel = true;
  }
}
