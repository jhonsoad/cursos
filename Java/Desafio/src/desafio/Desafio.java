package desafio;

import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String[] contas = new String[10];
        int indiceContas = 0;

        int opcao;

        do {
            System.out.println("[1] Cadastrar Conta");
            System.out.println("[2] Acessar Contas");
            System.out.println("[3] Remover Conta");
            System.out.println("[4] Sair");
            System.out.print("Escolha uma opção: ");
            opcao = teclado.nextInt();
            teclado.nextLine(); // Consumir a quebra de linha após a leitura do número

            switch (opcao) {
                case 1: // se for cadastro
                    System.out.println("*** Cadastro de Conta ***");

                    System.out.print("Nome do cliente: ");
                    String nomeCliente = teclado.nextLine();

                    System.out.print("Número da conta: ");
                    int numeroConta;
                    try { // verifica se um numero foi digitado
                        numeroConta = Integer.parseInt(teclado.nextLine()); // converte para string o numero digitado
                    } catch (NumberFormatException e) { // se der erro de conversão de string pra numero da esse NumberFormatException
                        System.out.println("Erro: Valor inválido para o número da conta. Tente novamente.");
                        continue; // se cair no catch o continue faz voltar para o inicio do loop
                    }

                    System.out.print("Número da agência: ");
                    int numeroAgencia;
                    try {
                        numeroAgencia = Integer.parseInt(teclado.nextLine());
                    } catch (NumberFormatException e) {
                        System.out.println("Erro: Valor inválido parao número da agência. Tente novamente.");
                        continue;
                    }

                    System.out.print("Saldo inicial: ");
                    double saldoInicial;
                    try {
                        saldoInicial = Double.parseDouble(teclado.nextLine());
                    } catch (NumberFormatException e) {
                        System.out.println("Erro: Valor inválido para saldo inicial. Tente novamente.");
                        continue;
                    }

                    System.out.println("Escolha o tipo de conta:");
                    System.out.println("1. Conta Corrente");
                    System.out.println("2. Conta Poupança");
                    System.out.println("3. Conta Salário");

                    int tipoConta;
                    try {
                        tipoConta = Integer.parseInt(teclado.nextLine());
                    } catch (NumberFormatException e) {
                        System.out.println("Erro: Valor inválido para o tipo de conta. Tente novamente.");
                        continue;
                    }

                    String tipoContaString; // cria outra variavel tipo conta pra poder montar a string mensagemConta

                    switch (tipoConta) {
                        case 1:
                            tipoContaString = "Conta Corrente";
                            break;
                        case 2:
                            tipoContaString = "Conta Poupança";
                            break;
                        case 3:
                            tipoContaString = "Conta Salário";
                            break;
                        default:
                            System.out.println("Erro: Opção inválida para o tipo de conta. Tente novamente.");
                            continue;
                    }

                    // Criar string com infos da conta
                    String mensagemConta = "Conta criada com sucesso!\n" +
                            "Nome do Cliente: " + nomeCliente + "\n" +
                            "Número da Conta: " + numeroConta + "\n" +
                            "Número da Agência: " + numeroAgencia + "\n" +
                            "Saldo Inicial: " + saldoInicial + "\n" +
                            "Tipo de Conta: " + tipoContaString;

                    contas[indiceContas] = mensagemConta; // posição do vetor atual recebe string com infos da conta

                    indiceContas++;

                    System.out.println(mensagemConta);
                    break;

                case 2: // Se for pra acessar conta
                    System.out.println("*** Acessar Contas ***");

                    // Verificar se há contas cadastradas
                    if (indiceContas == 0) {
                        System.out.println("Nenhuma conta cadastrada.");
                        continue;
                    } else {
                        // Exibir todas as contas cadastradas se o indiceContas for maior que 0
                        for (int i = 0; i < indiceContas; i++) {
                            System.out.println("Conta " + (i + 1) + ":\n" + contas[i] + "\n");
                        }
                    }
                    break;

                case 3: // se for pra remover conta
                    System.out.println("*** Remover Conta ***");

                    if (indiceContas == 0) {
                        System.out.println("Nenhuma conta cadastrada.");
                        continue;
                    }

                    for (int i = 0; i < indiceContas; i++) {
                        System.out.println("Conta " + (i + 1) + ":\n" + contas[i] + "\n");
                    }

                    // Perguntar qual conta deseja remover
                    System.out.print("Digite o número da conta que deseja remover: ");
                    int numeroContaRemover;
                    try {
                        numeroContaRemover = Integer.parseInt(teclado.nextLine());
                    } catch (NumberFormatException e) {
                        System.out.println("Erro: Valor inválido para o número da conta. Tente novamente.");
                        continue;
                    }

                    // Verificar se o número da conta é válido
                    if (numeroContaRemover < 1 || numeroContaRemover > indiceContas) {
                        System.out.println("Erro: Número da conta inválido. Tente novamente.");
                        continue;
                    }

                    // Remover a conta
                    for (int i = numeroContaRemover - 1; i < indiceContas - 1; i++) {
                        contas[i] = contas[i + 1];
                    }

                    // Decrementar o índice de contas
                    indiceContas--;

                    System.out.println("Conta removida com sucesso!");
                    break;

                case 4:
                    System.out.println("Saiu");
                    break;

                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }

        } while (opcao != 4);
    }
}
