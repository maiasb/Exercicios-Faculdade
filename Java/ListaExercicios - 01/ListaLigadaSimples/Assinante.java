package ListaLigadaSimples;

public class Assinante {
    public String nome;
    public String[] numeros = new String[10];
    public String morada;
    public int totalNumeros = 0;

    public Assinante(String nome, String numero, String morada) {
        this.nome = nome;
        this.numeros[totalNumeros] = numero;
        this.morada = morada;
        totalNumeros++;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNumero(String numero) {
        garantaEspaco();
        this.numeros[totalNumeros] = numero;
        totalNumeros++;
    }

    public String getNumero(int index) {
        return this.numeros[index];
    }

    public void setMorada(String morada) {
        this.morada = morada;
    }

    public String getMorada() {
        return this.morada;
    }

    public int getTotalNumeros() {
        return this.totalNumeros;
    }

    public String constNumeros() {
        StringBuilder builder = new StringBuilder("\nNúmeros: ");
        for (int i = 0; i < this.totalNumeros; i++) {
            builder.append(this.numeros[i]);
            if (i != this.totalNumeros - 1) {
                builder.append(" / ");
            }
        }
        return builder.toString();
    }

    public void removeNumero(int posicao) {
        if (!this.posicaoValida(posicao)) {
            throw new IllegalArgumentException("\nPosicao inválida.");
        }

        for (int i = posicao; i < this.totalNumeros - 1; i++) {
            this.numeros[i] = this.numeros[i + 1];
        }
        this.totalNumeros--;
    }

    public boolean posicaoValida(int posicao) {
        return posicao >= 0 && posicao <= this.totalNumeros;
    }

    @Override
    public String toString() {
        return "Nome: " + this.nome + this.constNumeros() + "\nMorada: " + this.morada;
    }

    private void garantaEspaco() {
        if (this.totalNumeros == this.numeros.length) {
            String[] newArray = new String[this.numeros.length * 2];
            for (int i = 0; i < this.numeros.length; i++) {
                newArray[i] = this.numeros[i];
            }
            this.numeros = newArray;
        }
    }
}
