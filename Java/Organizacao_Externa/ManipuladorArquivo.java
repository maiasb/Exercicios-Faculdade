import java.util.Random;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
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

    public static void mergeSort(String path) throws IOException {
        int[] lista = new int[10];
        int cont = 0;
        BufferedReader buffRead = new BufferedReader(new FileReader(path));
        String linha = "";
        while (true) {
            if (linha == "") {

            } else if (linha != null && linha != "") {
                lista[cont] = Integer.parseInt(linha);
                cont++;

            } else
                break;
            linha = buffRead.readLine();
        }
        buffRead.close();

        mergeSort(lista.length, lista);
    }

    private static void mergeSort(int tamanho, int[] vetor) {
        int elementos = 1;
        int inicio, meio, fim;

        while (elementos < tamanho) {
            inicio = 0;

            while (inicio + elementos < tamanho) {
                meio = inicio + elementos;
                fim = inicio + 2 * elementos;
                if (fim > tamanho)
                    fim = tamanho;

                intercala(vetor, inicio, meio, fim);

                inicio = fim;
            }

            elementos = elementos * 2;
        }
    }

    private static void intercala(int[] vetor, int inicio, int meio, int fim) {

        int novoVetor[] = new int[fim - inicio];
        int i = inicio;
        int m = meio;
        int pos = 0;

        while (i < meio && m < fim) {
            if (vetor[i] <= vetor[m]) {
                novoVetor[pos] = vetor[i];
                pos = pos + 1;
                i = i + 1;
            } else {
                novoVetor[pos] = vetor[m];
                pos = pos + 1;
                m = m + 1;
            }
        }

        while (i < meio) {
            novoVetor[pos] = vetor[i];
            pos = pos + 1;
            i = i + 1;
        }

        while (m < fim) {
            novoVetor[pos] = vetor[m];
            pos = pos + 1;
            m = m + 1;
        }

        for (pos = 0, i = inicio; i < fim; i++, pos++) {
            vetor[i] = novoVetor[pos];
        }

    }
}
