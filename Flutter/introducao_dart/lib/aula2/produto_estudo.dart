class Produto2 {
  final String nome;
  final int id;
  String _cor = "azul";

  Produto2({
    required this.nome,
    required this.id,
    required String corParametro,
  }) {
    _cor = corParametro;
  }

  void detalhesProduto() {
    print("nome: " + this.nome);
    print("id: " + this.id.toString());
    print("cor: " + this._cor);
  }
}

class Eletronico extends Produto2 {
  final String marca;
  final int garantiaMeses;

  Eletronico({
    required this.marca,
    required this.garantiaMeses,
    required String nomeParametro,
    required int idParametro,
    required String corParametro,
  }) : super(
         corParametro: corParametro,
         id: idParametro,
         nome: nomeParametro,
       );

  void _detalhesEletronico() {
    print('marca: ${this.marca}');
    print('garantia: ' + this.garantiaMeses.toString());
  }

  @override
  void detalhesProduto() {
    super.detalhesProduto();
    _detalhesEletronico();
  }
}
