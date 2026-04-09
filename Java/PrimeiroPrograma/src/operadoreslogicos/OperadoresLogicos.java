package operadoreslogicos;

public class OperadoresLogicos {
    public static void main(String[] args) {
        int x, y, z;
        x = 4;
        y = 7;
        z = 12;
        boolean r;
        r = (x<y ^ y==z) ? true:false; // ^ ou exclusivo xor um ou exclusivamente outro se for os dois verdadeiros ou falso da false
        System.out.println(r);
    }
}
