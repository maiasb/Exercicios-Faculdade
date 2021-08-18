import java.util.LinkedList;
import java.util.List;

public class Contatos {
    private List<Contato> contatos = new LinkedList<>();

    public void push(Contato contato) {
        this.contatos.add(contato);
    }

    public Contato remove() {
        return this.contatos.remove(0);
    }

    @Override
    public String toString() {
        if (this.contatos.size() == 0) {
            return "\nNenhum contato cadastrado.\n";
        }
        String st = "";
        for (int i = 0; i < this.contatos.size(); i++) {
            if (i == this.contatos.size()) {
                st += this.contatos.get(i).toString() + "\n";
            } else {
                st += "Índice: " + i + "\n" + this.contatos.get(i).toString() + "\n\n";
            }
        }
        return st;
    }
}
