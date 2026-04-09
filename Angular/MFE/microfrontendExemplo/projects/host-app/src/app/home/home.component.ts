import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('mfeComponent', { read: ViewContainerRef }) //ViewChild é usado para acessar um elemento dentro do template com a referência local #mfeComponent  read: ViewContainerRef indica que o Angular deve acessar a ViewContainerRef do elemento, permitindo a manipulação dinâmica do DOM
  mfeComponent!: ViewContainerRef; //uma propriedade obrigatória (usando ! para dizer ao TypeScript que ela será inicializada antes do uso) que conterá o contêiner para renderizar componentes dinamicamente.

  ngOnInit() {
    this.loadComponent();
  }

  // async loadComponent() { // Define um método assíncrono que carrega um componente remoto e o renderiza dinamicamente no contêiner referenciado
  //   const { ProfileComponent } = await loadRemoteModule({ // loadRemoteModule  para carregar dinamicamente o módulo remoto
  //     remoteEntry: 'http://localhost:4300/remoteEntry.js', //URL para o arquivo de entrada do módulo remoto
  //     remoteName: 'mfe-app', //nome do aplicativo remoto registrado
  //     exposedModule: './ProfileComponent' //caminho para o módulo ou componente exposto pelo aplicativo remoto.
  //   }); //O componente carregado (ProfileComponent) é extraído e armazenado em uma variável.

  //   this.mfeComponent.clear(); //Remove quaisquer componentes ou conteúdos já existentes no contêiner referenciado por mfeComponent.
  //   this.mfeComponent.createComponent(ProfileComponent); //Usa o método createComponent da ViewContainerRef para instanciar e renderizar o ProfileComponent dinamicamente dentro do contêiner.
  // }

  async loadComponent() {
    try {
        // Carrega o módulo remoto de forma assíncrona. A função `loadRemoteModule` retorna uma promessa que resolve com um objeto contendo os módulos exportados pelo MFE.
        const module = await loadRemoteModule({
            remoteEntry: 'http://localhost:4300/remoteEntry.js',  // URL do arquivo de entrada do MFE
            remoteName: 'mfeApp',  // Nome do MFE registrado
            exposedModule: './ProfileComponent'  // Caminho para o componente exportado pelo MFE
        });

        // Loga no console o módulo carregado para fins de depuração.
        console.log('Módulo carregado:', module);

        // Cria uma instância do componente remoto e o adiciona ao ViewContainerRef.
        // O método `createComponent` retorna uma referência ao componente criado.
        const componentRef = this.mfeComponent.createComponent(module.ProfileComponent);

        // Loga no console a referência ao componente criado para fins de depuração.
        console.log('Componente remoto criado:', componentRef);
    } catch (err) {
        // Captura qualquer erro que possa ocorrer durante o processo de carregamento e renderização do componente.
        console.error('Erro ao carregar o componente remoto:', err);
    }
  }

}
