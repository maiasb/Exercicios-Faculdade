package Arrays;

import java.util.Scanner;

public class MaiorNum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] list = new int[8];
        int maiorNum = 0;

        for (int i = 0; i < 8; i++) {
            System.out.print("\nDigite um número: ");
            list[i] = scan.nextInt();
        }

        for (int i = 0; i < 8; i++) {
            if (list[i] > maiorNum) {
                maiorNum = list[i];
            }
        }

        System.out.print("\nO maior número digitado: " + maiorNum);
    }
}
