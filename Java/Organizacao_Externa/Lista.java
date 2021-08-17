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

    public int[] getLista() {
        return this.lista;
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
