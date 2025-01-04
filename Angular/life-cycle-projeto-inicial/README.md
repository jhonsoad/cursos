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

ngOnChanges é executado sempre que ocorre uma alteração em uma das propriedades de entrada (@Input) de um componente. Ele é útil para detectar e reagir a mudanças em valores recebidos de componentes pais.

Quando o Angular detecta uma mudança nas propriedades marcadas com @Input, ele chama o método ngOnChanges e passa um objeto do tipo SimpleChanges. Esse objeto contém informações detalhadas sobre as mudanças que ocorreram nas propriedades observadas.

Estrutura do SimpleChanges
O objeto SimpleChanges é um mapa onde as chaves são os nomes das propriedades de entrada que sofreram alterações, e os valores são instâncias de SimpleChange. Cada SimpleChange contém informações sobre a mudança, como:

currentValue: O novo valor da propriedade após a mudança.
previousValue: O valor anterior da propriedade antes da mudança.
firstChange: Um booleano que indica se essa é a primeira vez que a propriedade foi alterada.

Propriedades de SimpleChange
currentValue: É o valor atual da propriedade depois da mudança. É útil para verificar o que foi atualizado.
previousValue: Mostra o valor que a propriedade tinha antes de ser alterada. Ajuda a comparar o estado anterior com o atual.
firstChange: Indica se essa é a primeira mudança que ocorreu nessa propriedade (true para a primeira mudança, false para todas as demais).

ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
        this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
}