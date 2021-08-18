
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Numbers fila = new Numbers();
        int menu = 0;

        do {
            System.out.println("\n-------FILA DE NÚMEROS-------");
            if (menu == 2) {
                System.out.println("\nInício da fila: " + fila.getFirstNumber());
            } else if (menu == 3) {
                System.out.println("\nRemovido: " + fila.removeFirstNumber());
            } else if (menu == 4) {
                System.out.println("\nTotal: " + fila.getSizeQueue());
            } else if (menu == 5) {
                fila.clearQueue();
                System.out.println("\nDados removidos.");
            }
            System.out.println(fila);
            System.out.println("1: Adicionar número ao final da fila");
            System.out.println("2: Inspecionar início da fila");
            System.out.println("3: Remover número no início da fila");
            System.out.println("4: Total de números");
            System.out.println("5: Limpar fila");
            System.out.println("0: Sair");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.print("\nNovo número: ");
                int num = scan.nextInt();

                fila.setLastNumber(num);
            }
        } while (menu != 0);
    }
}
