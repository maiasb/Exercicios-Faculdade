
public class No {

    String info;
    No proximo;
    No anterior;

    public No(String info) {
        this.info = info;
    }

    public No(String info, No proximo) {
        this.info = info;
        this.proximo = proximo;
    }

    public void setProximo(No proximo) {
        this.proximo = proximo;
    }

    public void setAnterior(No anterior) {
        this.anterior = anterior;
    }

    public No getProximo() {
        return this.proximo;
    }

    public No getAnterior() {
        return this.anterior;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getInfo() {
        return this.info;
    }
}
