package operadoresaritmeticos;

import java.util.Scanner;

public class CalculaAnosDeIdadeEmDias {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite seus anos idade: ");
        int anosIdade = teclado.nextInt();

        System.out.print("Digite seus meses idade: ");
        int mesesIdade = teclado.nextInt();

        System.out.print("Digite seus dias idade: ");
        int diasIdade = teclado.nextInt();

        int mesesEmDias = mesesIdade * 30;
        int anosEmDias = anosIdade * 365;

        int resultado = diasIdade + mesesEmDias + anosEmDias;
        System.out.println("Sua idade apenas em dias é " + resultado);
    }
}
