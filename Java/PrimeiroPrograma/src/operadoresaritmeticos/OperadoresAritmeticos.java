package operadoresaritmeticos;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
//        int n1 = 3;
//        int n2 = 5;
//        float m = (n1 + n2)/2;
//        System.out.println("A média é igual a " + m);
//
//        int numero1 = 5;
//        //int valor1 = 5 + numero1++; //saida 10 primeiro faz a 5+5 e depois incrementa 1 no numero
//        int valor2 = 5 + ++numero1; //saida 11
//        //System.out.println(valor1);
//        System.out.println(valor2);
//        System.out.println(numero1);
//
//        int numero2 = 10;
//        //int valor3 = 4 + numero2--; //saida 14 primeiro faz a 5+5 e depois incrementa 1 no numero
//        int valor4 = 4 + --numero2; //saida 13
//        //System.out.println(valor3);
//        System.out.println(valor4);
//        System.out.println(numero2);

//        int x = 4;
//        int y = 4;
//        x += 2; // x = x + 2
//        y *= 2; // y = y * 2
//        System.out.println(x);
//        System.out.println(y);

//        float v = 8.9f;
//        int ar = (int)Math.floor(v);
//        System.out.println(ar);

        // Arredondamentos
            // Math.abs(-10); valor absoluto = 10;
        // Math.floor(3.9); arredonda pra baixo = 3;
        // Math.ceil(4.2); arredonda pra cima = 5;
        // Math.round(5.6); arredonda aritmeticamente = 6;

        double ale = Math.random();
        int n = (int) (5 + ale * (10-5)); // gera numeros de 5 a 10
        int n1 = (int) (15 + ale * (50-15)); // gera numeros de 15 a 50
        System.out.println(n);
        System.out.println(n1);
    }
}
