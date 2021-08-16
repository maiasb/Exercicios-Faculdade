import java.util.Random;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ManipuladorArquivo {

    public static void criarArquivoTXT() throws IOException {
        Scanner scan = new Scanner(System.in);
        Random random = new Random();

        System.out.printf("\nDigite o nome do arquivo:\n");
        String nomeArq = scan.next();

        FileWriter arq = new FileWriter("C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\" + nomeArq + ".txt");
        PrintWriter gravarArq = new PrintWriter(arq);

        for (int i = 0; i < 1000; i++) {
            Integer numero = random.nextInt();
            if (numero < 0) {
                numero = numero - (numero * 2);
            }
            gravarArq.printf("%d%n", numero);
        }

        arq.close();

        System.out.printf("\nO Arquivo foi criado em \"C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\"
                + nomeArq + ".txt\".\n");
    }

    public static void mergeSort() throws IOException {

    }
}
