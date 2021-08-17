import java.io.IOException;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws IOException {
        String path = "C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\a.txt";
        // String path = "C:\\Users\\5949308\\Desktop\\JAVA\\a.txt";
        Scanner scan = new Scanner(System.in);
        int menu = 0;

        do {
            System.out.println("\nDigite '1' para criar arquivo com números randômicos.");
            System.out.println("Digite '2' para ler o arquivo");
            System.out.println("Digite '3' para fazer o MergeSort");
            menu = scan.nextInt();

            switch (menu) {
                case 1:
                    ManipuladorArquivo.criarArquivoTXT();
                    break;
                case 2:
                    ManipuladorArquivo.leitor(path);
                    break;
                case 3:
                    ManipuladorArquivo.mergeSort(path);
                    break;
            }
        } while (menu != 0);
    }
}