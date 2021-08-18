
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Numbers pilha = new Numbers();
        int menu = 0;

        do {
            System.out.println("\n-------PILHA DE NÚMEROS-------");
            if (menu == 2) {
                System.out.println("\nNúmero no topo da pilha: " + pilha.getTopNumber());
            } else if (menu == 3) {
                System.out.println("\nRemovido: " + pilha.removeTopNumber());
            } else if (menu == 4) {
                System.out.println("\nTotal: " + pilha.getSizeStack());
            } else if (menu == 5) {
                pilha.clearStack();
                System.out.println("\nDados removidos.");
            }
            System.out.println(pilha);
            System.out.println("1: Adicionar número no topo da pilha");
            System.out.println("2: Inspecionar número no topo da pilha");
            System.out.println("3: Remover número no topo da pilha");
            System.out.println("4: Total de números");
            System.out.println("5: Limpar pilha");
            System.out.println("0: Sair");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.print("\nNovo número: ");
                int num = scan.nextInt();

                pilha.setTopNumber(num);
            }
        } while (menu != 0);
    }
}
