
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Tarefas tarefas = new Tarefas();
        int menu = 0;

        do {
            System.out.println("\n-------PILHA DE TAREFAS-------\n");
            System.out.println(tarefas);
            System.out.println("1: Cadastrar tarefa");
            System.out.println("2: Finalizar tarefa");
            System.out.println("0: Finalizar aplicação");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.print("\nNova tarefa: ");
                scan.nextLine();
                String novaTarefa = scan.nextLine();

                tarefas.push(novaTarefa);
            } else if (menu == 2) {
                System.out.println("\nTarefa finalizada: " + tarefas.remove());
            }
        } while (menu != 0);
    }
}
