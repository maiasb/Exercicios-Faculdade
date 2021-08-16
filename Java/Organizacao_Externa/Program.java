import java.io.IOException;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        int menu = 0;

        do {
            System.out.println("\ndigite '1' para criar arquivo com números randômicos.");
            System.out.println("\ndigite '2' para fazer o MergeSort");
            menu = scan.nextInt();

            switch (menu) {
                case 1:
                    ManipuladorArquivo.criarArquivoTXT();
                    break;
                case 2:
                    // ManipuladorArquivo.mergeSort();
                    break;
            }
        } while (menu != 0);
    }
}