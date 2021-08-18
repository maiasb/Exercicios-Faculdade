import java.util.Scanner;

public class Start {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int menu = 1;
        ListaDupla list = new ListaDupla();

        while (menu != 0) {
            System.out.println("\n----BUSCAR INFORMAÇÃO----\n");
            System.out.println("1: Cadastrar");
            System.out.println("2: Listar");
            System.out.println("3: Buscar informação");
            System.out.println("4: Remover");
            System.out.println("0: Finalizar.");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.println("\n----CADASTRO----\n");
                System.out.println("1: Início");
                System.out.println("2: Fim");
                System.out.println("3: Posição");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.println("\nInformação: ");
                    scan.nextLine();
                    String info = scan.nextLine();

                    list.inserirInicio(info);
                } else if (menu == 2) {
                    System.out.println("\nInformação: ");
                    scan.nextLine();
                    String info = scan.nextLine();

                    list.inserirFim(info);
                } else if (menu == 3) {
                    System.out.println("\nInformação: ");
                    scan.nextLine();
                    String info = scan.nextLine();

                    System.out.println("\nPosição: ");
                    int position = scan.nextInt();

                    list.inserirMeio(position, info);
                }

            } else if (menu == 2) {
                System.out.println("\n----LISTA----\n");
                System.out.println(list);
            } else if (menu == 3) {
                System.out.println("\n----BUSCAR INFORMAÇÃO----\n");
                System.out.println("Posição da informação que deseja buscar: ");
                int posicao = scan.nextInt();

                No no = list.getNo(posicao);

                System.out.println(no.getInfo() + "\n");
            } else if (menu == 4) {
                System.out.println("\n----REMOVER INFORMAÇÃO----\n");
                System.out.println("1: Início");
                System.out.println("2: Fim");
                System.out.println("3: Posição");
                menu = scan.nextInt();

                if (menu == 1) {
                    System.out.println("\nRemovido: " + list.removerInicio());
                } else if (menu == 2) {
                    System.out.println("\nRemovido: " + list.removerFim());
                } else if (menu == 3) {
                    System.out.println("\nPosição da informação que deseja remover: ");
                    int posicao = scan.nextInt();

                    System.out.println("\nRemovido: " + list.removerMeio(posicao));
                }
            }
        }
    }
}
