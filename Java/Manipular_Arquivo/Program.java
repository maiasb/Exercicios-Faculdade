import java.io.IOException;
import java.util.Scanner;

public class Program {

    public static void main(String args[]) throws IOException {
        String path = "C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\a.txt";
        Scanner scan = new Scanner(System.in);
        int menu = 0;

        do {
            System.out.println("\n1: Criar arquivo.");
            System.out.println("2: Ler arquivo.");
            System.out.println("3: Modificar arquivo.");
            System.out.println("4: Organizar números.");
            System.out.println("0: Sair.");
            menu = scan.nextInt();

            switch (menu) {
                case 1:
                    ManipuladorArquivo.criarArquivo();
                    break;
                case 2:
                    ManipuladorArquivo.leitor(path);
                    break;
                case 3:
                    ManipuladorArquivo.modificador(path);
                    break;
                case 4:
                    ManipuladorArquivo.organizador(path);
                    break;
            }
        } while (menu != 0);
    }
}
