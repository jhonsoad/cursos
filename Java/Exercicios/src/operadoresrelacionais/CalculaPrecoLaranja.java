package operadoresrelacionais;

import java.util.Scanner;

public class CalculaPrecoLaranja {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Quantas laranjas deseja comprar: ");
        int quantidade = teclado.nextInt();

        double precoUnidade = 1.30;
        double precoDuzia = 1.0;

        double preco = (quantidade <= 12) ? quantidade * precoUnidade : quantidade * precoDuzia;

        System.out.printf("O valor da sua compra é R$ %.2f%n", preco); //usando print f ra saida ter 2 casas decimais
    }
}
