package operadoreslogicos;

import java.util.Scanner;

public class CalculaPrecoDoProduto {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o nome do produto: ");
        String produto = teclado.nextLine();

        System.out.print("Digite o preço unitário do " + produto + ": ");
        double precoUnitario = teclado.nextInt();

        System.out.print("Digite a quantidade adquirida do " + produto + ": ");
        int quantidade = teclado.nextInt();

        int desconto1 = (quantidade <= 5) ? 2 : 0;
        int desconto2 = (quantidade > 5 && quantidade <= 10) ? 3 : 0;
        int desconto3 = (quantidade > 10) ? 5 : 0;

        int desconto = desconto1 + desconto2 + desconto3; // 2
        double preco = (quantidade * precoUnitario); //200
        double precoDoDesconto = (preco / 100) * desconto;
        double total = preco -  precoDoDesconto;

        System.out.println("O preco da compra é " + total);
    }
}
