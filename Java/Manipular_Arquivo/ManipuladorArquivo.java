import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ManipuladorArquivo {

    public static void criarArquivo() throws IOException {
        Scanner scan = new Scanner(System.in);

        System.out.println("\nDigite os números separando-os com vírgula:");
        String numeros = scan.next();

        String[] numerosRecebidos = numeros.split(",");

        System.out.printf("\nDigite o nome do arquivo:\n");
        String nomeArq = scan.next();

        FileWriter arq = new FileWriter("C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\" + nomeArq + ".txt");
        PrintWriter gravarArq = new PrintWriter(arq);

        for (int i = 0; i < numerosRecebidos.length; i++) {
            gravarArq.printf("%d%n", Integer.parseInt(numerosRecebidos[i]));
        }

        arq.close();

        System.out.printf("\nO Arquivo foi criado em \"C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\"
                + nomeArq + ".txt\".\n");
    }

    public static void leitor(String path) throws IOException {
        BufferedReader buffRead = new BufferedReader(new FileReader(path));
        String linha = "";
        while (true) {
            if (linha != null) {
                System.out.println(linha);

            } else
                break;
            linha = buffRead.readLine();
        }
        buffRead.close();
    }

    public static void modificador(String path) throws IOException {
        BufferedWriter buffWrite = new BufferedWriter(new FileWriter(path));
        String linha = "";
        Scanner in = new Scanner(System.in);
        System.out.println("Escreva os números separando-os com vírgula: ");
        linha = in.nextLine();

        String[] novosNumeros = linha.split(",");

        for (int i = 0; i < novosNumeros.length; i++) {
            buffWrite.append(novosNumeros[i] + "\n");
        }
        buffWrite.close();
    }

    public static void organizador(String path) throws IOException {
        Lista lista = new Lista();
        BufferedReader buffRead = new BufferedReader(new FileReader(path));
        String linha = "";
        while (true) {
            if (linha == "") {

            } else if (linha != null && linha != "") {
                lista.setNumber(Integer.valueOf(linha).intValue());

            } else
                break;
            linha = buffRead.readLine();
        }
        buffRead.close();

        lista.organizar();

        BufferedWriter buffWrite = new BufferedWriter(new FileWriter(path));
        for (int i = 0; i < lista.getTotal(); i++) {
            buffWrite.append(Integer.toString(lista.getNumber(i)) + "\n");
        }
        buffWrite.close();

        leitor(path);
    }

}
