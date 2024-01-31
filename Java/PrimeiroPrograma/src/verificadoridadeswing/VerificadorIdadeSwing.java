package verificadoridadeswing;

import java.util.Scanner;

public class VerificadorIdadeSwing {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int nasc, idade;

        System.out.print("Digite o ano de nascimento: ");
        nasc = teclado.nextInt();

        idade =  2024 - nasc;

        if (idade < 16) {
            System.out.println("Você tem " + idade + " anos de idade e Não vota!");
        } else if ((idade >= 16 && idade < 18) || (idade > 70)) {
                System.out.println("Você tem " + idade + " anos de idade e seu voto é opcional");
        } else if (idade >= 70) {
                System.out.println("Você tem " + idade + " anos de idade e seu voto é obrigatório");
        }
    }
}
