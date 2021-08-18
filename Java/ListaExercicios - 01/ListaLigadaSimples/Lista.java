package ListaLigadaSimples;

public class Lista {
    Celula inicio;
    Celula fim;
    int total;

    public void setAssinante(Assinante assinante) {
        if (total == 0) {
            Celula nova = new Celula(assinante);
            this.inicio = nova;
            this.fim = nova;
            total++;
        } else {
            Celula nova = new Celula(assinante);
            this.fim.setProxima(nova);
            this.fim = nova;
            total++;
        }
    }

    public Assinante getAssinantePorNome(String nome) {
        Celula temp = inicio;
        if (temp.getAssinante().getNome().equals(nome)) {
            return temp.getAssinante();
        }
        int i = 0;
        while (!temp.getAssinante().getNome().equals(nome) || i < total) {
            if (temp.getAssinante().getNome().equals(nome)) {
                break;
            }
            temp = temp.getProxima();
            i++;
        }

        return temp.getAssinante();
    }

    public int getPosicaoAssinantePorNome(String nome) {
        Celula temp = inicio;
        int i = 0;
        if (temp.getAssinante().getNome().equals(nome)) {
            return i;
        }
        while (!temp.getAssinante().getNome().equals(nome) || i < total) {
            i++;
            if (temp.getAssinante().getNome().equals(nome)) {
                break;
            }
            temp = temp.getProxima();
        }

        return i;
    }

    public void removeAssinanteInicio() {
        if (total == 0) {
            this.inicio = null;
            this.fim = null;
        } else {
            this.inicio = this.inicio.getProxima();
            total--;
        }
    }

    public void removeAssinantePosicao(int posicao) {
        if (posicaoValida(posicao)) {
            if (posicao == 0) {
                removeAssinanteInicio();
            } else if (posicao == total) {
                removeAssinanteFim();
            } else {
                Celula temp = inicio;
                for (int i = 0; i < posicao; i++) {
                    temp = temp.getProxima();
                }

                temp.getAnterior().setProxima(null);
                total--;
            }
        } else {
            throw new IllegalArgumentException("\nPosição inválida.");
        }
    }

    public void removeAssinanteFim() {
        if (total == 0) {
            this.inicio = null;
            this.fim = null;
        } else {
            this.fim = this.fim.getAnterior();
            total--;
        }
    }

    public int totalAssinantes() {
        return this.total;
    }

    public int totalNumeros() {
        int totalNumeros = 0;
        Celula celula = inicio;

        for (int i = 0; i < total; i++) {
            totalNumeros = totalNumeros + celula.getAssinante().getTotalNumeros();
            celula = celula.getProxima();
        }

        return totalNumeros;
    }

    public boolean posicaoValida(int posicao) {
        return posicao >= 0 && posicao <= this.total;
    }

    public String toString() {
        if (this.total == 0) {
            return "\nNenhum assinante cadastrado\n";
        }
        StringBuilder builder = new StringBuilder("\n");
        Celula atual = inicio;
        for (int i = 0; i < this.total - 1; i++) {
            builder.append(atual.getAssinante());
            builder.append("\n\n");
            atual = atual.getProxima();
        }

        builder.append(atual.getAssinante());
        return builder.toString();
    }

}
