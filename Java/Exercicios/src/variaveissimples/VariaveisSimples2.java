package variaveissimples;

import java.util.Scanner;

public class VariaveisSimples2 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o valor de A: ");
        String a = teclado.nextLine();

        System.out.print("Digite o valor de B: ");
        String b = teclado.nextLine();

        String c = b;
        b = a;
        a = c;

        System.out.println("valor de A: " + a + "valor de B: " + b);
    }
}
