package operadoresaritmeticos;

import java.util.Scanner;

public class CalculaDiferencaEntreDoisValores {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Insira o primeiro valor: ");
        int valor1 = teclado.nextInt();

        System.out.print("Insira o segundo valor: ");
        int valor2 = teclado.nextInt();

        int resultado = Math.abs(valor1 - valor2);

        System.out.println("A diferença entre esses 2 valores é " + resultado);
    }
}
