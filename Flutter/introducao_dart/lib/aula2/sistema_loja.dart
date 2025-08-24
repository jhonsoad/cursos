import 'pedido.dart';

class SistemaLoja {
  List<Pedido> pedidos;

  SistemaLoja({required this.pedidos});

  void adicionarPedido(Pedido novoPedido) {
    pedidos.add(novoPedido);
  }

  void listaPedidos() {
    for (var i = 0; i < pedidos.length; i++) {
      Pedido pedido = pedidos[i];
      pedido.detalhesPedido();
      double total = pedido.calcularTotal();
      
      print('total pedido: ' + total.toString());
    }
  }
}
