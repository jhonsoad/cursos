package operadoresrelacionais;

import java.util.Scanner;

public class VerificaSePodeVotar {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Em que a no estamos? ");
        int ano = teclado.nextInt();

        System.out.print("Em que ano vc nasceu? ");
        int anoNascimento = teclado.nextInt();

        int idade = ano - anoNascimento;
        String res = (idade >= 16)? "PODE VOTAR" : "NÃO PODE VOTAR";
        System.out.println("Você tem ou vai fazer " + idade + " anos de idade e " + res);
    }
}
