import 'package:introducao_dart/aula2/cliente.dart';
import 'package:introducao_dart/aula2/livro.dart';
import 'package:introducao_dart/aula2/pedido.dart';
import 'package:introducao_dart/aula2/produto.dart';
import 'package:introducao_dart/aula2/sistema_loja.dart';
import 'package:my_simple_package/my_simple_package.dart';
import 'package:introducao_dart/logic.dart'
    as introducao_dart;

void main(List<String> arguments) async {
  print("inicializando a aplicação");

  ClientInterceptor client = ClientInterceptor();

  await findAll(client);
  await create(
    client,
    CreatePostModel(
      id: 123,
      title: 'Nome do filme de 123',
      body: 'Conteudo da postagem',
    ),
  );

  await updateOne(
    client,
    CreatePostModel(
      id: 123,
      title: 'outro filme',
      body: 'Conteudo da postagem',
    ),
  );

  await deleteOne(client, 1);
}





  //pacote formata data
  // var now = DateTime.now();
  // var formatador = DateFormat('dd/MM/yyyy');
  // String dataFormatada = formatador.format(now);

  // print("Data formatada: $dataFormatada");

// Stream<int> generateNumbers() async* {
//   for (var i = 1; i <= 5; i++) {
//     await Future.delayed(Duration(seconds: 1));
//     yield i;
//   }
// }
  // print("Inicializando geracao de numeros...");

  // await for (int number in generateNumbers()) {
  //   print("numero gerado: " + number.toString());
  // }

  // programacao assincrona
  // Future<String> fetchData() {
  //   return Future.error({"mensagem": "erro na requisicao"});
  // return Future.delayed(Duration(seconds: 2), () {
  //   return "Dados carregados";
  // });
  // }

    // print("Inicializando a requisicao");

  //   try {
  //     String data = await fetchData();
  //     print(data);
  //   } catch (e) {
  //     print("error: " + e.toString());
  //   }

  // fetchData()
  // .then((valorRetornado) {
  //   print(valorRetornado);
  // })
  // .catchError((error) {
  //   print("error: " + error.toString());
  // });

  // print("final da requisicao");

  // POO
  // SistemaLoja sistemaObjeto = SistemaLoja(pedidos: []);

  // Cliente clienteObjeto = Cliente(
  //   nome: 'fulano',
  //   email: 'fulano@email.com',
  // );

  // List<Produto> carrinho = [];
  // Livro LivroObjeto = Livro(
  //   autor: "José",
  //   idParametro: 3,
  //   nomeParametro: "galaxia",
  //   precoParametro: 19.90,
  // );

  // Produto produtoObjeto = Produto(
  //   nome: 'caixa',
  //   id: 1,
  //   preco: 10,
  // );

  // Produto produto2Objeto = Produto(
  //   nome: 'papel',
  //   id: 2,
  //   preco: 20,
  // );

  // carrinho.add(produtoObjeto);
  // carrinho.add(produto2Objeto);
  // carrinho.add(LivroObjeto);

  // Pedido pedidoObjeto = Pedido(
  //   cliente: clienteObjeto,
  //   items: carrinho,
  // );

  // sistemaObjeto.adicionarPedido(pedidoObjeto);

  // sistemaObjeto.listaPedidos();

  // Produto produtoObjeto = Produto(
  //   nome: "caneta",
  //   id: 1,
  //   cor: "azul",
  // );

  // produtoObjeto.detalhesProduto();

  // Eletronico eletronicoObjeto = Eletronico(
  //   marca: 'xpto',
  //   garantiaMeses: 4,
  //   nomeParametro: 'microondas',
  //   idParametro: 2,
  //   corParametro: 'branco',
  // );

  // eletronicoObjeto.detalhesProduto();

  //*****TRABALHANDO COM MAPS********* */
  // Map<String, dynamic> estruturaPessoa = {
  //   "nome": "felipe",
  //   "idade": 18,
  //   "endereco": "dsfgbeq",
  //   "conjuge": {"nome": "maria", "idade": 18, "endereco": "fwe"},
  //   "telefones": [
  //     {"residencial": "123"},
  //     {"celular": "5545123"},
  //   ],
  // };

  // String nomeConjuge = estruturaPessoa['conjuge']['nome'];

  // print(nomeConjuge);

  //*****TRABALHANDO COM SETS********* */
  // var lista = <int>[];
  // var collection = <int>{};
  // int x = 1;
  // int y = 1;
  // int z = 2;

  // lista.add(x);
  // lista.add(y);
  // lista.add(z);

  // collection.add(x);
  // collection.add(y);
  // collection.add(z);

  // print(collection);
  // print(lista);

  //*****TRABALHANDO COM LISTS********* */
  // List<int> numerosPares = [];
  // numerosPares.add(4);
  // numerosPares.add(5);
  // numerosPares.add(6);

  // for (var i = 0; i < numerosPares.length; i++) {
  //   int item = numerosPares[i];
  //   print("item: " + item.toString());
  // }

  //*****TRABALHANDO COM RECORDS********* */
  // int numero = 11;
  // final (texto, outroNumero) = introducao_dart.exemploRecords(numero);

  // print("texto: " + texto + " numero: " + outroNumero.toString());

  //*****TRABALHANDO COM BOOL********* */
  // bool valor1 = true;
  // bool valor2 = false;

  // if (valor1 == true) {
  //   print("valor 1 verdadeiro");
  // }

  // if (valor2 == true) {
  //   print("valor 2 verdadeiro");
  // }

  // print("valor1: " + valor1.toString() + " valor2: " + valor2.toString());

  //*****TRABALHANDO COM TEXTOS********* */
  // String nome = "joao";
  // String sobrenome = " da silva";
  // String resultado = introducao_dart.concatenarNome(nome, sobrenome);
  // print(resultado);

  //*****TRABALHANDO COM NUMEROS********* */
  // int numero1 = 2;
  // int numero2 = 2;

  // print('resultado inteiro: ${introducao_dart.multiplicacaoNumerosInteiros(numero1, numero2)}!');

  // double numero3 = 2.5;
  // double numero4 = 2.5;

  // print('resultado decimais: ${introducao_dart.multiplicacaoNumerosDecimais(numero3, numero4)}!');
