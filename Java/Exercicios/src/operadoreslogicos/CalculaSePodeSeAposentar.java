package operadoreslogicos;

import java.util.Scanner;

public class CalculaSePodeSeAposentar {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite o código do empregado: ");
        int codigo = teclado.nextInt();

        System.out.println("Digite o ano de nascimento do empregado " + codigo + ": ");
        int anoNascimento = teclado.nextInt();

        System.out.println("Digite o ano de contratacao do empregado " + codigo + ": ");
        int anoContratacao = teclado.nextInt();

        int idade = 2024 - anoNascimento;
        int tempoDeEmpresa = 2024 - anoContratacao;

        boolean verificaIdade = (idade >= 65) ? true : false;
        boolean verificaTempoDeEmpresa = (tempoDeEmpresa >=30) ? true: false;
        boolean verificaIdadeETempoDeEmpresa = (idade >= 60 && tempoDeEmpresa >= 25) ? true : false;
        String verificaAposentadoria = (verificaIdade || verificaTempoDeEmpresa || verificaIdadeETempoDeEmpresa) ?"REQUERER APOSENTADORIA" : "NÃO REQUERER";

        System.out.println("O empregado " + codigo + " " +verificaAposentadoria);
    }
}
