#Life cycle
durante o ciclo de vida do angulaar ele chama alguns metodos que são chamados de hooks (ganchos)
para usar esses hooks em uma classe precisamos implementar na classe com implements e depois podemos chama-los com o prefixo ng na frente ex: 
export class NomeClasse implements OnInit { ngOnInit(){} }
diferenca do ngOInit e o constructor:

Use o constructor para:
Injetar serviços ou dependências.
Inicializações leves e independentes de lógica assíncrona.

Use o ngOnInit para:
Qualquer lógica complexa ou assíncrona.
Configuração de dados que dependem de inputs ou serviços.
Manipulações que precisam que o componente esteja completamente inicializado.