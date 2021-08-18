package ListaLigadaSimples;

import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int menu = 1;
        Lista lista = new Lista();

        while (menu != 0) {
            System.out.println("\n----BUSCAR INFORMAÇÃO----\n");
            System.out.println("1: Cadastrar");
            System.out.println("2: Buscar");
            System.out.println("3: Remover");
            System.out.println("4: Dados");
            System.out.println("0: Finalizar.");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.println("\n----CADASTRO----\n");
                System.out.println("1: Cadastrar assinante");
                System.out.println("2: Cadastrar telefone");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.println("\n----CADASTRO DE ASSINANTE----\n");
                    System.out.print("Nome do assinante: ");
                    scan.nextLine();
                    String nome = scan.nextLine();

                    System.out.print("\nNúmero telefônico do assinante: ");
                    String numero = scan.nextLine();

                    System.out.print("\nEndereço residencial do assinante: ");
                    String morada = scan.nextLine();

                    Assinante assinante = new Assinante(nome, numero, morada);

                    lista.setAssinante(assinante);
                } else if (menu == 2) {
                    System.out.println("\n----CADASTRAR TELEFONE----\n");
                    System.out.print("\nNome do assinante: ");
                    scan.nextLine();
                    String nome = scan.nextLine();

                    Assinante assinante = lista.getAssinantePorNome(nome);

                    System.out.print("\nCadastrar novo número: ");
                    String numero = scan.nextLine();

                    assinante.setNumero(numero);
                }

            } else if (menu == 2) {
                System.out.println("\n----BUSCAR----\n");
                System.out.println("1: Buscar assinante");
                System.out.println("2: Listar assinantes");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.print("\nNome do assinante: ");
                    scan.nextLine();
                    String nome = scan.nextLine();

                    System.out.println("\n" + lista.getAssinantePorNome(nome));
                }
                if (menu == 2) {
                    System.out.println(lista);
                }
            } else if (menu == 3) {
                System.out.println("\n----REMOVER----\n");
                System.out.println("1: Remover assinante");
                System.out.println("2: Remover telefone");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.print("\nNome do assinante: ");
                    scan.nextLine();
                    String nome = scan.nextLine();

                    int posicao = lista.getPosicaoAssinantePorNome(nome);

                    lista.removeAssinantePosicao(posicao);
                }
                if (menu == 2) {
                    System.out.print("\nNome do assinante: ");
                    scan.nextLine();
                    String nome = scan.nextLine();

                    Assinante assinante = lista.getAssinantePorNome(nome);

                    System.out.print("\nÍndice do número: ");
                    int posicao = scan.nextInt();

                    assinante.removeNumero(posicao);
                }
            } else if (menu == 4) {
                System.out.println("\n----DADOS----\n");
                System.out.println("1: Total de assinantes");
                System.out.println("2: Total de telefones");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.println("\nAssinantes cadastrados: " + lista.totalAssinantes());
                } else if (menu == 2) {
                    System.out.println("\nNúmeros telefônicos cadastrados: " + lista.totalNumeros());
                }
            }
        }
    }
}
