package numeros;

import java.util.Scanner;

public class Numeros {
    public static void main(String[] args) {
       int n, s = 0;
       String resp;
       Scanner teclado = new Scanner(System.in);
       do {
           System.out.print("Digite um número: ");
           n = teclado.nextInt();
           s += n;
           System.out.print("Quer continuar? [S/N] ");
           resp = teclado.next(); // apos ler um inteiro noteclado temos q usar o next para nao dara erro
       } while (resp.equals("S") || resp.equals("s"));
        System.out.println("A soma de todos os valores é " + s);
    }
}
