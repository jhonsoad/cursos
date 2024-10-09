Criar projeto angular com application=false para ser a casca dos projetos app mfe

Criar pasta projets dentro do projeto rodar comando que cria aplicacao angular apenas e não workspace, comando ng g application nomeApp para criar aplicacao que ja ira sozinha para pasta projects criei um mfe-app e um mfe-host, para rodar o projeto colocar ng s mfe-app

Instalar webpack comando npm i webpack-cli --save-dev

Adicionar arquivo webpack para uma aplicacao, comando ng add @angular-architects/module-federation --project nomeApp --port 4300 nome do projeto e a porta em que vai rodar

Criar um modulo chamado profile para ser exposto no mfe-app comando ng g module profile --project=mfe-app

Configurar modulo profile em imports colocar
 [ CommonModule, BrowserModule, RouterModule.forChild([ path: '', component: Profilecomponent ]) ] colocando a rota defaut para o componente que quero chamar

Criar componente no mfe-app ja vai usar o modulo criado com esse comando ficara na mesma pasta a profile ng g c profile --project=mfe-app

Configurar aquivo webpack.config.js do projeto mfe-app descomentar parte de exemplo 'for remotes' para ficar assim:
name: "mfeApp",
filename: "remoteEntry.js",
exposes: {
	'./ProfileModule': './projects/mfe-app/src/app/profile/profile.module.ts',
},
com o caminho e nome exportado do modulo, 'ProfileModule' esse vai ser um nome unico no host app para exibir esse modulo

Adicionar scriptType: "text/javascript" ao output
output: {
	uniqueName: "mfeApp",
	publicPath: "auto",
	scriptType: 'text/javascript'
},
apaga o library: { type: "module" },

Configurar rotas com o componente criado

Configurar modulo criado no app.module adicionando ao imports

Ao rodar o projeto na porta 4300 consigo acessar o javascript exposto em localhost:4300/remoteEntry.js

Configurar webpack do mfe-host descomentar parte de exemplo 'For hosts'
remotes: {
	"mfeApp": "mfeApp@http://localhost:4300/remoteEntry.js",
},
passar nome unico no caso mfeApp, e depois passar o nome do microfrontenf@ o domino

Colocar no output o scriptType: "text/javascript"
apaga o library: { type: "module" },

Cria componente home no host-app

Configura rota desse componente path '', component: HomeComponent

Criar botão no app.component do host para acessar a home do mfe-host e para acessar o profile do mfe-app com outlet

Configra a rota no mfe-host
{ path: 'profile', loadChildren: () => 
loadRemoteModule({
  remoteEntry: 'http://localhost:4300/remoteEntry.js', // URL do mfe app
  remoteName: 'mfeApp', // nome do mfe app
  exposedModule: './ProfileModule' // nome do mfe module que foi exposto
}).then((m) => m.ProfileModule).catch(err => console.error('Error loading remote module', err))
}

