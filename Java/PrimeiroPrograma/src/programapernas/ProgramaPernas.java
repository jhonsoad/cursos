package programapernas;

import java.util.Scanner;

public class ProgramaPernas {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("digite a quantidade de pernas: ");
        int pernas = teclado.nextInt();
        String tipo;
        System.out.println("Isso é um(a) ");
        switch (pernas) {
            case 2:
                tipo = "Saci";
                break;
            case 3:
                tipo = "Tripé";
                break;
            case 4:
                tipo = "Quadrúpede";
                break;
            case 6, 8:
                tipo = "Aranha";
                break;
            default:
                tipo = "ET";
        }
        System.out.println(tipo);
    }
}
