package operadoresaritmeticos;

import java.util.Scanner;

public class CalculaAntecessorDeUmNumero {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o número para saber o seu antecessor: ");
        int numero = teclado.nextInt();
        int resultado = --numero;
        numero++;
        System.out.println("O antecessor do " + numero + " é: " + resultado);
    }
}
