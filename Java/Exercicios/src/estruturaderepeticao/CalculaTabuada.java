package estruturaderepeticao;

import java.util.Scanner;

public class CalculaTabuada {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite um numero para ver sua tabuada: ");
        int numero = teclado.nextInt();

        for (int i = 0; i <= 10; i++ ) {
            int resultado = numero * i;
            System.out.println("A tabuada do " + numero + " até 10 é " + resultado);
        }
    }
}
