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
            System.out.println("Digite '3' para fazer o Insertion Sort");
            System.out.println("Digite '4' para fazer o Selection Sort");
            System.out.println("Digite '5' para fazer o Bubble Sort");
            menu = scan.nextInt();

            switch (menu) {
                case 1:
                    ManipuladorArquivo.criarArquivoTXT();
                    break;
                case 2:
                    ManipuladorArquivo.leitor(path);
                    break;
                case 3:
                    ManipuladorArquivo.insertionSort(path);
                    break;
                case 4:
                    ManipuladorArquivo.selectionSort(path);
                    break;
                case 5:
                    ManipuladorArquivo.bubbleSort(path);
                    break;
            }
        } while (menu != 0);
    }
}