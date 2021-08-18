import java.util.Scanner;

public class Program {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        int menu = 1;
        Array list = new Array();

        while (menu != 0){
            System.out.println("1: Cadastrar aluno.");
            System.out.println("2: Listar alunos.");
            System.out.println("3: Buscar aluno por matrícula.");
            System.out.println("4: Remover aluno.");
            System.out.println("0: Finalizar.");
            menu = scan.nextInt();

            if (menu == 1){
                System.out.println("\n----CADASTRO DE ALUNO----\n");
                System.out.println("Nome do aluno: ");
                // SE TROCAR DE UMA VEZ O NEXTINT PARA NEXTLINE, NÃO LÊ O PRIMEIRO NEXTLINE
                scan.nextLine();
                String name = scan.nextLine();

                System.out.println("Matrícula do aluno: ");
                String registration = scan.nextLine();

                System.out.println("Data de nascimento: ");
                String birthDate = scan.nextLine();

                Student student = new Student(name, registration, birthDate);
                System.out.println(list.setStudent(student));
            }
            else if(menu == 2){
                System.out.println(list);
            }
            else if(menu == 3){
                System.out.println("\n----BUSCAR ALUNO----\n");
                System.out.println("Matrícula do aluno que deseja buscar: ");
                scan.nextLine();
                String registration = scan.nextLine();

                Student student = list.getStudentByReg(registration);

                System.out.println(student + "\n");
            }
            else if(menu == 4){
                System.out.println("\n----REMOVER ALUNO----\n");
                System.out.println("Matrícula do aluno que deseja remover: ");
                scan.nextLine();
                String registration = scan.nextLine();

                System.out.println(list.removeStudent(registration));
            }
        }
    }
}
