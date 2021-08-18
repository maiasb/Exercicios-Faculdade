public class Array {
    private Student[] students = new Student[100];
    private int totalStudents = 0;

    public String toString() {
        if (this.totalStudents == 0) {
            return "[]";
        }
        StringBuilder builder = new StringBuilder();
        builder.append("\n");
        for (int i = 0; i < this.totalStudents - 1; i++) {
            builder.append(this.students[i]);
            builder.append("\n\n");
        }
        builder.append(this.students[this.totalStudents - 1]);
        builder.append("\n");
        return builder.toString();
    }

    private void moreSpace() {
        if (this.totalStudents == this.students.length) {
            Student[] newArray = new Student[this.students.length * 2];
            for (int i = 0; i < this.students.length; i++) {
                newArray[i] = this.students[i];
            }
            this.students = newArray;
        }
    }

    public String setStudent(Student student) {
        if (checkRegistrationAlreadyExists(student.getRegistration())) {
            return "\nMatrícula já cadastrada\n";
        }

        moreSpace();
        this.students[this.totalStudents] = student;
        this.totalStudents++;

        return "\nCadastro realizado.\n";
    }

    public boolean checkRegistrationAlreadyExists(String registration) {
        boolean op = false;

        for (int i = 0; i < this.totalStudents; i++) {
            if (this.students[i].getRegistration().equals(registration)) {
                op = true;
            }
        }

        return op;
    }

    public Student getStudentByReg(String registration) {
        for (int i = 0; i < this.totalStudents; i++) {
            if (this.students[i].getRegistration().equals(registration)) {
                return this.students[i];
            }
        }

        throw new IllegalArgumentException("Matrícula não encontrada.");
    }

    public int getIndexByReg(String registration) {
        for (int i = 0; i < this.totalStudents; i++) {
            if (this.students[i].getRegistration().equals(registration)) {
                return i;
            }
        }

        throw new IllegalArgumentException("Matrícula não encontrada.");
    }

    public String removeStudent(String registration) {
        if (!checkRegistrationAlreadyExists(registration)) {
            return "\nMatrícula não encontrada.\n";
        }

        int position = getIndexByReg(registration);

        for (int i = position; i < this.totalStudents - 1; i++) {
            this.students[i] = this.students[i + 1];
        }
        this.totalStudents--;

        return "\nAluno removido.\n";
    }
}
