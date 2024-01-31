package operadoresaritmeticos;

import java.util.Scanner;

public class CalculaVolumeCaixaDagua {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Insira a altura da caixa d'água: ");
        int altura = teclado.nextInt();

        System.out.print("Insira a largura da caixa d'água: ");
        int largura = teclado.nextInt();

        System.out.print("Insira a profundidade da caixa d'água: ");
        int profundidade = teclado.nextInt();

        int volume = altura * largura * profundidade;

        System.out.println("O volume da caixa d'agua é " + volume);
    }
}
