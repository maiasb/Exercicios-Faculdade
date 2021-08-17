import java.util.Random;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.util.Scanner;

public class ManipuladorArquivo {

    public static void criarArquivoTXT() throws IOException {
        Scanner scan = new Scanner(System.in);
        // String path = "C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\";
        String path = "C:\\Users\\5949308\\Desktop\\JAVA\\";
        Random random = new Random();

        System.out.printf("\nDigite o nome do arquivo:\n");
        String nomeArq = scan.next();

        FileWriter arq = new FileWriter(path + nomeArq + ".txt");
        PrintWriter gravarArq = new PrintWriter(arq);

        for (int i = 0; i < 10; i++) {
            Integer numero = random.nextInt();
            if (numero < 0) {
                numero = numero - (numero * 2);
            }
            gravarArq.printf("%d%n", numero);
        }

        arq.close();

        System.out.printf("\nO Arquivo foi criado em \"" + path + nomeArq + ".txt\".\n");
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

    public static void insertionSort(String path) throws IOException {
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

        lista.insertionSort();

        BufferedWriter buffWrite = new BufferedWriter(new FileWriter(path));
        for (int i = 0; i < lista.getTotal(); i++) {
            buffWrite.append(Integer.toString(lista.getNumber(i)) + "\n");
        }
        buffWrite.close();

        leitor(path);
    }

    public static void selectionSort(String path) throws IOException {
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

        lista.selectionSort();

        BufferedWriter buffWrite = new BufferedWriter(new FileWriter(path));
        for (int i = 0; i < lista.getTotal(); i++) {
            buffWrite.append(Integer.toString(lista.getNumber(i)) + "\n");
        }
        buffWrite.close();

        leitor(path);
    }

    public static void bubbleSort(String path) throws IOException {
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

        lista.selectionSort();

        BufferedWriter buffWrite = new BufferedWriter(new FileWriter(path));
        for (int i = 0; i < lista.getTotal(); i++) {
            buffWrite.append(Integer.toString(lista.getNumber(i)) + "\n");
        }
        buffWrite.close();

        leitor(path);
    }
}
