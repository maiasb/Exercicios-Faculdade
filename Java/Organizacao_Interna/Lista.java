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
        int i, j, x;
        for (i = 1; i < lista.length; i++) {
            x = this.lista[i];
            j = i - 1;
            this.lista[j] = x;
            while (x < this.lista[j]) {
                this.lista[j + 1] = this.lista[j];
                j--;
            }
            this.lista[j + 1] = x;
        }
    }

    public void selectionSort() {
        int i, j, min, x;
        for (i = 0; i <= total - 1; i++) {
            min = i;
            for (j = i + 1; j < total; j++) {
                if (this.lista[j] < this.lista[min])
                    min = j;
            }
            x = this.lista[min];
            this.lista[min] = this.lista[i];
            this.lista[i] = x;
        }
    }

    public void bubbleSort() {
        bubbleSort(this.lista);
    }

    public void bubbleSort(int vetor[]) {
        boolean troca = true;
        int aux;
        while (troca) {
            troca = false;
            for (int i = 0; i < vetor.length - 1; i++) {
                if (vetor[i] > vetor[i + 1]) {
                    aux = vetor[i];
                    vetor[i] = vetor[i + 1];
                    vetor[i + 1] = aux;
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
