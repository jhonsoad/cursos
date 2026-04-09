package operadoresrelacionais;

import java.util.Scanner;

public class VerificaSeEPositivoOuNegativo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int n = teclado.nextInt();
        String r = (n%2 == 0) ? "POSITIVO" : "NEGATIVO";

        System.out.println("O número digitado é " + r);
    }
}
