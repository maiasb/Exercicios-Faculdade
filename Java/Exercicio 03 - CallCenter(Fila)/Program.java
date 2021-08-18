import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Contatos contatos = new Contatos();
        int menu = 0;

        do {
            System.out.println("\n-------CONTATOS-------\n");
            System.out.println("1: Cadastrar contato");
            System.out.println("2: Próximo contato.");
            System.out.println("0: Sair");
            menu = scan.nextInt();

            if (menu == 1) {
                System.out.print("\nNome: ");
                scan.nextLine();
                String nome = scan.nextLine();

                System.out.print("Número: ");
                String numero = scan.nextLine();

                Contato contato = new Contato(nome, numero);

                contatos.push(contato);
            } else if (menu == 2) {
                System.out.println("\nEntrar em contato com:\n" + contatos.remove());
            }
        } while (menu != 0);
    }
}