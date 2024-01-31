package contador01;

public class Contador01 {
    public static void main(String[] args) {
        int cc = 0;
        while (cc < 10) {
            cc ++;
            if (cc == 2 || cc == 3 || cc == 4) {
                continue; // o while é executado ate essa parte e volta para o começo, fazendo com que não saiam os valores 2, 3 e 4 no sout
            }
            if ( cc == 7) {
                break;
            }
            System.out.println("Cambalhota " + cc);
        }
    }
}
