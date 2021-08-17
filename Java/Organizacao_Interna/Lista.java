public class Lista {
    private int[] lista = new int[10];
    private int total = 0;

    public void setNumber(int n) {
        this.moreSpace();
        this.lista[total] = n;
        total++;
    }

    public int getNumber(int indice) {
        return this.lista[indice];
    }

    public int getTotal() {
        return this.total;
    }

    public void insertionSort() {
        // MÉTODO PEGA O VALOR À DIREITA E RETORNA ATÉ ONDE NÃO HOUVER NÚMEROS MENORES
        // QUE ELE À ESQUERDA

        // PEGA O TAMANHO DO ARRAY
        int n = lista.length;
        // PERCORRE TODA A LISTA, AUMENTANDO O INDICE
        for (int indice = 1; indice < n; indice++) {
            // PEGA O VALOR DO INDICE ATUAL
            int valor = lista[indice];
            // PEGA O INDICE ANTERIOR AO INDICE ATUAL
            int j = indice - 1;
            // LOOP BUSCA VALORES À ESQUERDA QUE SEJAM MAIORES QUE O VALOR DO INDICE ATUAL,
            // CASO NÃO ENCONTRE, O VALOR DO INDICE ATUAL OCUPA ESTE LUGAR
            while ((j > -1) && (lista[j] > valor)) {
                // OS INDICES SÃO DIMINUIDOS E O VALOR EMPURRADO PARA A DIREITA
                lista[j + 1] = lista[j];
                j--;
            }
            // POR FIM, A CASA ONDE O VALOR ATUAL DEVE FICAR
            lista[j + 1] = valor;
        }
    }

    public void selectionSort() {
        // PERCORRE TODO O ARRAY À DIREITA, BUSCANDO O MENOR VALOR.
        // QUANDO ENCONTRA, JOGA PRO INDICE EM QUE COMEÇOU O FOR

        int i, j, min, x;
        // PERCORRE TODO O ARRAY À DIREITA
        for (i = 0; i < lista.length; i++) {
            // INDICE MÍNIMO COMEÇA COM O INDICE ATUAL
            min = i;
            // ENTRA NO FOR SE TIVER ALGUM MAIOR QUE ELE À DIREITA
            // PERCORRE TODO O ARRAY NOVAMENTE, BUSCANDO O VALOR MENOR QUE ELE À DIREITA
            for (j = i + 1; j < lista.length; j++) {
                // SE ENCONTRAR ALGUM MENOR QUE ELE À DIREITA, O INDICE DO VALOR MENOR SERÁ
                // SELECIONADO
                if (lista[j] < lista[min])
                    min = j;
            }
            // É TROCADA A POSIÇÃO ENTRE O INDICE ATUAL DO FOR E O MÍNIMO ENCONTRADO
            x = lista[min];
            lista[min] = lista[i];
            // INCIDE ATUAL DO FOR RECEBE O VALOR MÍNIMO ENCONTRADO
            lista[i] = x;
        }
    }

    public void bubbleSort() {
        bubbleSort(this.lista);
    }

    public void bubbleSort(int lista[]) {
        // AUMENTA O INDICE, COMPARANDO PARES E ORDENANDO ENTRE ELES, EMPURRANDO O MAIOR
        // NÚMERO PARA O FINAL

        // COMEÇA BOOLEAN COMO TRUE PARA ENTRAR NO LOOP
        boolean troca = true;
        int aux;
        while (troca) {
            // BOOLEAN RECEBE FALSE PARA SAIR SE NÃO PRECISAR MAIS TROCAR
            troca = false;
            // PARA CADA INDICE DO ARRAY, ELE COMPARA O VALOR DO INDICE ATUAL COM O
            // POSTERIOR.
            for (int i = 0; i < lista.length - 1; i++) {
                // SE O VALOR DO INDICE ATUAL FOR MAIOR QUE O POSTERIOR, ELES TROCAM DE POSIÇÃO
                if (lista[i] > lista[i + 1]) {
                    aux = lista[i];
                    // AQUI ELES TROCAM DE POSIÇÃO
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                    // BOOLEAN RECEBE TRUE PARA CONTINUAR NO LOOP
                    troca = true;
                }
            }
        }
    }

    private void moreSpace() {
        if (this.total == this.lista.length) {
            int[] newArray = new int[this.lista.length * 2];
            for (int i = 0; i < this.lista.length; i++) {
                newArray[i] = this.lista[i];
            }
            this.lista = newArray;
        }
    }
}
