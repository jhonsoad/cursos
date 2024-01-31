package comparacaostring;

public class ComparacaoString {
    public static void main(String[] args) {
        String nome1 = "Gustavo";
        String nome2 = "Gustavo";
        String nome3 = new String("Gustavo"); // cria um obj string tem estrutura diefrente
        String res = (nome1.equals(nome3)) ? "igual" : "diferente"; // retorna igual
        //String res = (nome1 == nome3) ? "igual" : "diferente"; // retorna diferente

        System.out.println(res);
    }
}
