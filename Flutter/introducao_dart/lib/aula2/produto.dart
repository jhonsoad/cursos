class Produto {
  int id;
  String nome;
  double preco;

  Produto({
    required this.id,
    required this.nome,
    required this.preco,
  });

  void detalhesProduto() {
    print('id: ' + this.id.toString());
    print('nome: ' + this.nome);
    print('preco: ' + this.preco.toString());

  }
}
