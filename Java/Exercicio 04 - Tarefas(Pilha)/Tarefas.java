
import java.util.Stack;

public class Tarefas {
    private Stack<String> tarefas = new Stack<>();

    public void push(String tarefa) {
        this.tarefas.add(tarefa);
    }

    public String remove() {
        return this.tarefas.pop().toString();
    }

    @Override
    public String toString() {
        if (tarefas.size() == 0) {
            return "\nNenhuma tarefa cadastrada.\n";
        }
        String st = "";
        for (int i = 0; i < tarefas.size(); i++) {
            st += tarefas.get(i).toString() + "\n";
        }
        return st;
    }
}