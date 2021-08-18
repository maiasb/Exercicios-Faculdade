public class Contato {
    private String nome;
    private String numero;

    public Contato(String nome, String numero) {
        this.nome = nome;
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "Nome: " + this.nome + "\nNúmero: " + this.numero;
    }
}
