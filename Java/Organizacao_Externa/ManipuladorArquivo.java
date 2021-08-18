import java.util.Random;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ManipuladorArquivo {

    public static void criarArquivoTXT() throws IOException {
        Scanner scan = new Scanner(System.in);
        String path = "C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\";
        // String path = "C:\\Users\\5949308\\Desktop\\JAVA\\";
        Random random = new Random();

        System.out.printf("\nDigite o nome do arquivo:\n");
        String nomeArq = scan.next();

        FileWriter arq = new FileWriter(path + nomeArq + ".txt");
        PrintWriter gravarArq = new PrintWriter(arq);

        for (int i = 0; i < 20; i++) {
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
        int[] lista = new int[20];
        int[] listaAux = new int[lista.length];
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

        mergeSort(lista, listaAux, 0, lista.length - 1);
        criarArquivoIntercala(lista);
    }

    private static void mergeSort(int[] lista, int[] listaAux, int ini, int fim) {
        // SE O INICIO FOR MAIOR QUE O FIM (O FIM TAMBÉM SERÁ O MEIO DE ACORDO COM QUE
        // AVANÇA)
        if (ini < fim) {
            int meio = (ini + fim) / 2;
            // FAZ O SORT EM TODO O INICIO ATÉ O MEIO
            mergeSort(lista, listaAux, ini, meio);
            // FAZ O SORT DO MEIO ATÉ O FIM
            mergeSort(lista, listaAux, meio + 1, fim);
            // INTERCALA OS RESULTADOS
            interlaca(lista, listaAux, ini, meio, fim);
        }
    }

    private static void interlaca(int[] lista, int[] listaAux, int ini, int meio, int fim) {
        // TODA A LISTA AUXILIAR É PREENCHIDA
        for (int k = ini; k <= fim; k++) {
            listaAux[k] = lista[k];
        }
        int i = ini;
        int j = meio + 1;

        // PERCORRE O INICIO AO FIM
        for (int k = ini; k <= fim; k++) {
            // SE O INICIO FOR MAIOR QUE O MEIO
            // O VALOR DO INDICE ATUAL RECEBE O PRÓXIMO VALOR DO INDICE A PARTIR DO MEIO
            if (i > meio) {
                lista[k] = listaAux[j++];
            }
            // SE O MEIO FOR MAIOR QUE O FIM
            // O VALOR DO INDICE ATUAL RECEBE O PRÓXIMO VALOR DO INDICE A PARTIR DO INICIO
            else if (j > fim) {
                lista[k] = listaAux[i++];
            }
            // SE O VALOR DO INDICE DO INICIO FOR MENOR QUE O VALOR DO INDICE DO MEIO DA
            // LISTA AUXILIAR
            // O VALOR DO INDICE ATUAL RECEBE O PROXIMO VALOR DO INDICE A PARTIR DO INICIO
            // SENAO, O VALOR DO INDICE ATUAL RECEBE O PROXIMO VALOR DO INDICE A PARTIR DO
            // MEIO
            else if (listaAux[i] < listaAux[j]) {
                lista[k] = listaAux[i++];
            } else {
                lista[k] = listaAux[j++];
            }
        }
    }

    public static void criarArquivoIntercala(int[] listaAux) throws IOException {
        Scanner scan = new Scanner(System.in);
        String path = "C:\\Users\\maias\\Desktop\\CODES\\TESTES\\JAVA\\Files\\";
        // String path = "C:\\Users\\5949308\\Desktop\\JAVA\\";

        System.out.printf("\nDigite o nome do arquivo:\n");
        String nomeArq = scan.next();

        FileWriter arq = new FileWriter(path + nomeArq + ".txt");
        PrintWriter gravarArq = new PrintWriter(arq);

        for (int i = 0; i < listaAux.length; i++) {
            gravarArq.printf("%d%n", listaAux[i]);
        }

        arq.close();

        System.out.printf("\nO Arquivo foi criado em \"" + path + nomeArq + ".txt\".\n");
    }
}
