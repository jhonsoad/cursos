package programaparimpar;

import java.util.Scanner;

public class ProgramaParImpar {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite um número inteiro");
        String valor = teclado.nextLine();

        try {

            int resultado = Integer.parseInt(valor);

            if (resultado%2 ==0) {
                System.out.println("PAR");
            } else {
                System.out.println("IMPAR");
            }

        } catch (NumberFormatException e) {
            System.out.println("Por favor, digite um valor inteiro válido.");
        }

    }
}
