package programaidade;

import java.util.Scanner;

public class ProgramaIdade {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Em que ano você nasceu? ");
        int nasc = teclado.nextInt();
        int idade = 2024 - nasc;
        System.out.print("Sua Idade é " + idade);
        if(idade >= 18) {
            System.out.println("Maior de Idade");
        } else {
            System.out.println("Menor de Idade");
        }
    }
}
