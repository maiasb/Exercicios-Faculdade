package Arrays;

import java.util.Scanner;

public class CopyArray {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] vet1 = new int[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("\nDigite um número: ");
            vet1[i] = scan.nextInt();
        }

        int[] vet2 = new int[5];
        for (int i = 0; i < 5; i++) {
            vet2[i] = vet1[i];
        }

        for (int i = 0; i < 5; i++) {
            if (i == 0) {
                System.out.print("\n" + vet1[i] + ", ");
            } else if (i != 4) {
                System.out.print(vet1[i] + ", ");
            } else {
                System.out.print(vet1[i]);
            }
        }

        for (int i = 0; i < 5; i++) {
            if (i == 0) {
                System.out.print("\n" + vet2[i] + ", ");
            } else if (i != 4) {
                System.out.print(vet2[i] + ", ");
            } else {
                System.out.print(vet2[i]);
            }
        }
    }
}
