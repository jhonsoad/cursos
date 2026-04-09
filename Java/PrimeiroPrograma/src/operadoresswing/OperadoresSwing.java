package operadoresswing;

import javax.swing.*;
import java.util.Scanner;

public class OperadoresSwing {
//    public static void main(String[] args) {
//        // DIVISAO COM RESTO
//        Scanner teclado = new Scanner(System.in);
//        System.out.print("Digite o numerador: ");
//        int n = teclado.nextInt();
//
//        System.out.print("Digite o denominador: ");
//        int d = teclado.nextInt();
//
//        float div = n / d;
//        float res = n % d;
//
//        System.out.println("O numerador " + n + " dividido pelo denominador " + d + " é " + div + " e sobra " + res);
//
//        // Math.PI; retorna pi;
//        // Math.pow(5,2); retorna 5 elevado a 2 = 25;
//        // Math.sqrt(25); retorna raiz quadrada de 25 = 5;
//        // Math.cbrt(27); retorna raiz cubica de 27 = 3;
//    }


    public static void main(String[] args) {
        // Calculos com Math
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o uma número: ");
        int n = teclado.nextInt();

        System.out.print("Digite o expoente: ");
        int e = teclado.nextInt();

        double pi = Math.PI;
        double raiz = Math.sqrt(n);
        double raizCubica = Math.cbrt(n);
        double expoente = Math.pow(n, e);
        Math.round(pi);
        Math.round(raizCubica);
        Math.round(raiz);

        System.out.println("O pi é: " + pi);
        System.out.println("A raiz quadrada de " + n + " é " + raiz);
        System.out.println("A raiz cubica de " + n + " é " + raizCubica);
        System.out.println("O " + n + " elevado a " + e + " é " + expoente);
    }

//    private void btnDividirActionPerformed(java.awt.event.ActionEvent evt) {
//        JTextField txtNum = new JTextField(25);
//        JTextField txtDen = new JTextField(5);
//        JLabel lblDiv = new JLabel("Divisão");
//        JLabel lblResto = new JLabel("Resto");
//
//        int n = Integer.parseInt(txtNum.getText());
//        int d = Integer.parseInt(txtDen.getText());
//        float div = n / d;
//        float res = (float) Math.sqrt(n);
//        lblDiv.setText(Float.toString(div));
//        lblResto.setText(Float.toString(res));
//        System.out.println(div);
//        System.out.println(res);
//    }
}
