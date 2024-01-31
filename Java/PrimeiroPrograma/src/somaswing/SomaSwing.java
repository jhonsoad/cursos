package somaswing;

import javax.swing.*;
import java.util.Scanner;

public class SomaSwing {
//    public static void main(String[] args) {
//        // Convertendo string em numero
//        Scanner teclado = new Scanner(System.in);
//        System.out.print("Digite o primeiro número: ");
//        String s1 = teclado.nextLine();
//
//        System.out.print("Digite o segundo número: ");
//        String s2 = teclado.nextLine();
//
//        int n1 = Integer.parseInt(s1);
//        int n2 = Integer.parseInt(s2);
//        int r = n1 + n2;
//
//        System.out.println(s1 + " mais " + s2 + " é igual a " + r);
//    }

    public static void main(String[] args) {
        // Convertendo numero em string
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o primeiro número: ");
        int n1 = teclado.nextInt();

        System.out.print("Digite o segundo número: ");
        int n2 = teclado.nextInt();

        String s1 = Integer.toString(n1);
        String s2 = Integer.toString(n2);
        String r = s1 + s2;

        System.out.println(s1 + " mais " + s2 + " é igual a " + r);
    }

//    private void btnSomaActionperformed(java.awt.event.ActionEvent evt) {
//        JTextField txtN1 = new JTextField("Numerador");
//        JTextField txtN2 = new JTextField("Denominador");
//        JLabel lblSoma = new JLabel("label");
//        int n1 = Integer.parseInt(txtN1.getText());
//        int n2 = Integer.parseInt(txtN2.getText());
//        int s = n1 + n2;
//        lblSoma.setText(Integer.toString(s));
//    }
}
