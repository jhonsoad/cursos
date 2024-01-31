package operadoresaritmeticos;

import java.util.Scanner;

public class CalculaReajusteDeSalario {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite o valor do salário: ");
        int salario = teclado.nextInt();

        System.out.print("Digite o percentual de reajuste; ");
        int reajuste = teclado.nextInt();

        double resultado = salario + (salario * reajuste / 100.0);
        System.out.println("O novo salário com reajuste é: " + resultado);
    }
}
