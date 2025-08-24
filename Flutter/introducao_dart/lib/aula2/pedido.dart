import 'cliente.dart';
import 'produto.dart';

class Pedido {
  Cliente cliente;
  List<Produto> items;

  Pedido({required this.cliente, required this.items});

  double calcularTotal() {
    double resultado = 0;

    for (var i = 0; i < items.length; i++) {
      Produto item = items[i];

      resultado += item.preco;
    }

    return resultado;
  }

  void detalhesPedido() {
    print("cliente nome: " + cliente.nome);
    print("cliente email: " + cliente.email);
    print("__________");

    for (var i = 0; i < items.length; i++) {
      Produto produto = items[i];
      produto.detalhesProduto();
      print("---------");
    }
  }
}
