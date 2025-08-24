int multiplicacaoNumerosInteiros(int numero1, int numero2) {
  return numero1 * numero2;
}

double multiplicacaoNumerosDecimais(double numero1, double numero2) {
  return numero1 * numero2;
}

String concatenarNome(String nome, String sobrenome) {
  return nome + sobrenome;
}

(String, int) exemploRecords(int numero) {

  if ((numero % 2) == 0) {
    return ("numero par ", numero);
  }

  return ("numero impar ", numero);

}
