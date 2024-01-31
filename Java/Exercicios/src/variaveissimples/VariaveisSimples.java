package variaveissimples;


import java.util.Scanner;

public class VariaveisSimples {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = teclado.nextLine();

        System.out.print("Digite seu sobrenome: ");
        String sobrenome = teclado.nextLine();
        String nomeSobrenome = nome + " " + sobrenome;
        System.out.print(nomeSobrenome);
    }
}
