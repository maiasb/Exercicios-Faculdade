package ListaLigadaSimples;

public class Celula {
    Celula proxima;
    Celula anterior;
    Assinante assinante;

    public Celula(Assinante assinante) {
        this.assinante = assinante;
    }

    public Celula(Celula proxima, Assinante assinante) {
        this.proxima = proxima;
        this.assinante = assinante;
    }

    public void setProxima(Celula proxima) {
        this.proxima = proxima;
    }

    public Celula getProxima() {
        return this.proxima;
    }

    public void setAnterior(Celula anterior) {
        this.anterior = anterior;
    }

    public Celula getAnterior() {
        return this.anterior;
    }

    public Assinante getAssinante() {
        return this.assinante;
    }
}
