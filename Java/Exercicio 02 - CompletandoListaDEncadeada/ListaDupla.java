
public class ListaDupla {

    No inicio;
    No fim;
    int tamanho;

    public void inserirInicio(String info) {
        No no = new No(info);
        no.setAnterior(null);
        no.setProximo(inicio);

        if (inicio != null) {
            inicio.setAnterior(inicio);
        }
        inicio = no;
        if (tamanho == 0) {
            fim = inicio;
        }
        tamanho++;
    }

    public String removerInicio() {
        if (inicio == null) {
            return null;
        }
        String out = inicio.getInfo();
        inicio = inicio.getProximo();
        tamanho--;
        return out;
    }

    public void inserirFim(String info) {
        No no = new No(info);
        no.setAnterior(fim);
        no.setProximo(null);
        fim.setProximo(no);
        fim = no;
        if (tamanho == 0) {
            inicio = fim;
        }
        tamanho++;
    }

    public String removerFim() {
        if (fim == null) {
            return null;
        }
        String out = fim.getInfo();
        fim = fim.getAnterior();
        if (fim != null) {
            fim.setProximo(null);
        } else {
            inicio = null;
        }
        tamanho--;
        return out;

    }

    public void inserirMeio(int indice, String info) {
        if (indice <= 0) {
            inserirInicio(info);
        } else if (indice >= tamanho) {
            inserirFim(info);
        } else {
            No local = inicio;
            for (int i = 0; i < indice - 1; i++) {
                local = local.getProximo();
            }
            No no = new No(info);
            no.setAnterior(local);
            no.setProximo(local.getProximo());
            local.setProximo(no);
            no.getProximo().setAnterior(no);
            tamanho++;
        }

    }

    public String removerMeio(int indice) {
        if (indice < 0 || indice >= tamanho || inicio == null) {
            return null;
        } else if (indice == 0) {
            return removerInicio();
        } else if (indice == tamanho) {
            return removerFim();
        } else {
            No local = inicio;
            for (int i = 0; i < indice; i++) {
                local = local.getProximo();
            }

            if (local.getAnterior() != null) {
                local.getAnterior().setProximo(local.getProximo());
            }
            if (local.getProximo() != null) {
                local.getProximo().setAnterior(local.getAnterior());
            }
            tamanho--;

            return local.getInfo();
        }

    }

    private boolean posicaoValida(int posicao) {
        return posicao >= 0 && posicao < this.tamanho;
    }

    public No getNo(int posicao) {
        if (!this.posicaoValida(posicao)) {
            throw new IllegalArgumentException("Posição não existe");
        }
        if (posicao == 0) {
            No atual = inicio;
            return atual;
        }
        No atual = inicio;
        for (int i = 0; i < posicao; i++) {
            atual = atual.getProximo();
        }
        return atual;
    }

    public int tamanho() {
        return this.tamanho;
    }

    public boolean contem(String info) {
        No atual = this.inicio;
        while (atual != null) {
            if (atual.getInfo().equals(info)) {
                return true;
            }
            atual = atual.getProximo();
        }
        return false;
    }

    public String toString() {
        if (this.tamanho == 0) {
            return "\nNenhum aluno cadastrado\n";
        }
        StringBuilder builder = new StringBuilder("\n");
        No atual = inicio;
        for (int i = 0; i < this.tamanho - 1; i++) {
            builder.append(atual.getInfo());
            builder.append("\n");
            atual = atual.getProximo();
        }

        builder.append(atual.getInfo());
        builder.append("\n");
        return builder.toString();
    }
}
