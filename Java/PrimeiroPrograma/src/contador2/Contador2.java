package contador2;

public class Contador2 {
    public static void main(String[] args) {
        int cc = 1;
        String contagem = "";
        while (cc < 10) {
            contagem += cc + " ";
            cc++;
        }
        System.out.println(contagem);
    }
}
