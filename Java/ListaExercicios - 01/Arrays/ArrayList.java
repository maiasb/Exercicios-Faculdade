package Arrays;

import java.util.Scanner;

public class ArrayList {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] list = new String[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("\nDigite: ");
            list[i] = scan.nextLine();
        }

        for (int i = 0; i < 10; i++) {
            if (i == 0) {
                System.out.print("\n" + list[i] + ", ");
            } else if (i != 9) {
                System.out.print(list[i] + ", ");
            } else {
                System.out.print(list[i]);
            }
        }
    }
}