package estruturaderepeticao;

public class MostarNumerosParesEntre1000e1200 {
    public static void main(String[] args) {
        for (int i = 1000; i <=1200; i++) {
            if (i%11 == 2) {
                System.out.println(i);
            }
        }
    }
}
