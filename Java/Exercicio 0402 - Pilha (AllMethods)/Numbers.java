
import java.util.Stack;

public class Numbers {
    private Stack<Integer> pilha = new Stack<>();

    public void setTopNumber(Integer num) {
        this.pilha.push(num);
    }

    public Integer removeTopNumber() {
        return this.pilha.pop();
    }

    public Integer getTopNumber() {
        return this.pilha.peek();
    }

    public void clearStack() {
        this.pilha.clear();
    }

    public Integer getSizeStack() {
        return this.pilha.size();
    }

    @Override
    public String toString() {
        if (pilha.size() == 0) {
            return "\n[]\n";
        }
        String st = "\n[";
        for (int i = 0; i < pilha.size(); i++) {
            if (i == pilha.size() - 1) {
                st += pilha.get(i).toString();
            } else {
                st += pilha.get(i).toString() + ", ";
            }
        }
        st += "]\n";
        return st;
    }
}