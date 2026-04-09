package operadoresrelacionais;

import java.util.Scanner;

public class VerificaSeEMaiorOuMenor {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int n = teclado.nextInt();

        String r = (n>10) ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!";

        System.out.println("O número digitado " + r);
    }
}
