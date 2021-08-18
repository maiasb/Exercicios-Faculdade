
import java.util.Queue;
import java.util.LinkedList;

public class Numbers {
    private Queue<Integer> fila = new LinkedList<>();

    public void setLastNumber(Integer num) {
        this.fila.add(num);
    }

    public Integer removeFirstNumber() {
        return this.fila.remove();
    }

    public Integer getFirstNumber() {
        return this.fila.element();
    }

    public void clearQueue() {
        this.fila.clear();
    }

    public Integer getSizeQueue() {
        return this.fila.size();
    }

    @Override
    public String toString() {
        return "\n" + this.fila.toString() + "\n";
    }
}